// promises

const pr=new Promise(function(resolve,reject){
    console.log("go to instagram");
    console.log("fethind data....");
    console.log("error in data");
    reject();
})

pr.then(function(){
    console.log("sucess");
    
}).catch(function(){
    console.log("eror");
    
})