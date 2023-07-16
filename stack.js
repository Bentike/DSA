class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

// Stack Implementation with Linked Lists
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
    
    // pop method removes the last item in the stack
    pop(){
       if(!this.top) return null;
       if(this.top === this.bottom) this.bottom = null;
    //    let holdingPointer = this.top;
       this.top = this.top.next;
       this.length--;
       return this;
    }
}

const myStack = new Stack();
// console.log(myStack.push("google"));
// console.log(myStack.push("twitter"));
// console.log(myStack.push("facebook"));
// console.log(myStack.pop());

// Stack Implementation with Arrays
class ArrayStack {
    constructor(){
       this.stack = [];
    }

    peek(){
       if(!this.stack.length) return "empty";
       return this.stack[this.stack.length - 1];
    }

    push(val){
      this.stack.push(val);
      return this.stack;
    }

    pop(){
       this.stack.pop();
       return this.stack;
    }
}

let satckOne = new ArrayStack();
satckOne.push("Bentike")
satckOne.push("Tunji")
satckOne.push("Wale")
satckOne.push("Dele")
satckOne.push("Niyi")
console.log(satckOne);
console.log(satckOne.peek());
satckOne.pop()
satckOne.pop()
console.log(satckOne);
console.log(satckOne.peek());