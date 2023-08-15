import { Stack } from "./stack";

describe("testing stack implementation", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("pushing stack", () => {
    stack.push(10);
    stack.push(14);
    stack.push(2);
    stack.push(20);

    expect(stack).toEqual({ count: 4, items: [10, 14, 2, 20], minItem: 2 });
  });

  test("top stack", () => {
    stack.push(10);
    stack.push(14);
    stack.push(2);
    stack.push(20);

    expect(stack.top()).toBe(20);
  });

  test("pop stack", () => {
    stack.push(10);
    stack.push(14);
    stack.push(2);
    stack.push(20);

    expect(stack.pop()).toBe(20);
  });

  test("get minimum value of stack", () => {
    stack.push(10);
    stack.push(14);
    stack.push(20);
    stack.push(2);

    expect(stack.getMin()).toBe(2);
  });

  test("get minimum value of stack with pop", () => {
    stack.push(10);
    stack.push(14);
    stack.push(20);
    stack.push(2);
    stack.pop();

    expect(stack.getMin()).toBe(10);
  });
});
