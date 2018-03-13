import fs from 'fs';
import path from 'path';
import getUsersFile from './getUsersFile';
import storeUsersFile from './storeUsersFile';

//TODO remove wallet.privateKey and add encrypted wallet for v1

export default function storeNewUser(
  userObject, wallet, /*encryptedWallet,*/ test
){
  let usersFile = getUsersFile(test);
  let newWallet;

  if(usersFile[userObject.email]) { throw "SN1: User already exists"; }
  else {
    newWallet = {
      address: wallet.address,
      privateKey: wallet.privateKey,
      //comma needed at the end of the next line here
      label: ((wallet.label || []).length > 0) ? wallet.label : "Primary Wallet"
      //encrypted: encryptedWallet
    };
    usersFile[userObject.email] = {};
    usersFile[userObject.email]["userInfo"] = userObject;
    usersFile[userObject.email]["wallets"] = [newWallet];
  }

  storeUsersFile(usersFile, test);
  return newWallet;
}
