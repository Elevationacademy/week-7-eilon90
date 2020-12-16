class UniqueArray {
    constructor() {
        this.items = [];
        this.arrLength = 0;
    }
    add(item) {
        for (let i = 0; i < this.arrLength; i++) {
            if (this.items[i] === item) {return}
        }
        this.items[this.arrLength] = item;
        this.arrLength++;
    }

    showAll() {
        for (let i = 0; i < this.arrLength; i++) {
            console.log(this.items[i]);
        }
    }

    exists(item) {
        for (let i = 0; i < this.arrLength; i++) {
            if (this.items[i] === item) {return true}
        }
        return false; 
    }

    get(index) {
        if (this.items[index]) {return this.items[index]}
        else {return -1}
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
