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

class LinkedList {
    constructor(value){
        this.head = {
            value: 10,
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

}

const firstLinkedList = new LinkedList(10);
firstLinkedList.append(5);
firstLinkedList.prepend(15);
firstLinkedList.prepend(25);
firstLinkedList.append(95);
firstLinkedList.anotherPrepend(22)
firstLinkedList.anotherPrepend(33)
firstLinkedList.append(47)
firstLinkedList.prepend(38)
firstLinkedList.append(16);
firstLinkedList.append(30);
console.log(firstLinkedList.printList());