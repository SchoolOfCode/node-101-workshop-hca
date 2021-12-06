import myCollection from './collection.js';
import chalk from "chalk";

const describeItem = item => {
    myCollection.forEach(el => {
        if (el.name === item) {
            let count = 'a';
            let name = el.name;
            if (el.count > 1) {
                count = el.count;
                name = `${el.name}s` 
            }
            console.log(`I have ${chalk.yellow(count)} ${chalk.bold.cyan(name)}. Here's what I like about it: ${chalk.italic.green(el.whatILike)}`)
        }
    })
}
describeItem("School of Code mug");