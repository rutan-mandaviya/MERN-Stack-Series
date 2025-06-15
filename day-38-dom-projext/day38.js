// math.random

// var r=Math.floor(Math.random()*256)
// var g=Math.floor(Math.random()*256)
// var b=Math.floor(Math.random()*256)

// box=document.querySelector("#box")
// box.style.backgroundColor=`rgb(${r},${g},${b})`

let arr=[
    {
        team:"CSK",
        primcolor:"yellow",
        seccolor:"green"
    },
    {
        team:"RCB",
        primcolor:"red",
        seccolor:"black"
    },
    {
        team:"Mi",
        primcolor:"blue",
        seccolor:"yellow"
    },
    {
        team:"SRH",
        primcolor:"orange",
        seccolor:"gold"
    },
    {
        team:"GT",
        primcolor:"black",
        seccolor:"pink"
    }
]

button=document.querySelectorAll("button")
h1=document.querySelector("#box h1");

button[0].addEventListener('click',function() {
    let num=Math.floor(Math.random()*arr.length);
    h1.innerHTML=arr[num].team;
    h1.style.backgroundColor=arr[num].primcolor
    h1.style.color=arr[num].seccolor;
})

button[1].addEventListener('click',function () {
    let num=Math.floor(Math.random()*arr.length);
    h1.innerHTML="***";
    h1.style.backgroundColor="#dadada"
    h1.style.color="black"
    
})