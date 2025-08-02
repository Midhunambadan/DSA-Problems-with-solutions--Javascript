//without collision handling

class HashTable{
    constructor(){
         this.table=new Array(100)
         this.size=0
    }

    hash(key){
         let hash=0
         for(let i=0;i<key.length;i++){
              hash+=key.charCodeAt(i)
         }
         return hash%this.table.length
    }

    set(key,value){
         let index=this.hash(key)
         this.table[index]=[key,value]
         this.size++
    }

    get(key){
         let index=this.hash(key)
         return this.table[index]
    }

    remove(key){
         let index=this.hash(key)
         if(this.table[index]&&this.table[index].length){
              this.table[index]=null
              this.size--
              return ' removed'
         }else{
              return 'Invalid'
         }
    }
}

const ht=new HashTable()

ht.set('a',100)
ht.set('b',101)
ht.set('c',103)
ht.set('d',104)

// console.log(ht.get('a'))             

console.log(ht.remove('a'));
