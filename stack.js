class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null,
        this.bottom = null,
        this.length = 0
    }

    // peek method returns the top most item in the stack.
    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPoint = this.top;
            this.top = newNode;
            this.top.next = holdingPoint;
        }
        this.length++;
        return this;
    }

    pop(){

    }
}

const myStack = new Stack();
// console.log(myStack.peek());