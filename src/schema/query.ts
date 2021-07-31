import { GraphQLObjectType } from 'graphql';
import getMessage from './queries/getMessage'
const query = new GraphQLObjectType({
  name: 'Query',
  fields: (): any => ({
    getMessage
  })
});

export default query;