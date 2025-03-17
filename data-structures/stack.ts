import CustomNode from "./customNode.ts";

class Stack {
    top: CustomNode | null;
    size: number;

    constructor(){
        this.top = null;
        this.size = 0;
    }

    peek(): CustomNode | null {
        console.log(this.top);
        return this.top;
    }

    pop(): CustomNode | null {
        if(!this.top) return null;
        const popItem = this.top;
        this.top = popItem.next;
        console.log(popItem);
        return popItem;
    }

    insert(value): CustomNode {
        const item = new CustomNode(value, this.top);
        this.top = item;
        this.size++;

        return item;
    }

    getSize(): number {
        return this.size;
    }
}

export default Stack;

const stack = new Stack();
stack.insert("Dedé");
stack.insert("Ederson");
stack.insert("Dedev");
stack.pop();
stack.peek();