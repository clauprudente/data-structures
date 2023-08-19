class Node {
  previous: Node | undefined;
  value: string;
  next: Node | undefined;

  constructor(
    previous: Node | undefined,
    value: string,
    next: Node | undefined
  ) {
    this.previous = previous;
    this.value = value;
    this.next = next;
  }
}

export class DoubleLinkedList {
  head: Node | undefined;
  tail: Node | undefined;
  count: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.count = 0;
  }

  get(index: number): string | void {
    if (index === 0) {
      return this.head?.value;
    }
    if (this.head) {
      let currentNode: Node = this.head;

      let i = 0;
      do {
        if (currentNode.next) {
          currentNode = currentNode.next;
        }
        i++;
      } while (i != index);

      return currentNode.value;
    }
  }

  insert(value: string, index: number): void {
    let temporaryNode = this.head;
    let temporaryPreviousNode = this.head;
    let temporaryNextNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      temporaryPreviousNode = temporaryNode;
      temporaryNode = temporaryNode?.next;
      temporaryNextNode = temporaryNode?.next;
    }

    const newNode = new Node(temporaryNode, value, temporaryNextNode);

    if (temporaryNode != undefined && temporaryNextNode != undefined) {
      temporaryNode.next = newNode;
      temporaryNextNode.previous = newNode;
    }
  }

  delete(index: number): void {
    let temporaryNode = this.head;
    let temporaryPreviousNode = this.head;
    let temporaryNextNode = this.head;

    for (let i = 0; i < index; i++) {
      temporaryPreviousNode = temporaryNode;
      temporaryNode = temporaryNode?.next;
      temporaryNextNode = temporaryNode?.next;
    }

    if (temporaryPreviousNode && temporaryNextNode) {
      temporaryPreviousNode.next = temporaryNextNode;
      temporaryNextNode.previous = temporaryPreviousNode;
    }
  }

  size(): number {
    return this.count;
  }

  pushBack(value: string): void {
    if (this.tail && this.head) {
      const newNode: Node = new Node(this.tail, value, undefined);
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      const newNode: Node = new Node(undefined, value, undefined);

      this.head = newNode;
      this.tail = newNode;
    }
    this.count++;
  }

  pushFront(value: string): void {
    if (this.tail && this.head) {
      let newNode = new Node(undefined, value, this.head);

      this.head.previous = newNode;
      this.head = newNode;
    } else {
      const newNode = new Node(undefined, value, undefined);

      this.head = newNode;
      this.tail = newNode;
    }
    this.count++;
  }

  printDoubleLinkedList(): string {
    if (!this.head) return "";

    let array: string[] = [];
    let currentNode: Node | undefined = this.head;

    while (currentNode) {
      array.push(
        `> previousValue: ${currentNode.previous?.value} ; actualValue: ${currentNode.value} ; nextValue: ${currentNode.next?.value}`
      );

      currentNode = currentNode.next;
    }

    return array.join("");
  }
}
