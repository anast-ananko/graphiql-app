interface SchemaIntrospectionResponse {
  __schema: {
    types: {
      kind: string;
      name: string;
      description?: string;
      fields?: {
        name: string;
        description?: string;
        args?: {
          name: string;
          type: {
            kind: string;
            name?: string;
          };
        }[];
        type: {
          kind: string;
          name?: string;
          ofType?: {
            kind: string;
            name?: string;
          };
        };
      }[];
    };
  };
}

export type { SchemaIntrospectionResponse };
