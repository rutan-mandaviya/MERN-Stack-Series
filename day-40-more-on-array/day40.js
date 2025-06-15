// q-1 rotate array by user telling

const prompt=require("prompt-sync")()
console.log();

// let arr=[2,4,5,6,7,8]
// let k=prompt("enter number")
// q----------first approach to rotation of array
// k=k%arr.length
// for(let i=1;i<=k;i++){
//     let temp=arr[0]
//     for(let j=0;j<arr.length;j++){
//         arr[j]=arr[j+1]
//     }
//     arr[arr.length-1]=temp
// }
// console.log(arr);

// q---------second approach
// let temp=new Array(arr.length);
// for(let i=0;i<arr.length;i++){
//     temp[i]=arr[(i+k)%arr.length]
// }
// console.log(temp);


// q---------third trick


// k=k%arr.length;
// reverse(arr,0,k-1)
// reverse(arr,k,arr.length-1)
// reverse(arr,0,arr.length-1)
// console.log(arr);

// function reverse(arr,i,j){
//     while(i<j){
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         i++
//         j--
//     }
// }


// q-2----------linear search
// let key=prompt("entr key ")
// let arr=[2,4,1,5,7,8]

// let ind=-1;
// for(let i=0;i<arr.length;i++){
    //     if(arr[i]==key){
        //         ind=i;
        //         console.log("YES FOUND AT "+i);
        //         break
        //     }
        // }
        // if(ind==-1) console.log("NOT FOUND");
        
        
        // q-3    ------------- binary search
        
        let target=prompt("entr key ")
        let arr=[1,2,3,4,5,6,7]
        if(binarysearch(arr,90)===-1) console.log("not found");
        else console.log("found");
        
        
        
        function binarysearch(arr,target){
            let st=0,end=arr.length-1;
            while(st<=end){
            let mid=Math.floor(st+end)/2;
            if(arr[mid]==target){
              return mid;
        
    }
    else if(target>arr[mid]){
        st=mid+1
        
    }
    else{
        end=mid-1;
    }
return -1}
}