
import { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLInt } from 'graphql';
import MessagteItem from './MessageItem';

const GetMessageResponse = new GraphQLObjectType(
  {
    name: 'GetMessageResponse',
    description: 'Data process message',
    fields: {
      get_message_response: {
        description: 'Result the message',
        type: new GraphQLList(MessagteItem),
      },
      status: {
        description: 'Result transcription',
        type: GraphQLNonNull(GraphQLString)
      }
    }
  }
);

export default GetMessageResponse