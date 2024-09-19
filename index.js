const buttons =document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
// console.log(body);
buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
    //  let color = e.target.id 
    // console.log(e.target.id);
    body.style.backgroundColor= e.target.id;
    console.log(e);
    })
});