function AddFun(){
    let a = document.getElementById('firstbox').value
    let b = document.getElementById('secondbox').value
   
    a = parseInt(a);
    b = parseInt(b);

    let sum = document.getElementById('res')
    s = a+b;
    sum.innerHTML = "Result : " + s;
    
}


function SubFun(){
    let a = document.getElementById('firstbox').value
    let b = document.getElementById('secondbox').value
   
    let sum = document.getElementById('res')
    s = a-b;
    sum.innerHTML = "Result : " + s;
    
}


function MulFun(){
    let a = document.getElementById('firstbox').value
    let b = document.getElementById('secondbox').value
   
    let sum = document.getElementById('res')
    s = a*b;
    sum.innerHTML = "Result : " + s;
    
}


function DivFun(){
    let a = document.getElementById('firstbox').value
    let b = document.getElementById('secondbox').value
   
    let sum = document.getElementById('res')
    s = a/b;
    sum.innerHTML = "Result : " + s;
    
}


function PwrFun(){
    let a = document.getElementById('firstbox').value
    let b = document.getElementById('secondbox').value
   
    let sum = document.getElementById('res')
    s = a**b;
    sum.innerHTML = "Result : " + s;
    
}