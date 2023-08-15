import { Stack } from "./stack";

describe("Stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("Teste de push e top", () => {
    stack.push(10);
    stack.push(14);
    stack.push(2);
    stack.push(20);
    stack.top();
    expect(stack.top()).toBe(20);
  });

  test("Teste de pop", () => {
    stack.push(10);
    stack.push(14);
    stack.push(2);
    stack.push(20);
    expect(stack.pop()).toBe(20);
  });

  test("Teste para getMin", () => {
    stack.push(10);
    stack.push(14);
    stack.push(2);
    stack.push(20);
    stack.getMin();
    expect(stack.getMin()).toBe(2);
  });
});
