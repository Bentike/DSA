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

    }

    pop(){

    }
}

const myStack = new Stack();
console.log(myStack.peek());