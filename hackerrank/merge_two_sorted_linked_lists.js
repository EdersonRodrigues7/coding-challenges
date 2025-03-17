function mergeLists(head1, head2) {
    if(!head1) return head2;
    if(!head2) return head1;
    
    let nodeA = head1;
    let nodeB = head2;
    
    const result = new SinglyLinkedList();
    
    while(true){        
        if(!nodeA && !nodeB) break;
        
        if((nodeA && nodeB) && nodeA.data <= nodeB.data){
            result.insertNode(nodeA.data);
            nodeA = nodeA.next;
        } else if(nodeA && nodeB){
            result.insertNode(nodeB.data);
            nodeB = nodeB.next;
        } else if(!nodeA){
            result.insertNode(nodeB.data);
            nodeB = nodeB.next;
        } else {
            result.insertNode(nodeA.data);
            nodeA = nodeA.next;
        }
    }
    
    return result.head;
}

function mergeSortedListsInPlace(head1, head2){
    // Lida com listas vazias
    if(!head1) return head2;
    if(!head2) return head1;

    // Declara um nó inicial que receberá um dos heads
    const updatedHead = { next: null };
    // Usa a variável para monitorar qual é o node atual
    let currentNode = updatedHead;

    // Itera igualmente sobre as listas enquanto houver itens nas duas
    while(head1 && head2){
        // Verifica qual node das listas dadas e menor e o atribui
        if(head1.data <= head2.data){
            currentNode.next = head1;
            head1 = head1.next;
        } else {
            currentNode.next = head2;
            head2 = head2.next;
        }

        // Atualiza o node atual para o que foi atribuido acima
        currentNode = currentNode.next;
    }

    // Complementa a lista mergeada com o que tiver sobrado da lista maior
    currentNode.next = head1 || head2;

    // Retorna o head da lista mergeada
    return updatedHead.next;
}