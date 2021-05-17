import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
import giveKudos from './giveKudos';

// make a fake graphql tagged template literal
const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      giveKudos(completionId: ID): Completion
    }
  `,
  resolvers: {
    Mutation: {
      giveKudos,
    },
  },
});
