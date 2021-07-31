import { GraphQLObjectType } from 'graphql';
import createMessage from './mutations/createMessage';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createMessage
  }),
});

export default mutation