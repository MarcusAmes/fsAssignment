var fs = require('fs');

//challenge1
console.log(fs.readFileSync('challenge1/info.txt', 'utf-8'));

//challenge2
let add1 = fs.readFileSync('challenge2/info.txt', 'utf-8')
add1 += 'Text has been added.'
fs.writeFileSync('challenge2/info.txt', add1)
console.log(fs.readFileSync('challenge2/info.txt', 'utf-8'));

//challenge3
fs.renameSync('challenge3/binfo.txt', 'challenge3/info.txt');

//challenge4
let copiedText = fs.readFileSync('challenge4/info.txt')
fs.mkdirSync('challenge4/copyfolder');
fs.writeFileSync('challenge4/copyfolder/info.txt', copiedText)

//challenge5
let rem = fs.readFileSync('challenge5/info.txt', 'utf-8')
for (let i = 0; i < rem.length; i++){
  if (rem[i] === '-') {
      rem = `${rem.substring(0,i)} ${rem.substring(i+1)}`;
    }
}
fs.writeFileSync('challenge5/info.txt', rem)

//challenge6
let files = fs.readdirSync('challenge6');
let acc = [];
for (let i = 0; i < files.length; i++) {
  if (files[i].substring(files[i].length-4) === '.txt') {
    acc.push(files[i])
  }
}
console.log(acc);
