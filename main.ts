'use strict';

const fs=require('fs');

const args: string[] = process.argv;

let mainProcess = () => {

  if (args.length == 2) {
    console.log(" Let me help you\nCommand Line Todo application\n=============================\n\nCommand line arguments:\n\t-l Lists all the tasks\n\t-a   Adds a new task\n\t-r   Removes an task\n\t-c   Completes an task ");
  } else if (args[2] == 'lis  t'){
    console.log('i am listing all the todos')
  } else {
    console.log('this is the error handling');
  }
}
mainProcess();
