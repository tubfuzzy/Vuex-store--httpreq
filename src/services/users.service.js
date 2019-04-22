 //import Axios from 'axios';
 //import { Observable } from 'rxjs';
 const RESOURCE_NAME = '/users';
 const Axios = require('axios-observable').Axios;
 
 export default {
  getAll(){
    return Axios.get(RESOURCE_NAME, { requestId: this.requestId })
  },
  getBy(){

  },
  post(){

  },
  update(){

  },
  delete(){

  }  
};



