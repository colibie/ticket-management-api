const { set, omit, get, forEach, split, reduce, map, indexOf, first, isNumber, isString, isArray, isObject, replace } = require('lodash');
const { DocumentQuery, Types } = require('mongoose');
const DateFn = require('date-fns');
const EJSON = require('mongodb-extended-json');

const parseQuery = (query) => {
  let data = omit(query, '_populate', '_select', '_count', '_or', '_and', '_sum', '_skip', '_limit', '_sort');

  forEach(data, (val, key) => {
    if (val && val.match && val.match(/\/.*\/.*/)) {
      // match for regex values
      try {
        eval(val);
        data[key] = eval(val);
      } catch (error) {
      }
    } else if (val && val.match && (val.match(/\{.*\}/) || val.match(/(true|false)/))) {
      // match for object values
      try {
        data[key] = EJSON.parse(val);
      } catch (error) {
      }
    }

    // cast string to relevant ObjectId
    let v = data[key];
    if (new RegExp("^[0-9a-fA-F]{24}$").test(v) && Types.ObjectId.isValid(v)) data[key] = Types.ObjectId(v);
  });

  return data;
}

const getSumData = (data, query) => {
  let regex = /(\w{1,})\[(.*)\]/g;
  let match = regex.exec(query);
  if (match && match.length > 1) {
    let parts = split(match[2], ',');
    switch (parts.length) {
      case 1:
        if (regex.test(parts[0])) {
          return getSumData(data, parts[0]);
        }
        return reduce(get(data, match[1]), (prev, curr) => {
          return prev + get(curr, parts[0], 0);
        }, 0);
      case 3:
        return reduce(get(data, match[1]), (prev, curr) => {
          if (get(curr, parts[0]) == parts[1]) {
            return prev + get(curr, parts[2], 0);
          }
          return prev;
        }, 0);
      default:
        return 0;
    }
  }
  return get(data, query, 0);
}

const filterArray = (data, condition, props, others) => {
  return map(data, (d) => filterProperties(d, condition, props, others));
}

const filterObject = (data, condition, props, others) => {
  if (condition(data)) {
    forEach(data, (val, key) => {
      if (indexOf(props, key) >= 0) {
        delete data[key];
        return;
      }
      data[key] = filterProperties(val, condition, props, others);
    });
  } else {
    forEach(data, (val, key) => {
      if (indexOf(others, key) >= 0) {
        delete data[key];
        return;
      }
      data[key] = filterProperties(val, condition, props, others);
    });
  }
  return data;
}

const filterProperties = (data, condition, props, others) => {
  if (!data) {
    return data;
  }

  if (isNumber(data)) {
    return data;
  }

  if (isString(data)) {
    return data;
  }

  if (isArray(data)) {
    return filterArray(data, condition, props, others);
  }

  if (isObject(data)) {
    return filterObject(data, condition, props, others);
  }

  return data;
}

const getPopulateObject = (path) => {
  let parts = split(path, '.');
  let obj = {};
  let currentPath = 'populate';
  forEach(parts, (p) => {
    set(obj, `${currentPath}.path`, replace(p, ':', '.'));
    currentPath += '.populate';
  });
  return obj.populate;
}

module.exports = {
  getPopulateObject,
  parseQuery,
  generateGetSingleQuery: async (model, cond, options) => {
    let search = undefined;
    switch (typeof cond) {
      case 'string':
        search = model.findById(cond);
        break;
      default:
        search = model.findOne(cond);
    }
    if (options && options._select) {
      search.select(replace(options._select, /,/g, ' '));
    }
    if (options && options._populate) {
      try {
        let split = options._populate.split(',');
        for (let i = 0; i < split.length; i++) {
          search.populate(getPopulateObject(split[i]));
        }
      } catch (error) { }
    }
    return await search.exec();
  },
  generateSearchQuery: async (model, cond = {}) => {    
    let data = parseQuery(cond);
    /**
     * @type {DocumentQuery}
     */
    let search = model.find(data);

    if (cond._or) {
      let or = [];
      try {
        or = JSON.parse(cond._or);
      } catch (error) {
        or = cond._or;
      }
      forEach(or, (val, key) => {
        or[key] = parseQuery(val);
      });
      search.or(or);
    }
    if (cond._and) {
      let and = [];
      try {
        and = JSON.parse(cond._and);
      } catch (error) {
        and = cond._and;
      }
      forEach(and, (val, key) => {
        and[key] = parseQuery(val);
      });
      search.and(and)
    }
    if (cond._sort) {
      let sort = {};
      try {
        let sortString = cond._sort.split(',');
        forEach(sortString, (s) => {
          let split = s.split(':');
          sort[split[0]] = split[1];
        })
      } catch (error) { }
      search.sort(sort);
    }
    if (cond._skip) {
      search.skip(Number.parseInt(cond._skip));
    }
    if (cond._limit && Number.parseInt(cond._limit) <= 500) {
      search.limit(Number.parseInt(cond._limit));
    } else {
      search.limit(500);
    }
    if (cond._select) {
      search.select(replace(cond._select, /,/g, ' '));
    }
    if (cond._count) {
      return await search.countDocuments();
    } else if (cond._sum) {
      let list = await search.exec();
      return list.reduce((prev, curr) => {
        return prev + Number(getSumData(curr, cond._sum));
      }, 0);
    } else {
      if (cond._populate) {
        try {
          let split = cond._populate.split(',');
          for (let i = 0; i < split.length; i++) {
            search.populate(getPopulateObject(split[i]));
          }
        } catch (error) { }
      }
      return await search.exec();
    }
  },
  filterProperties: (data, condition, props = ['password', 'isAdmin', 'documents'], others = ['password']) => {
    try {
      if (data && data._doc) {
        data = data._doc;
      }
      else if (first(data) && first(data)._doc) {
        data = map(data, (d) => d._doc);
      }
      return filterProperties(JSON.parse(JSON.stringify(data)), condition, props, others);
    } catch (error) {
      return data;
    }
  },
  /**
   * @returns {Date}
   */
  getNextDayOfWeek: (date, dayOfWeek) => {
    // Code to check that date and dayOfWeek are valid left as an exercise ;)

    let resultDate = new Date(date.getTime());

    if (date.getDay() == dayOfWeek) {
      resultDate.setDate(date.getDate() + 7);
    }
    if (date.getDay() < dayOfWeek) {
      resultDate.setDate(date.getDate() + dayOfWeek);
    }
    if (date.getDay() > dayOfWeek) {
      resultDate.setDate(date.getDate() + 7 - dayOfWeek);
    }

    return resultDate;
  },
  /**
   * @param {String} startDate
   * @param {Number} value
   * @param {String} valueType
   * @param {Array<Number>} skipDays
   */
  getNextDate: (startDate, value, valueType, skipDays) => {
    let time = undefined;
    switch (valueType) {
      case 'minute':
        time = DateFn.addMinutes(startDate, value);
        break;
      case 'hour':
        time = DateFn.addHours(startDate, value);
        break;
      case 'day':
        time = DateFn.addDays(startDate, value)
        break;
      case 'week':
        time = DateFn.addWeeks(startDate, value);
        break;
      case 'month':
        time = DateFn.addMonths(startDate, value);
        break;
      case 'year':
        time = DateFn.addYears(startDate, value);
        break;
    }
    let loop = 0;
    while (loop <= 7 && skipDays && skipDays.indexOf(time.getDay()) >= 0) {
      time = DateFn.addDays(time, 1);
      loop++;
    }
    return time;
  },
  delay: (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, time);
    });
  }
}
