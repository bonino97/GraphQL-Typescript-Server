import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
  Query: {
    hello(): string {
      return 'Hello World!';
    },
    helloWithName(__: void, { name }): string {
      return `Hello World -> ${name}`;
    },
    helloToGraphQL(): string {
      return `Hello World with GraphQL`;
    },
  },
};

export default query;
