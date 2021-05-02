class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
 
    
    add(element) {
        let node = new Node(element);
        let current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
 
    removeElement(element) {
        let current = this.head;
        let prev = null;
 
        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }



 
    // checks the list for empty
    isEmpty() {
        return this.size == 0;
    }
 
    // gives the size of the list
    size_of_list() {
        console.log(this.size);
    }
 
    // prints the list items
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
 
}
 
// creating an object for the
// Linkedlist class
let ll = new LinkedList();


 
// adding more elements to the list
ll.add(1);
ll.add(2);
ll.add(3);
ll.printList();
 
ll.removeElement(2);
ll.printList();
ll.removeElement(3);
ll.printList();
