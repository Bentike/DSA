// 10 --> 5 --> 16


// BIG O OF SOME BASIC OPERATIONS IN LINKED LIST

// Prepend 0(1)
// Append  0(1)
// lookUp  0(n)
// Insert  0(n)
// Delete  0(n)



// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// SINGLY LINKED LIST --->

class LinkedList {
    constructor(value){
        this.head = {
            value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = {
            value,
            next: this.head
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    // Another way to write the prepend Method

    anotherPrepend(value){
        const newNode = {
            value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // Method to print the values of all items in a Linkelist
    printList(){
        let myList = [];
        let currentNode = this.head;
        while(currentNode !== null){
            myList.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return myList;
    }

    // METHOD TO INSERT ITEMS TO ANY INDEX IN A LINKED LISTS

    insert(index, value){

        if(index >= this.length){
            return this.append(value);
        }

        const newNode = {
            value,
            next: null
        }

        const leader = this.traverseToIndex(index - 1);
        const nextPointer = leader.next;
        leader.next = newNode;
        newNode.next = nextPointer;
        this.length++;
        return this.printList();
       
    }

    traverseToIndex(index){
        let count = 0;
        let currentNode = this.head;
        while(count !== index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    // METHOD TO REMOVE AN ITEM FROM ANYWHERE IN A LINKED LIST
    remove(index){
        let pointer = this.traverseToIndex(index - 1);
        let unwantedItem = pointer.next;
        let nextItem = unwantedItem.next;
        pointer.next = nextItem;
        this.lenght--;
        return this.printList();
    }

    // METHOD TO REVERSE A SINGLY LINKED LISTS
    reverseList(){
       if(!this.head.next){
          return this.head;
       }
       let first = this.head;
       this.tail = this.head;
       let second = first.next;
       while(second){
         let temp = second.next;
         second.next = first;
         first = second;
         second = temp;
       }
       this.head.next = null;
       this.head = first;
       return this;
    }
}

const firstLinkedList = new LinkedList(10);
firstLinkedList.append(30)
firstLinkedList.prepend(60)
firstLinkedList.insert(2, 20);
firstLinkedList.insert(1, 50);
firstLinkedList.insert(2, 40);
firstLinkedList.insert(70, 100);
firstLinkedList.remove(3);
firstLinkedList.remove(3);
console.log(firstLinkedList.reverseList());
// console.log(firstLinkedList.printList());
// firstLinkedList.remove(3);
// firstLinkedList.remove(4);
// console.log(firstLinkedList.reverseList());
// console.log(firstLinkedList.printList());





// DOUBLY LINKED LISTS
// DOUBLY LINKED LISTS HAS A POINTER THAT POINTS TO THE PREVOIUS NODE.
class doublyLinkedList {
    constructor(value){
        this.head = {
            value: 10,
            next : null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = {
            value,
            next: this.head
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    // Another way to write the prepend Method

    anotherPrepend(value){
        const newNode = {
            value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    // Method to print the values of all items in a Linkelist
    printList(){
        let myList = [];
        let currentNode = this.head;
        while(currentNode !== null){
            myList.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return myList;
    }

    // METHOD TO INSERT ITEMS TO ANY INDEX IN A LINKED LISTS

    insert(index, value){

        if(index >= this.length){
            return this.append(value);
        }

        const newNode = {
            value,
            next: null,
            prev: null
        }

        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        this.length++;
        return this.printList();
       
    }

    traverseToIndex(index){
        let count = 0;
        let currentNode = this.head;
        while(count !== index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    // METHOD TO REMOVE AN ITEM FROM ANYWHERE IN A LINKED LIST
    remove(index){
        let pointer = this.traverseToIndex(index - 1);
        let unwantedItem = pointer.next;
        let nextItem = unwantedItem.next;
        pointer.next = nextItem;
        this.lenght--;
        return this.printList();
    }

}

// let myDoubly = new doublyLinkedList(50);
// myDoubly.append(40)
// myDoubly.anotherPrepend(30)
// myDoubly.anotherPrepend(70)
// myDoubly.insert(1, 60);
// myDoubly.insert(3, 100);
// console.log(myDoubly.printList());