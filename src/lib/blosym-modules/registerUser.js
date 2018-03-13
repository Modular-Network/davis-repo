import axios from 'axios';
import storeOrUpdateUserInfo from './utils/storeOrUpdateUserInfo';
import { STORENEWUSER } from './utils/storeOrUpdateUserInfo';

export default function registerUser({email, password}, test){

  return new Promise(async(resolve, reject) => {

    let response;
    if(!test){
      try {
        response = await axios.post('http://localhost:3001/users/register', {email:email});
      } catch(e) {
        return reject('RU1: Registration did not succeed. '+e);
      }
    } else {
      response = test;
    }

    let wallet = storeOrUpdateUserInfo({type: STORENEWUSER,
                                        userObject: response.data.user,
                                        wallet: response.data.wallet},
                                        test);
    resolve({email:email, wallet:wallet});
  });
}
