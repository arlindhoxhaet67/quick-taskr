/** 
 * Filename: sophisticated_code.js
 * Description: This code snippet demonstrates a sophisticated implementation of a data structure called "Linked List" in JavaScript.
 *              It includes various functionalities such as adding, deleting, searching, and displaying elements in the linked list.
 *              The code also includes complex algorithms like reversing the linked list and finding the middle element.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a new node at the end of the linked list
  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Deletes a node from the linked list
  delete(data) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === data) {
        previous.next = current.next;
        return;
      }

      previous = current;
      current = current.next;
    }
  }

  // Searches for a node in the linked list
  search(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Reverses the linked list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Finds the middle node in the linked list
  findMiddle() {
    let slowPointer = this.head;
    let fastPointer = this.head;

    while (fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }

    return slowPointer.data;
  }

  // Displays all elements in the linked list
  display() {
    let current = this.head;
    let elements = [];

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.join(" -> "));
  }
}

// Create a linked list
const linkedList = new LinkedList();

// Add nodes to the linked list
linkedList.add(5);
linkedList.add(10);
linkedList.add(15);
linkedList.add(20);
linkedList.add(25);

// Display the linked list
linkedList.display();

// Reverse the linked list
linkedList.reverse();

// Display the reversed linked list
linkedList.display();

// Delete a node from the linked list
linkedList.delete(15);

// Search for a node in the linked list
console.log("Search Result:", linkedList.search(20));

// Find the middle element of the linked list
console.log("Middle Element:", linkedList.findMiddle());
