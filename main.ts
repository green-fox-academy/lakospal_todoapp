'use strict';


const fs=require('fs');
let printusage=  fs.readFileSync('./printusage.txt', 'utf-8');
const args: string[] = process.argv;

let mainProcess = () => {

  if (args.length == 2) {
    console.log(printusage);
  }
}
mainProcess();

//-----------------------------------------------------------------------------------

let todolist=  fs.readFileSync('./todolist.txt', 'utf-8');

todolist=todolist.split("\n");
//console.log(todolist);

if(args[2]=="-l"){
for (let i=0;i<=todolist.length-1;i++){
  console.log(i+1+" - "+todolist[i])
}
}
  


