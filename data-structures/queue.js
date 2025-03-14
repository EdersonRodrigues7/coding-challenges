class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    isEmpty(){
        return this.length === 0;
    }

    peek(){
        console.log(this.first);
        return this.first;
    }

    enqueue(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        console.log(this);
        return this;
    }

    dequeue(){
        if(this.isEmpty()) return null;
        const node = this.first;
        this.first = node.next;
        this.last = this.length === 1 ? null : this.last;
        this.length--;
        console.log(node);
        return node;
    }

    getLength(){
        console.log(this.length);
        return this.length;
    }
}

function main(){
    const q = new Queue();
    q.enqueue("A");
    q.enqueue("B");
    q.enqueue("C");
    q.getLength();
    q.peek();
    q.dequeue();
    q.peek();
}

main();