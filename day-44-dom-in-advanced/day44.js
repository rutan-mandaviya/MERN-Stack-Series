// get attribut,set attribute

// Q1. swap two images in infinity time


// button=document.querySelector("button")
// img=document.querySelectorAll("img")

// button.addEventListener('click',function(){
//    let  img1src=img[0].getAttribute('src');
//    let img2src=img[1].getAttribute('src');
 

//     img[0].setAttribute('src',img2src)
//     img[1].setAttribute('src',img1src)
    
// })


// Q2.  all create,set,get, use to make project


// button=document.querySelector("button")

// part1=document.querySelector("#part1")
// let arr=[{img:'img1.png'},{img:'img2.png'},{img:"img3.png"},{img:"img4.png"}]
// button.addEventListener('click',function(){
//     let x=Math.floor(Math.random()*90)
//     let y=Math.floor(Math.random()*90)
//     let rot=Math.floor(Math.random()*180)
//     let randomimage=Math.floor(Math.random()*arr.length)

//     let img=document.createElement('img')

//     img.setAttribute('src',arr[randomimage].img)
//     img.style.height='150px'
//     img.style.left=x+"%";
//     img.style.top=y+"%";
//     img.style.position='absolute';
//     img.style.rotate=rot+"deg";

//     console.log(img);
//     part1.appendChild(img)
    
// })


// // Q3.....instagram like feture

var box=document.querySelector("#box")
var icon =document.querySelector("i");
box.addEventListener('dblclick',function () {

    icon.style.color="red";
    icon.style.opacity=100;
     setTimeout(function () {
        icon.style.color = "gray";
        icon.style.opacity = 0;
    }, 1000);
})