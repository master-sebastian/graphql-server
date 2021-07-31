import { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLList } from 'graphql';
import MessagteItem from './MessageItem';
const CreateMessageResponse = new GraphQLObjectType(
    {
        name: 'createMessageResult',
        fields: {
          create_message_response: {
              description: 'Result the message',
              type: MessagteItem,
          }, 
          status:{
              description: 'Result transcription',
              type: GraphQLNonNull(GraphQLString)
          }
        }
    }
)


export default CreateMessageResponse