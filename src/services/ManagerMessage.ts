import ItemMessage from "./../interfaces/ItemMessage";

export default class ManagerMessage {

    private static singleton: ManagerMessage|null  = null;
    private name: string = 'manager-message'
    private listMessages: ItemMessage[] = [];
    private id: number = 0;
 
    private constructor(){}
    
    public static getSingleton(){
        if(ManagerMessage.singleton == null){
            ManagerMessage.singleton = new ManagerMessage();
        }
        return ManagerMessage.singleton;
    }

    public all(): ItemMessage[] {
        return [...this.listMessages]
    }

    public create(item: ItemMessage): ItemMessage {
        this.listMessages.push(item)
        this.id++
        item._id = Buffer.from(`${this.name}-${this.id}`).toString('base64')
        return item
    }
}