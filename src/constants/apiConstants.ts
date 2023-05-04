const API_BASE_URL = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

const SCHEMA_INTROSPECTION_QUERY = `
  query IntrospectionQuery {
    __schema {
      types {
        kind
        name
        description
        fields {
          name
          description
          args {
            name
            type {
              kind
              name
            }
          }
          type {
            kind
            name
            ofType {
              kind
              name
            }
          }
        }
      }
    }
  }
  `;

export { API_BASE_URL, SCHEMA_INTROSPECTION_QUERY };
