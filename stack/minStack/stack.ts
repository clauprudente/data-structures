export class Stack {
  items: number[];
  count: number;
  minItems: number[];

  constructor() {
    this.items = [];
    this.count = 0;
    this.minItems = [];
  }

  push(value: number): void {
    if (this.items.length === 0) {
      this.minItems.push(value);
    } else {
      const currentMin = this.getMin();

      if (currentMin && currentMin > value) {
        this.minItems.push(value);
      }
    }

    this.items[this.count] = value;
    this.count++;
  }

  pop(): number | undefined {
    if (this.count == 0) return undefined;
    const poppedValue = this.items.pop();

    const currentMin = this.getMin();

    if (currentMin && currentMin === poppedValue) {
      this.minItems.pop();
    }

    this.count--;
    return poppedValue;
  }

  top(): number | undefined {
    if (this.count == 0) return undefined;

    return this.items[this.count - 1];
  }

  getMin(): number | undefined {
    const minItemLength: number = this.minItems.length;

    if (minItemLength === 0) return undefined;

    return this.minItems[minItemLength - 1];
  }
}
