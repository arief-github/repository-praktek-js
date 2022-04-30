import LinkedListNode from './LinkedListNode.js';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if(!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  delete(value){
    if(!this.head) {
      return null;
    }

    let deleteNode = null;

    while(this.head && this.head.value === value) {
      deleteNode - this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if(currentNode !== null) {
      while(currentNode.next) {
        if(currentNode.next.value === value) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    return deleteNode;
  }
}


const prependData = new LinkedList();
prependData.prepend("Arief");
prependData.prepend("Risti")
