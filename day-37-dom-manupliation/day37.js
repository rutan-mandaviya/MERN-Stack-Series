//DOM - document object Model

// 4-Pillar of DOM
// 1.Selection of element 
//changing elemnt 
//changing css
//Event Listner

// var h1=document.querySelector('h1')
// h1.innerHTML='vartman ankho'
// h1.style.color="blue"
// console.log(h1);

// h1.addEventListener('click',function() {
//     h1.style.color="red"
// })


// var h1=document.querySelectorAll("h1")
// console.log(h1[0]);
// h1[0].textContent="<h1>heyyyy</h1>"//sirf text change karta hai 
// h1[0].innerHTML="<h1>heyyyy</h1>"// tag bhi change krta hai
// h1[1].innerHTML=""
// h1[2].innerHTML=""


// var button=document.querySelector("button")
// var box=document.getElementById("box")
// var isblue=0;
// button.addEventListener('click',function(){
//     if(isblue==0){
//     box.style.backgroundColor="blue"
//     isblue=1
// }
// else{
//         box.style.backgroundColor="red"
//     isblue=0
//     }

// })

var button=document.querySelector('button')
var h5=document.querySelector('#card h5')
let isfriend=0
button.addEventListener('click',function() {
    if(isfriend==0){
    h5.innerHTML='Friends';
    h5.style.color="green";
    button.innerHTML="Remove Friend";
    isfriend=1;
}
else{
        h5.innerHTML='Stranger';
        h5.style.color="red";
        button.innerHTML="Add Friend";
        isfriend=0;

    }
})