let btn = document.querySelectorAll('button')

for(let i=0; i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        let red=document.getElementById('red').value
        let green=document.getElementById('green').value
        let blue=document.getElementById('blue').value
        let header=document.getEle
        let toChange=document.querySelector(`${btn[i].value}`)
        toChange.style.backgroundColor=`rgb(${red},${green},${blue})`
    })
}