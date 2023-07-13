class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(item, size){
        this.data.push([item, size]);
    }

    get(item){
       this.data.forEach(data => {
        if(data[0] === item){
           console.log(data);
           return data;
        }
         else{
            console.log("Not Found");
            return;
         }
       })
    }
}

const myHashTable = new HashTable(50);
myHashTable.set("Army", 1000);
myHashTable.set("Bentike", 5000);
myHashTable.set("Cat", 20);
myHashTable.set("Cow", 2000);
myHashTable.get("Bentike");