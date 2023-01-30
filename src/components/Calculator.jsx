import react from "react";

function add(a,b){
    return(
        a+b
    );
}

function subtract(a,b){
    return(
        (a>b)?a-b:b-a
    );
}

function multiply(a,b){
    return(
        a*b
    );
}

function divide(a,b){
    return(
        a/b
    );
}

export {add,multiply,divide,subtract}; 