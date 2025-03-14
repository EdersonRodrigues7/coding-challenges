import Node from "./node";
  
class myLinkedList {
  constructor(value){
    this.head = { value: value, next: null }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value){
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++; 
  }

  print(){
    let currentNode = this.head;
    while(currentNode){
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  lookup(index){
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

  insert(index, value){
      if(index >= this.length) return this.append(value);
      if(index <= 0) return this.prepend(value);
      const previousNode = this.lookup(index - 1);
      const newNode = new Node(value, previousNode.next);
      previousNode.next = newNode;
      this.length++;
  }

  remove(index){
    const previousNode = this.lookup(index -1);
  }

}

let list = new myLinkedList(2);
list.append(4);
list.append(5);
list.prepend(1);
list.insert(2, 3);
list.print();