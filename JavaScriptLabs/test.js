
   
    function Node(element) {
        this.element = element;
        this.next = null
    }

    function Linkedlist() {
        this.head = null;
        this.size = 0;
    }
 
    // adds an element at the end
    // of list
    Linkedlist.prototype.add =function(element) {
        // creates a new node
        let node = new Node(element);
 
        // to store current node
        let current;
 
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
 
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
 
            // add node
            current.next = node;
        }
        this.size++;
    }
 
    Linkedlist.prototype.removeElement=function(element) {
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
    Linkedlist.prototype.isEmpty=function() {
        return this.size == 0;
    }
 
    // gives the size of the list
    Linkedlist.prototype.size_of_list=function() {
        console.log(this.size);
    }
 
    // prints the list items
    Linkedlist.prototype.printList=function() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
 

 
// creating an object for the
// Linkedlist class
let ll = new Linkedlist();


 
// adding more elements to the list
ll.add(1);
ll.add(2);
ll.add(3);
ll.printList();
 
ll.removeElement(2);
ll.printList();