import fs from 'fs';
import path from 'path';

export default function storeUsersFile(usersFile, test){
  //if(test) { var nw = {App:{dataPath: __dirname}}; }

  let filePath = path.join(nw.App.dataPath,'bUsers.json');
  fs.writeFileSync(filePath, JSON.stringify(usersFile,null,2));
}
