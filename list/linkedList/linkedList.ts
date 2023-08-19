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
  count: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.count = 0;
  }

  pushFront(value: number): void {
    this.count++;

    if (this.head) {
      const newNode = new Node(value, this.head);

      this.head = newNode;
    } else {
      const newNode = new Node(value, undefined);

      this.head = newNode;
      this.tail = newNode;
    }
  }

  pushBack(value: number): void {
    const newNode = new Node(value, undefined);
    this.count++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let currentNode: Node = this.head;
    while (currentNode?.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  insertAtIndex(value: number, index: number): void {
    let temporaryNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      temporaryNode = temporaryNode?.next;
    }

    let newNode: Node = new Node(value, temporaryNode?.next);

    if (temporaryNode != undefined) {
      temporaryNode.next = newNode;
    }
  }

  removeAtIndex(index: number): void {
    let prevTemporaryNode = this.head;
    let temporaryNode = this.head;

    for (let i = 0; i < index; i++) {
      console.log(`index: ${i} ; node: ${temporaryNode?.value}`);
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
