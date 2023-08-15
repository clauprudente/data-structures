export class Stack {
  items: number[];
  count: number;

  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(value: number): void {
    this.items[this.count] = value;
    this.count++;
  }

  pop(): number | undefined {
    this.count--;
    return this.items.pop();
  }
  top(): number | undefined {
    if (this.count == 0) return undefined;

    return this.items[this.count - 1];
  }
  getMin(): number | undefined {
    if (this.count == 0) return undefined;

    let minItem: number = this.items[0];

    this.items.forEach((element) => {
      minItem = minItem < element ? minItem : element;
    });

    return minItem;
  }
}
