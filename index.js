
let input= document.querySelectorAll("input");
let getDisplay = document.getElementById("display");
for(let i=0; i<input.length; i++){
  input[i].addEventListener("input",()=>{
     let red = document.getElementById("red").value,
     green = document.getElementById("green").value,
     blue = document.getElementById("blue").value;
     getDisplay.style.backgroundColor=`rgb(${red},${green},${blue})`;
  });
}


let btn = document.querySelectorAll('button')
for(let i=0; i<btn.length;i++){
    btn[i].addEventListener('click',()=>{
        let red = document.getElementById("red").value,
        green = document.getElementById("green").value,
        blue = document.getElementById("blue").value;
        let toChange=document.querySelector(`${btn[i].value}`)
        toChange.style.backgroundColor=`rgb(${red},${green},${blue})`
    })
}