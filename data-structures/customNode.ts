class CustomNode {
    value: any;
    next: any;

    constructor(value, next){
        this.value = value;
        this.next = next ?? null;
    }
}

export default CustomNode;