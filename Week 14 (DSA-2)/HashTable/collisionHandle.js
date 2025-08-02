class HashTable {
     constructor() {
         this.table = new Array(100);
         this.size = 0;
     }  
 
     hash(key) {
         let hash = 0;
         for (let i = 0; i < key.length; i++) {
             hash += key.charCodeAt(i);
         }
         return hash % this.table.length;
     }
 
     set(key, value) {
         let index = this.hash(key);
 
         if (this.table[index]) {
             for (let i = 0; i < this.table[index].length; i++) {
                 if (this.table[index][i][0] === key) {
                     this.table[index][i][1] = value;
                     return;
                 }
             }
             this.table[index].push([key, value]);
         } else {
             this.table[index] = [];
             this.table[index].push([key, value]);
         }
 
         this.size++;
     }
 

     get(key) {
         let index = this.hash(key);
         if (this.table[index]) {
             for (let i = 0; i < this.table[index].length; i++) {
                 if (this.table[index][i][0] === key) {
                     return this.table[index][i][1];
                 }
             }
         }
         return undefined;
     }

     remove(key){
          let index=this.hash(key)
          if(this.table[index]){
               for(let i=0;i<this.table[index].length;i++){
                    if(this.table[index][i][0]===key){
                         this.table[index].splice(i,1)
                         this.size--
                         return true
                    }
               }
          }else{
               return false
          }
     }

     display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                let chainedValues = '';
                for (let j = 0; j < this.table[i].length; j++) {
                    let key = this.table[i][j][0];
                    let value = this.table[i][j][1];
                    chainedValues += `[ ${key}: ${value} ] `;
                }
                console.log(`${i}: ${chainedValues}`);
            }
        }
    }
    
 }
 
 const ht = new HashTable();
 
 ht.set('ab', 100);
 ht.set('ba', 101);
 ht.set('c', 103);
 ht.set('d', 104);
 ht.display()
 
//  console.log(ht.remove('ab'))
//  console.log(ht.get('ab'));
 