import fs from 'fs';
import path from 'path';

export default function getUsersFile(test){
  //if(test) { var nw = {App:{dataPath: __dirname}}; }

  let filePath = path.join(nw.App.dataPath,'bUsers.json');
  try{
    //see if the user storage exists
    return JSON.parse(fs.readFileSync(filePath));
  } catch(e){
    //if not, we'll write the file
    return {};
  }
}
