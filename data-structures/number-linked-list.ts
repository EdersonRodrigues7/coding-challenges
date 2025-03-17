import CustomNode from "./customNode";

class NumberLinkedList{
    head: CustomNode;
    tail: CustomNode;
    length: number;

    constructor(value: number){
        this.head = { value: value, next: null }
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value: number): void {
        const newNode = new CustomNode(value, null);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value: number): void {
        const newNode = new CustomNode(value, this.head);
        this.head = newNode;
        this.length++; 
    }

    print(): void {
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    lookup(index: number): CustomNode | null {
        if(index >= 0 || index < this.length){
            let i = 0;
            let currentNode = this.head;
            while (i !== index){
            currentNode = currentNode.next;
            i++;
            }
            return currentNode;
        }
        return null;
    }

    insert(index: number, value: number): void {
        if(index >= this.length) return this.append(value);
        if(index <= 0) return this.prepend(value);
        
        const previousNode = this.lookup(index - 1);
        
        if(previousNode){
            const newNode = new CustomNode(value, previousNode.next);
            previousNode.next = newNode;
            this.length++;
        }
    }

    remove(index: number): CustomNode | null {
        // Índice inválido
        if(index < 0 || index >= this.length) return null;
        
        // Remoção do primeiro item
        if(index === 0) {
            const removed = this.head;
            this.head = this.head.next;
            return removed;
        }

        const previousNode = this.lookup(index -1);
        
        if(previousNode){
            const removed = previousNode.next;
            previousNode.next = removed.next;
            return removed;
        }

        return null;
    }
}

export default NumberLinkedList;