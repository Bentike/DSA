class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(){
    if(!this.first) return null;
    if(this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

let waitList = new Queue();
console.log(waitList.enqueue("bentike"))
console.log(waitList.enqueue("tunji"))
console.log(waitList.enqueue("wale"))
console.log(waitList.enqueue("niyi"))
console.log(waitList.dequeue())
console.log(waitList.dequeue())
console.log(waitList.dequeue())
console.log(waitList.dequeue())