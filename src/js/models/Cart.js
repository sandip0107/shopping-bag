import axios from 'axios';
export default class Cart{
    constructor(){

    }
    async getResults(){
        try{
        const res = await axios('http://localhost:3000/items');
        this.items = res.data;
        //console.log(res.data);
        } catch(err){
            alert(err);
        }
        
    }
}