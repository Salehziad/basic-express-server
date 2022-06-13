'use strict';

function validator(name){

    return (req,res,next)=>{
        let n = req.query.name;
        // test cases

        // if empty input
        if(n===''){
            next("you have enter a empty string")
        }
        // if numbers
        else if (/[0-9]{1,999}/.test(n)){
            next("your input is a number please enter name again")
        }
        // if sstart of numbers
        else if(/^\d/.test(n)){
            next("your input start with number the name should start with character")
        }
        else{
            req.name=n;
            next();
        }

    }
}

module.exports=validator;

// empty 500, number 