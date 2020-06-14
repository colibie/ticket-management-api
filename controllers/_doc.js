/**
 * @apiDefine ListQueryParams
 *
 * Handles querying on a particular collection
 * @apiParam {Number} [_limit] limit response length
 * @apiParam {Number} [_skip] skip the given amount of data
 * @apiParam {String} [_sort] sort by data eg "createdAt:1" in ASC, "createdAt:-1" in DESC
 * @apiParam {String} [_populate] populate dependencies eg "user,..."
 * @apiParam {String} [_include] include dependencies eg "user,..." where data has user_id property
 * @apiParam {Boolean} [_count] if specified, returns the number count of query result
 * @apiParam {String} [_select] select only specified properties eg 'username,email' exclude '-email,-password'
 */

/**
  * @apiDefine PopulateQueryParam
  * @apiParam {String} [_populate] populate dependencies eg "user,..."
  * @apiParam {String} [_include] include dependencies eg "user,..." where data has user_id property
  * @apiParam {String} [_select] select only specified properties eg 'username,email' exclude '-email,-password'
  */

/**
 * @apiDefine Authentication
 *
 * Handles requests that require authentication
 * @apiHeader {String} [authorization] jwt authorization token
 * @apiHeaderExample {json} Authorization-Example:
 *     {
 *       "Authorization": "Bearer {jwt token}"
 *     }
 */

/**
  * @apiDefine OtherModelParams
  * @apiParam {String} [createdAt] date of creation
  * @apiParam {String} [updatedAt] date of last update
  */