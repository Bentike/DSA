// 10 --> 5 --> 16

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

}

const firstLinkedList = new LinkedList(10);
firstLinkedList.append(5);
firstLinkedList.append(16);
firstLinkedList.append(30);
console.log(firstLinkedList);