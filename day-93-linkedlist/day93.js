// // make singly linked list insert at the first

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

  insertAtPos(val, ind) {
    const newNode = new Node(val);
    if (ind < 0 || ind > this.size) {
      console.log("it is a invalis place");
      return;
    }

    if (this.head != null) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    let temp = this.head;

    for (let i = 0; i < ind - 1; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;
  }
  DeleteAtPos(ind) {
    if (ind < 0 || ind > this.size) {
      console.log("it is a invalid place");
      return;
    }

    if (this.head != null) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let temp = this.head;
    for (let i = 0; i < ind - 1; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
    this.size--;
  }
  insetAtFirst(val) {
    const newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      this.size++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAtLast(val) {
    const newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      this.size++;
      return;
    }

    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
    this.size++;
  }
  DeleteAtLast() {
    if (this.head == null || this.head.next == null) {
      this.head = null;

      return;
    }

    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }

    temp.next = null;
  }
  DeleteAtFirst() {
    if (this.head == null) {
      return;
    }
    this.head = this.head.next;
  }

  printLL() {
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

obj.insetAtFirst(30);
obj.insetAtFirst(10);
obj.insetAtFirst(20);
obj.insetAtFirst(40);
obj.insetAtFirst(50);
obj.insetAtFirst(60);
obj.insertAtPos(10, 0);
obj.printLL();
obj.DeleteAtPos(0);
obj.printLL();

// class Node{
//     constructor(val){
//         this.val=val
//         this.next=null;
//     }

// }
// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     insetAtFirst(val){
//         const newNode=new Node(val)

//         if(this.head==null){
//             this.head=newNode
//             return
//         }

//         newNode.next=this.head
//         this.head=newNode;
//         // console.log(this.head);
//         this.size++;
//     }
//     insetAtLast(val){
//         const newNode=new Node(val);

//         if(this.head==null){
//             this.head=newNode
//             return
//         }
//         let temp=this.head
//         while(temp.next!=null){
//             temp=temp.next;
//         }
//         temp.next=newNode;

//     }
//     deleteAtfirst(){
//         if(this.head==null){
//             console.log("emptylist");
//             return
//         }

//         this.head=this.head.next;
//     }
//     deleteAtlast(){
//         if(this.head==null){
//             console.log("emptylist");
//             return
//         }

//         if(this.head.next==null){
//             this.head=null
//             return
//         }
//         let temp=this.head
//         while(temp.next.next!=null ){
//             temp=temp.next;
//         }

//         temp.next=null;
//     }
//     printll(){
//        if(this.head==null){
//         console.log("empty list");
//         return

//        }
//        let temp=this.head
//        while(temp!=null){
//         process.stdout.write(temp.val+"->")
//         temp=temp.next;
//        }
//        console.log(null);

//     }
// }
// let obj=new Linkedlist();
// obj.insetAtFirst(10)

// obj.printll()
// obj.deleteAtlast()
// obj.printll()
