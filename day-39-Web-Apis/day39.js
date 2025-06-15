// set interval

// setInterval(function() {
//     console.log("heyyy");
    
// },2000)

button=document.querySelector("button")
h1=document.querySelector("#grow h1")
progrss=document.querySelector("#progress")

button.addEventListener('click',function(){
    let count=0;
   let interv= setInterval(() => {
        if(count===101) {

            button.innerHTML="Completed"
            button.style.opacity=0.5
            clearInterval(interv)
            
            return
        }
        progrss.style.width=count+"%";
        h1.innerHTML=count+"%";
        button.innerHTML="Restart 🔃"
        count++;
    }, 50);
})