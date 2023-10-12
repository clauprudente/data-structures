class Node {
  value: number;
  next: Node | undefined;

  constructor(value: number, next: Node | undefined) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  head: Node | undefined;
  tail: Node | undefined;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  pushFront(value: number): void {
    if (this.head) {
      const newNode = new Node(value, this.head);

      this.head = newNode;
    } else {
      const newNode = new Node(value, undefined);

      this.head = newNode;
      this.tail = this.head;
    }
  }

  pushBack(value: number): void {
    const newNode = new Node(value, undefined);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
  }

  insertAtIndex(value: number, index: number): void {
    let temporaryNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      temporaryNode = temporaryNode?.next;
    }

    const newNode: Node = new Node(value, temporaryNode?.next);

    if (temporaryNode != undefined) {
      temporaryNode.next = newNode;
    }
  }

  removeAtIndex(index: number): void {
    let prevTemporaryNode = this.head;
    let temporaryNode = this.head;

    for (let i = 0; i < index; i++) {
      prevTemporaryNode = temporaryNode;
      temporaryNode = temporaryNode?.next;
    }
    if (prevTemporaryNode) {
      prevTemporaryNode.next = temporaryNode?.next;
    }
  }

  printLinkedList(): string {
    if (!this.head) return "";

    let array: number[] = [];
    let currentNode: Node | undefined = this.head;

    while (currentNode) {
      array.push(currentNode.value);

      currentNode = currentNode.next;
    }

    return array.join(" > ");
  }
}
