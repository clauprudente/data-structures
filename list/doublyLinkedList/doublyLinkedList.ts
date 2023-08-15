export class DoublyLinkedList {
  head;
  count: number;
  constructor() {
    this.head = null;
    this.count = 0;
  }

  get(index: number): number {
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
