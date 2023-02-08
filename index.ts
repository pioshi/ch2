import * as readline from 'readline';
import { CheckOut } from './src/check-out';
import { pricing_rules } from './src/prices';

const co = new CheckOut(pricing_rules);

console.log('type "exit" to close');
console.log('scans is case sensitive');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('scan: ');
rl.prompt();
rl.on('line', function(line) {
    if (line.toLowerCase() === "exit") {
        rl.close();
    }
    else { 
        co.scan(line);
        console.log('Total: ', co.total);
    }
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});
