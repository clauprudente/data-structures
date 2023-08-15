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

    expect(stack).toEqual({
      count: 4,
      items: [10, 14, 2, 20],
      minItems: [10, 2],
    });
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

  test("pop stack empty", () => {
    stack.push(1);
    stack.pop();
    expect(stack.pop()).toBe(undefined);
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

  test("get minimum value of stack with more mins", () => {
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(0);
    stack.push(3);
    stack.push(4);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.getMin()).toBe(0);
  });
});
