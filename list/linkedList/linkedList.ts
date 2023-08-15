class Node {
  value: number;
  next: Node;

  constructor(value: number, next: Node) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  head: Node | undefined;
  tail: Node;
  count: number;

  constructor() {
    this.head = undefined;
    this.count = 0;
  }

  get(index: number): number | undefined {
    if (this.head === undefined) return undefined;

    return 0;
  }

  insert(value: number, index: number): void {}

  delete(index: number): void {}

  size(): number {
    return this.count;
  }

  pushBack(value: number): void {}

  pushFront(value: number): void {}
}
