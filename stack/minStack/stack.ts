export class Stack {
  items: number[];
  count: number;
  minItem: number | undefined;

  constructor() {
    this.items = [];
    this.count = 0;
    this.minItem = undefined;
  }

  push(value: number): void {
    this.minItem = this.minItem ? Math.min(this.minItem, value) : value;

    this.items[this.count] = value;
    this.count++;
  }

  pop(): number | undefined {
    if (this.count == 0) return undefined;
    const poppedValue = this.items.pop();

    this.minItem =
      this.minItem === poppedValue ? Math.min(...this.items) : this.minItem;

    this.count--;
    return poppedValue;
  }

  top(): number | undefined {
    if (this.count == 0) return undefined;

    return this.items[this.count - 1];
  }

  getMin(): number | undefined {
    return this.minItem;
  }
}
