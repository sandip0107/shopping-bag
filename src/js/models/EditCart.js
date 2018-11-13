import low from 'lowdb';
import FileSync from 'lowdb/adapters/LocalStorage';

export default class EditCart{
    constructor(id){
        this.id = parseInt(id);
    }
    getItem(){
        try{
            const adapter = new FileSync('cartData');
            const db = low(adapter);
            this.result = db.get('items').find({id: this.id}).value();
        } catch(err){
            alert(err);
        }
        
    }
}