var shell = require('shelljs');

var pkgs = [
  'ws',
  'supports-color'
];

for(var i = 0; i < pkgs.length; i++){
  if (shell.exec('./node_modules/.bin/babel ./node_modules/'+pkgs[i]+' --out-dir ./node_modules/'+pkgs[i]).code !== 0) {
    shell.echo('Stopped at '+pkgs[i]);
    shell.exit(1);
  }
}

shell.echo('\nAll good Ben, Merry Christmas!\n\n');
shell.exit(0);