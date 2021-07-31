import ManagerMessage from './../../services/ManagerMessage';
import GetAllMessageResponse  from './../types/GetAllMessageResponse';


const getMessage = {
    type: GetAllMessageResponse,
    args: {},
    resolve: (_, {}) => {
      let managerMessage:ManagerMessage = ManagerMessage.getSingleton();
      return {
        get_message_response: managerMessage.all(),
        status: "success"
      };
    },
};

export default getMessage