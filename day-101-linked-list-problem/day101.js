// revrse linked list


// Step 1: Define Node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Step 2: Create Linked List: 1 -> 2 -> 3 -> 4 -> 5 -> null
let node5 = new ListNode(5);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let head  = new ListNode(1, node2);

// Step 3: Function to print the list
function printLinkedList(head) {
    let curr = head;
    let output = '';
    while (curr !== null) {
        output += curr.val + ' -> ';
        curr = curr.next;
    }
    console.log(output + 'null');
}

function reverse() {
    
}

printLinkedList(head);
