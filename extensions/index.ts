import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
import giveKudos from './giveKudos';
import leaderboard from './leaderboard';

// make a fake graphql tagged template literal
const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type LeaderboardItem {
      user: User
      position: Int
      completions: Int
    }
    type Query {
      leaderboard(userId: ID): [LeaderboardItem]
    }
    type Mutation {
      giveKudos(completionId: ID): Completion
    }
  `,
  resolvers: {
    Mutation: {
      giveKudos,
    },
    Query: {
      leaderboard,
    },
  },
});
