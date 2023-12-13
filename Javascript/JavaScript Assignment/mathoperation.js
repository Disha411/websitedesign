//Addition

function Addval() {
    var num1 = Number(document.getElementById("fno").value);  
    var num2 = Number(document.getElementById("sno").value);
    
    document.querySelector(".Answer").innerHTML = num1 + num2;    
    // (num1 + num2) = document.querySelector(".Answer").innerHTML ;    

    // document.getElementById(".fno").innerHTML="" 
    // document.getElementById(".sno").innerHTML="" 
    return false 
}

//Substraction

function Subval() {
    var num1 = Number(document.getElementById("fno").value);  
    var num2 = Number(document.getElementById("sno").value);
    
    document.querySelector(".Answer").innerHTML = num1 - num2;
    return false 
}


//Multiplication

function Mulval() {
    var num1 = Number(document.getElementById("fno").value);  
    var num2 = Number(document.getElementById("sno").value);
    
    document.querySelector(".Answer").innerHTML = num1 * num2;
    return false 
}

//Division

function Divval() {
    var num1 = Number(document.getElementById("fno").value);  
    var num2 = Number(document.getElementById("sno").value);
    
    document.querySelector(".Answer").innerHTML = num1 / num2;
    return false 
}

//Module

function Modval() {
    var num1 = Number(document.getElementById("fno").value);  
    var num2 = Number(document.getElementById("sno").value);
    
    document.querySelector(".Answer").innerHTML = num1 % num2;
    return false 
}

