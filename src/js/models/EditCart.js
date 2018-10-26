import axios from 'axios';
export default class EditCart{
    constructor(id){
        this.id = id;
    }
    async getItem(){
        try{
        const res = await axios(`http://localhost:3000/items/${this.id}`);
        this.result = res.data;
        } catch(err){
            alert(err);
        }
        
    }
}