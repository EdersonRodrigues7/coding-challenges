/*
    Find merge point of two linked lists and return its value.
    The merge point is the node pointed by both lists.
    The head may be 'null' for the empty list.
    Graphic example:
    1 -- 3 -- 5
                \
                 8 -- 10 -- 13
    2 -- 4 -- 6 /
*/
import CustomNode from "../data-structures/customNode";
import NumberLinkedList from "../data-structures/number-linked-list.ts";

function findNodeInList(head: CustomNode, node: CustomNode){
    let currentNode = head;
    // Itera sobre a lista procurando um elemento específico (não o valor, mas sim o próprio node)
    while(currentNode){
        if(currentNode === node) return node.value;
        currentNode = currentNode.next;
    }
    return null;
}

function findMergeNode(headA: CustomNode, headB: CustomNode) {
    // Empty lists
    if(!headA || !headB) return null;

    let nodeA = headA;
    let result = null;
    // Iterar sobre a lista A procurando cada elemento na lista B
    // Sai do looping ao ter um resultado ou terminar a lista (nesse caso, não há convergência de nodes)
    while(!result && nodeA){
        result = findNodeInList(headB, nodeA);
        nodeA = nodeA.next;
    }
    
    return result;
}

const listA = new NumberLinkedList(1);
const listB = new NumberLinkedList(2);
listA.append(3);
listA.append(5);
listA.append(8);
listA.append(10);
listA.append(13);
listB.append(4);
listB.append(6);
listB.append(8);
listB.append(10);
listB.append(13);

console.log(findMergeNode(listA.head, listB.head));