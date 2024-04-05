import inquirer from "inquirer";
import chalk from "chalk";
let todo:string[]=[]
let while_condition:boolean = true;
console.log(chalk.greenBright.italic('\t\n******************Welcome To You in DUA TODO LIST*****************************\t\n'))
while (while_condition === true ){
    // *************options****************************
    let options = await inquirer.prompt([
        {
            type:"list",
            name:"user_option",
            message:chalk.yellow('Select an option'),
            choices:["add","remove"]
        }
    ])
// **********************Add*************************
if(options.user_option === "add"){
    let ans = await inquirer.prompt([
        {
            type:"Input",
            name:"user_ans",
            message:chalk.magenta("Write something to add in your task:")
        }
        
    ])
if(ans.user_ans !== ''){
    todo.push(ans.user_ans);
    console.log(todo);
}else {
    console.log(chalk.redBright("Please write something to add in your todo list"));
}

}
// ********************remove*********************************8
else if(options.user_option === "remove"){
    let removeChoice = await inquirer.prompt([
        {
            type:"list",
            name:"remove_items",
            message:"Select item to remove",
            choices:todo
        }
    ])
    let index = todo.indexOf(removeChoice.remove_items);
if(index >= 0  ){
    todo.splice(index , 1);
    console.log('You remove :',removeChoice.remove_items);
    console.log(todo);
}
}
// *******************conformation******************************
let user_ans = await inquirer.prompt([
    {
        type:"confirm",
        name:"selection",
        message:chalk.blueBright.bold("Do you want to continue?"),
        default:true
    }
])
if(user_ans.selection === false){
    while_condition = false;
}


}
