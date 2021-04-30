

let Linkedlist = {
    head: null,
    size: 0,

    Node: {
        element: this.element,
        next: null,
    },

    // adds an element at the end
    // of list
    add: function (element) {
        // creates a new node

        let node = Object.create(this.Node);
        node.element = element;
        // to store current node
        let current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null) {
            this.head = node;
        }
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

    },

    removeElement: function (element) {
        let current = this.head;
        let prev = null;
        while (current != null) {

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
    },




    // checks the list for empty
    isEmpty: function () {
        return this.size == 0;
    },

    // gives the size of the list
    size_of_list: function () {
        console.log('Size is: ' + this.size);
    },


    // prints the list items
    printList: function () {
        let curr = this.head;
        let str = [];
        let i = 0;
        while (curr) {
            str.push(curr.element);
            curr = curr.next;
        }
        console.log(str);
    }

}


let ll = Object.create(Linkedlist);

// adding elements to the linkedlist

ll.add(1);
ll.add(2);
ll.add(3);
ll.size_of_list();
ll.printList();
ll.removeElement(2);
ll.printList();



