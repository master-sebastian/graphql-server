
import { GraphQLString, GraphQLNonNull } from 'graphql';
import CreateMessageResponse from './../types/CreateMessageResponse';
import ItemMessage from  "../../interfaces/ItemMessage"
import ManagerMessage from './../../services/ManagerMessage';
import getFormat from '../../utils/getFormat'
const createMessage = {
    type: CreateMessageResponse,
    args: {
        message: {type: new GraphQLNonNull(GraphQLString)},
    },
    resolve: (_, {message}) => {
      let managerMessage:ManagerMessage = ManagerMessage.getSingleton();
      let date = new Date()
      let itemMessage: ItemMessage = {
        text: message,
        created_at: getFormat(date)
      }
      try{
        managerMessage.create(itemMessage)  
        console.log(itemMessage)
        return {
          create_message_response: itemMessage,
          status: "success"
        };
      }catch(error){
        return {
          create_message_response: {},
            status: "error"
        };
      }
    }
}

export default createMessage