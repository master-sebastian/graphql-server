
import { GraphQLString, GraphQLObjectType } from 'graphql';

const MessageItem = new GraphQLObjectType
(
    {
        name: 'MessageItem',
        description: 'Message Item',
        fields: {
            _id: {type: GraphQLString},
            text: {type: GraphQLString},
            created_at: {type: GraphQLString},
        }
    }
)
export default MessageItem