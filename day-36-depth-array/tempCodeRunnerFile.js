let i=0,j=0;

while(i<arr.length)
    {
  if(arr[i]!=0){
    i++;
  }
  else{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    j++;
  }
}
console.log(arr);