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

}

const firstLinkedList = new LinkedList(10);
firstLinkedList.append(30)
firstLinkedList.prepend(60)
firstLinkedList.insert(2, 20);
firstLinkedList.insert(1, 50);
firstLinkedList.insert(2, 40);
firstLinkedList.insert(70, 100);
console.log(firstLinkedList.printList());