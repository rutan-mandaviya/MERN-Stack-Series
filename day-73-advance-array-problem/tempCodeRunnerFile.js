
let ans=0,count=0;
for(let i=0;i<arr.length;i++){
    if(count===0){
        ans=arr[i];
        count=1;
    }
    else if(arr[i]===ans){
        count++;
    }
    else{
        count--;

    }
}
console.log(ans);
