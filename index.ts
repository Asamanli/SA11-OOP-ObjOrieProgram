#! /usr/bin/env node

import inquirer from "inquirer";

console.log("----------Welcome to chat with student----------")

//class formation
class Student{
    name: string
    constructor(n:string){
        this.name = n
    }
}

class Person{
    //student array
    students:Student[]=[]

    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()

//function formation
const programStart = async(persons:Person)=>{
    do{console.log("Start a conversation");

        const ans = await inquirer.prompt([
            {
                name: "contact",
                type: "list",
                message: "Who do you want to talk to? ",
                choices: ["Yourself(me)", "Student"],
            }
        ]);
    
        if(ans.contact == "Yourself(me)"){
            console.log("Hello talking to myself.");
            console.log("lets talk together");
            
            
        }
    
        if(ans.contact == "Student"){
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Which student do you want to talk to? ",
            });
            const student = persons.students.find(val => val.name == ans.student);
    
            //if student is not here
            if(!student){
                const name = new Student(ans.student)
                //to push new student in student class
                persons.addStudent(name)
    
                console.log(`Hello I am ${name.name}, let's talk together`);
                console.log(persons.students);
            }else{
                console.log(`Hello I am ${student.name}, let's talk together`);
                console.log(persons.students);
            }
        }}while(true)
}

programStart(persons);