// linked list problem

// make singly linked list insert at the first

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insetAtFirst(val) {
    const newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    // console.log(this.head);
    this.size++;
  }
  insetAtLast(val) {
    const newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
  deleteAtfirst() {
    if (this.head == null) {
      console.log("emptylist");
      return;
    }

    this.head = this.head.next;
  }
  deleteAtlast() {
    if (this.head == null) {
      console.log("emptylist");
      return;
    }

    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }

    temp.next = null;
  }

  insetAtPosition(val,index){
    console.log(this.size);
    
    if(index<0 || index>this.size+1){
        console.log("Not a Possible");
        return 0
    } 
    this.size++;
    let newNode=new Node(val)
    if (this.head == null) {
      this.head=newNode
      return;
    }
let temp=this.head
    for(let i=0;i<index-1;i++){
        temp=temp.next;
    }
    newNode.next=temp.next;
    temp.next=newNode
  
  }

  deleteAtPosition(index){
    if(index<0 || index>=this.size){
        console.log("invalid input");
        return 
    }
    if(this.head==null){
        console.log("list is empty");
        return 
    }

    this.size--;
    if(index===0){
        this.head=this.head.next;
        return;
    }
    let temp=this.head
    for(let i=0;i<index-1;i++){
        temp=temp.next;
    }
    temp.next=temp.next.next;
  }
  printll() {
    if (this.head == null) {
      console.log("empty list");
      return;
    }
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.val + "->");
      temp = temp.next;
    }
    console.log(null);
  }
}
let obj = new Linkedlist();
obj.insetAtFirst(10);
obj.insetAtFirst(20);
obj.insetAtFirst(30);
obj.insetAtFirst(40);
obj.insetAtFirst(50);

obj.printll();
