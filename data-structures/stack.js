class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next
    }
}

class Stack {
    top;
    size;

    constructor(){
        this.top = null;
        this.size = 0;
    }

    peek(){
        console.log(this.top);
        return this.top;
    }

    pop(){
        if(!this.top) return null;
        const popItem = this.top;
        this.top = popItem.next;
        console.log(popItem);
        return popItem;
    }

    insert(value){
        const item = new Node(value, this.top);
        this.top = item;
        this.size++;
        //console.log(item);
        return item;
    }

    size(){
        console.log(this.size);
        return this.size;
    }
}

const stack = new Stack();
stack.insert("Dedé");
stack.insert("Ederson");
stack.insert("Dedev");
stack.pop();
stack.peek();
// console.log(stack);