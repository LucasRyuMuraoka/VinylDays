export default {
  "definition": {
    "openapi": "3.0.0",
    "info": {
      "title": "Vinyl Days RESTFul API",
      "version": "1.0.0",
      "description": "Backend com. NodeJS, Express, MySQL and more for the Vinyl Days project, a music album catalog website",
      "contact": {
        "email": "matheus.fs.contato@gmail.com"
      },
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "http://localhost:3333/api",
        "description": "Vinyl Days API (to Test)"
      }
    ],
    "paths": {
      "/users": {
        "get": {
          "summary": "Find All Users",
          "description": "This route will search for all existing users on the system",
          "tags": [
            "Users"
          ],
          "responses": {
            "200": {
              "description": "List of users",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        },
                        "password": {
                          "type": "string"
                        },
                        "createdAt": {
                          "type": "string"
                        },
                        "updatedAt": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "examples": {
                    "Users List": {
                      "value": [
                        {
                          "id": "de48599e-3642-4191-bb26-ba4e8ac979b6",
                          "name": "John Doe",
                          "email": "john.doe@gmail.com",
                          "password": "John1...",
                          "createdAt": "19:59:59 17/10/2012",
                          "updatedAt": "19:59:59 17/10/2013"
                        },
                        {
                          "id": "de48599e-3642-4191-bb26-ba4e8ac979b6",
                          "name": "Jane Doe",
                          "email": "jane.doe@gmail.com",
                          "password": "Jane1...",
                          "createdAt": "19:59:59 18/10/2012",
                          "updatedAt": "19:59:59 18/10/2013"
                        },
                        {
                          "id": "d2c7344a-0edd-4225-a93d-696fdcce7da8",
                          "name": "Richard Roe",
                          "email": "richard.roe@gmail.com",
                          "password": "Richa...",
                          "createdAt": "19:59:59 18/10/2012",
                          "updatedAt": "19:59:59 18/10/2013"
                        },
                      ]
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "apis": ["./router/routes.js"]
}