let screen = document.querySelectorAll(".display");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelectorAll(".btn-red");
let equal = document.querySelectorAll(".btn-green");
let string = ''

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = '';
            document.querySelector('input').value = string; ;
        }
        else{
        string += e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})