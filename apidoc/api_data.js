define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "login with email and password",
    "name": "LoginPost",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>user email address</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \".............\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"email or password incorrect\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "Signup New User",
    "name": "Signup",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>User's firsname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>User's lastName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Unique email of new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>User's phone number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_token\": \".............\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Conflict\n{\n  \"message\": \"operation not allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"message\": \"email already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/customers",
    "title": "Create new Customer",
    "name": "CreateCustomer",
    "group": "Customer",
    "version": "0.0.0",
    "filename": "controllers/customer.js",
    "groupTitle": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone property</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/customers/:id",
    "title": "Delete Customer by id",
    "name": "DeleteCustomer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of Customer to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/customer.js",
    "groupTitle": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/customers/:id",
    "title": "Get Customer by id",
    "name": "GetCustomer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of Customer to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/customer.js",
    "groupTitle": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/customers",
    "title": "Get all Customers",
    "name": "GetCustomers",
    "group": "Customer",
    "version": "0.0.0",
    "filename": "controllers/customer.js",
    "groupTitle": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_limit",
            "description": "<p>limit response length</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_skip",
            "description": "<p>skip the given amount of data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_sort",
            "description": "<p>sort by data eg &quot;createdAt:1&quot; in ASC, &quot;createdAt:-1&quot; in DESC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "_count",
            "description": "<p>if specified, returns the number count of query result</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>phone property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "createdAt",
            "description": "<p>date of creation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updatedAt",
            "description": "<p>date of last update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "customer",
            "description": "<p>List of customer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.firstName",
            "description": "<p>customer.firstName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.lastName",
            "description": "<p>customer.lastName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.email",
            "description": "<p>customer.email property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.phone",
            "description": "<p>customer.phone property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/customers/:id",
    "title": "Update Customer by id",
    "name": "UpdateCustomer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of Customer to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>phone property</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/customer.js",
    "groupTitle": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/movies",
    "title": "Create new Movie",
    "name": "CreateMovie",
    "group": "Movie",
    "version": "0.0.0",
    "filename": "controllers/movie.js",
    "groupTitle": "Movie",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description property</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>active property</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description property</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>active property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/Movies/:id",
    "title": "Delete Movie by id",
    "name": "DeleteMovie",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of Movie to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/movie.js",
    "groupTitle": "Movie",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description property</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>active property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/movies/:id",
    "title": "Get Movie by id",
    "name": "GetMovie",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of movie to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/movie.js",
    "groupTitle": "Movie",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description property</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>active property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/movies",
    "title": "Get all Movies",
    "name": "GetMovies",
    "group": "Movie",
    "version": "0.0.0",
    "filename": "controllers/movie.js",
    "groupTitle": "Movie",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_limit",
            "description": "<p>limit response length</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_skip",
            "description": "<p>skip the given amount of data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_sort",
            "description": "<p>sort by data eg &quot;createdAt:1&quot; in ASC, &quot;createdAt:-1&quot; in DESC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "_count",
            "description": "<p>if specified, returns the number count of query result</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "active",
            "description": "<p>active property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "createdAt",
            "description": "<p>date of creation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updatedAt",
            "description": "<p>date of last update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "movie",
            "description": "<p>List of movie</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie.name",
            "description": "<p>movie.name property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie.description",
            "description": "<p>movie.description property</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "movie.active",
            "description": "<p>movie.active property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/movieLogs",
    "title": "Create new MovieLog",
    "name": "CreateMovieLog",
    "group": "MovieLog",
    "version": "0.0.0",
    "filename": "controllers/movieLog.js",
    "groupTitle": "MovieLog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "airDates",
            "description": "<p>airDates property</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "airDates",
            "description": "<p>airDates property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/movieLogs/:id",
    "title": "Delete MovieLog by id",
    "name": "DeleteMovieLog",
    "group": "MovieLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of MovieLog to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/movieLog.js",
    "groupTitle": "MovieLog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "airDates",
            "description": "<p>airDates property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/movieLogs/:id",
    "title": "Get MovieLog by id",
    "name": "GetMovieLog",
    "group": "MovieLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of movieLog to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/movieLog.js",
    "groupTitle": "MovieLog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "airDates",
            "description": "<p>airDates property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/movieLogs",
    "title": "Get all MovieLogs",
    "name": "GetMovieLogs",
    "group": "MovieLog",
    "version": "0.0.0",
    "filename": "controllers/movieLog.js",
    "groupTitle": "MovieLog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_limit",
            "description": "<p>limit response length</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_skip",
            "description": "<p>skip the given amount of data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_sort",
            "description": "<p>sort by data eg &quot;createdAt:1&quot; in ASC, &quot;createdAt:-1&quot; in DESC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "_count",
            "description": "<p>if specified, returns the number count of query result</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "movie",
            "description": "<p>movie property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "createdAt",
            "description": "<p>date of creation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updatedAt",
            "description": "<p>date of last update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "movieLog",
            "description": "<p>List of movieLog</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movieLog.movie",
            "description": "<p>movieLog.movie(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "movieLog.airDates",
            "description": "<p>movieLog.airDates property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/movieLogs/:id",
    "title": "Update MovieLog by id",
    "name": "UpdateMovieLog",
    "group": "MovieLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of MovieLog to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "airDates",
            "description": "<p>airDates property</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/movieLog.js",
    "groupTitle": "MovieLog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "airDates",
            "description": "<p>airDates property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/movies/:id",
    "title": "Update Movie by id",
    "name": "UpdateMovie",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of Movie to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description property</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>active property</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/movie.js",
    "groupTitle": "Movie",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description property</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>active property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/tickets",
    "title": "Create new Ticket",
    "name": "CreateTicket",
    "group": "Ticket",
    "version": "0.0.0",
    "filename": "controllers/ticket.js",
    "groupTitle": "Ticket",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "capacity",
            "defaultValue": "10",
            "description": "<p>capacity property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expiry",
            "description": "<p>expiry property</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sold",
            "description": "<p>sold property</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "capacity",
            "defaultValue": "10",
            "description": "<p>capacity property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expiry",
            "description": "<p>expiry property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sold",
            "description": "<p>sold property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/tickets/:id",
    "title": "Delete Ticket by id",
    "name": "DeleteTicket",
    "group": "Ticket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of Ticket to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/ticket.js",
    "groupTitle": "Ticket",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "capacity",
            "defaultValue": "10",
            "description": "<p>capacity property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expiry",
            "description": "<p>expiry property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sold",
            "description": "<p>sold property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/tickets/:id",
    "title": "Get Ticket by id",
    "name": "GetTicket",
    "group": "Ticket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of Ticket to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/ticket.js",
    "groupTitle": "Ticket",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "capacity",
            "defaultValue": "10",
            "description": "<p>capacity property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expiry",
            "description": "<p>expiry property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sold",
            "description": "<p>sold property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/tickets",
    "title": "Get all Tickets",
    "name": "GetTickets",
    "group": "Ticket",
    "version": "0.0.0",
    "filename": "controllers/ticket.js",
    "groupTitle": "Ticket",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_limit",
            "description": "<p>limit response length</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_skip",
            "description": "<p>skip the given amount of data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_sort",
            "description": "<p>sort by data eg &quot;createdAt:1&quot; in ASC, &quot;createdAt:-1&quot; in DESC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "_count",
            "description": "<p>if specified, returns the number count of query result</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "movie",
            "description": "<p>movie property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "capacity",
            "description": "<p>capacity property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "expiry",
            "description": "<p>expiry property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sold",
            "description": "<p>sold property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "createdAt",
            "description": "<p>date of creation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updatedAt",
            "description": "<p>date of last update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ticket",
            "description": "<p>List of ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ticket.movie",
            "description": "<p>ticket.movie(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ticket.capacity",
            "defaultValue": "10",
            "description": "<p>ticket.capacity property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ticket.expiry",
            "description": "<p>ticket.expiry property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ticket.sold",
            "description": "<p>ticket.sold property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/ticketLogs",
    "title": "Create new TicketLog",
    "name": "CreateTicketLog",
    "group": "TicketLog",
    "version": "0.0.0",
    "filename": "controllers/ticketLog.js",
    "groupTitle": "TicketLog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ticket",
            "description": "<p>ticket(ObjectId) property</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "customers",
            "description": "<p>customers(ObjectId) property</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ticket",
            "description": "<p>ticket(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "customers",
            "description": "<p>customers(ObjectId) property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/ticketLogs/:id",
    "title": "Delete TicketLog by id",
    "name": "DeleteTicketLog",
    "group": "TicketLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of TicketLog to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/ticketLog.js",
    "groupTitle": "TicketLog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ticket",
            "description": "<p>ticket(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "customers",
            "description": "<p>customers(ObjectId) property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/ticketLogs/:id",
    "title": "Get TicketLog by id",
    "name": "GetTicketLog",
    "group": "TicketLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of TicketLog to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/ticketLog.js",
    "groupTitle": "TicketLog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ticket",
            "description": "<p>ticket(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "customers",
            "description": "<p>customers(ObjectId) property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/ticketLogs",
    "title": "Get all TicketLogs",
    "name": "GetTicketLogs",
    "group": "TicketLog",
    "version": "0.0.0",
    "filename": "controllers/ticketLog.js",
    "groupTitle": "TicketLog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_limit",
            "description": "<p>limit response length</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_skip",
            "description": "<p>skip the given amount of data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_sort",
            "description": "<p>sort by data eg &quot;createdAt:1&quot; in ASC, &quot;createdAt:-1&quot; in DESC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "_count",
            "description": "<p>if specified, returns the number count of query result</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ticket",
            "description": "<p>ticket property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "createdAt",
            "description": "<p>date of creation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updatedAt",
            "description": "<p>date of last update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ticketLog",
            "description": "<p>List of ticketLog</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ticketLog.ticket",
            "description": "<p>ticketLog.ticket(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "ticketLog.customers",
            "description": "<p>ticketLog.customers(ObjectId) property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/ticketLogs/:id",
    "title": "Update TicketLog by id",
    "name": "UpdateTicketLog",
    "group": "TicketLog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of TicketLog to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ticket",
            "description": "<p>ticket(ObjectId) property</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "customers",
            "description": "<p>customers(ObjectId) property</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/ticketLog.js",
    "groupTitle": "TicketLog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ticket",
            "description": "<p>ticket(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "customers",
            "description": "<p>customers(ObjectId) property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/tickets/:id",
    "title": "Update Ticket by id",
    "name": "UpdateTicket",
    "group": "Ticket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of Ticket to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "capacity",
            "defaultValue": "10",
            "description": "<p>capacity property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "expiry",
            "description": "<p>expiry property</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sold",
            "description": "<p>sold property</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/ticket.js",
    "groupTitle": "Ticket",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>movie(ObjectId) property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "capacity",
            "defaultValue": "10",
            "description": "<p>capacity property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expiry",
            "description": "<p>expiry property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sold",
            "description": "<p>sold property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create new User",
    "name": "CreateUser",
    "group": "User",
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"user,admin\""
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>role property</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user,admin\""
            ],
            "optional": false,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>role property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User by id",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of User to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user,admin\""
            ],
            "optional": false,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>role property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get User by id",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of User to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user,admin\""
            ],
            "optional": false,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>role property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all Users",
    "name": "GetUsers",
    "group": "User",
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_limit",
            "description": "<p>limit response length</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "_skip",
            "description": "<p>skip the given amount of data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_sort",
            "description": "<p>sort by data eg &quot;createdAt:1&quot; in ASC, &quot;createdAt:-1&quot; in DESC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_populate",
            "description": "<p>populate dependencies eg &quot;user,...&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_include",
            "description": "<p>include dependencies eg &quot;user,...&quot; where data has user_id property</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "_count",
            "description": "<p>if specified, returns the number count of query result</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "_select",
            "description": "<p>select only specified properties eg 'username,email' exclude '-email,-password'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>phone property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>role property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "createdAt",
            "description": "<p>date of creation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updatedAt",
            "description": "<p>date of last update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>List of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>user.firstName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>user.lastName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>user.email property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phone",
            "description": "<p>user.phone property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user,admin\""
            ],
            "optional": false,
            "field": "user.role",
            "defaultValue": "user",
            "description": "<p>user.role property</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update User by id",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of User to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>phone property</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"user,admin\""
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>role property</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "description": "<p>jwt authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "{\n  \"Authorization\": \"Bearer {jwt token}\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone property</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"user,admin\""
            ],
            "optional": false,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>role property</p>"
          }
        ]
      }
    }
  }
] });
