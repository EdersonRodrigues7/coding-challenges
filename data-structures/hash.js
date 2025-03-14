class CustomHash {
    data = new Array(10);
    primos = new Map();
    constructor(){
        this.primos.set('a', 2);
        this.primos.set('b', 3);
        this.primos.set('c', 5);
        this.primos.set('d', 7);
        this.primos.set('e', 11);
        this.primos.set('f', 13);
        this.primos.set('g', 17);
        this.primos.set('h', 19);
        this.primos.set('i', 23);
        this.primos.set('j', 29);
        this.primos.set('k', 31);
        this.primos.set('l', 37);
        this.primos.set('m', 41);
        this.primos.set('n', 43);
        this.primos.set('o', 47);
        this.primos.set('p', 53);
        this.primos.set('q', 59);
        this.primos.set('r', 61);
        this.primos.set('s', 67);
        this.primos.set('t', 71);
        this.primos.set('u', 73);
        this.primos.set('v', 79);
        this.primos.set('w', 83);
        this.primos.set('x', 89);
        this.primos.set('y', 97);
        this.primos.set('z', 101);
    }

    get(key){
        return this.data[this.selectIndex(key)];
    }

    set(key,value){
        const index = this.selectIndex(key);
        this.data[index] = value;
    }

    selectIndex(str){
        let arr = str.split('');
        let sum = 0;
        for (let i = 0; i < arr.length; i++){
            sum += this.primos.get(arr[i]);
        }
        let result = sum % this.data.length;
        return result;
    }
}

const hash = new CustomHash();

hash.set('bag', 'Carteira');
hash.set('beach', 'Praia');
hash.set('ace', 'Luffy');
hash.set('zumba', 'Funk');

console.log(hash.get('zumba'));