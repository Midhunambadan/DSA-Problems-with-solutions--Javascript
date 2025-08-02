class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}
class linkedlist{
    constructor()
    {
        this.head=null
        this.size=0
    }

    append(value)
    {
        let node= new Node(value)
        if(!this.head)
        {
            this.head=node
        }
        else{
            let curr=this.head
            while(curr.next)
            {
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    
    reverse()
    {
        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
    print()
    {
        let curr=this.head
        let str=''
        while(curr)
        {
            str +=curr.value
            curr=curr.next
        }
        console.log(str);
        return str
    }

}
const list=new  linkedlist()


let word='malayala'
for(let i=0;i<word.length;i++){
    list.append(word[i])
}


let forward=list.print()
console.log(forward,'fro')
list.reverse()

let backward=list.print()
console.log(backward,'back');

console.log("forward",forward);
console.log("backward",backward);
if(forward==backward)
{
    console.log("it is a palindrome");
}
else{
    console.log("it is not a palindrome");
}