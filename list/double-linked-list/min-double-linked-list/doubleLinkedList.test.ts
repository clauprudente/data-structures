import { DoubleLinkedList } from "./doubleLinkedList";

describe("testing linked list implementation", () => {
  let doubleLinkedList: DoubleLinkedList;

  beforeEach(() => {
    doubleLinkedList = new DoubleLinkedList();
  });

  test("pushing front double linked list", () => {
    doubleLinkedList.pushFront(2);
    doubleLinkedList.pushFront(6);
    doubleLinkedList.pushFront(4);

    expect(doubleLinkedList.printDoubleLinkedList()).toBe(
      `> previousValue: undefined ; actualValue: 4 ; nextValue: 6> previousValue: 4 ; actualValue: 6 ; nextValue: 2> previousValue: 6 ; actualValue: 2 ; nextValue: undefined`
    );
  });

  test("pushing back double linked list", () => {
    doubleLinkedList.pushFront(2);
    doubleLinkedList.pushFront(6);
    doubleLinkedList.pushFront(4);
    doubleLinkedList.pushBack(100);

    expect(doubleLinkedList.printDoubleLinkedList()).toBe(
      `> previousValue: undefined ; actualValue: 4 ; nextValue: 6> previousValue: 4 ; actualValue: 6 ; nextValue: 2> previousValue: 6 ; actualValue: 2 ; nextValue: 100> previousValue: 2 ; actualValue: 100 ; nextValue: undefined`
    );
  });

  test("deleting", () => {
    doubleLinkedList.pushFront(2);
    doubleLinkedList.pushFront(6);
    doubleLinkedList.pushFront(4);
    doubleLinkedList.pushBack(100);

    expect(doubleLinkedList.printDoubleLinkedList()).toBe(
      `> previousValue: undefined ; actualValue: 4 ; nextValue: 6> previousValue: 4 ; actualValue: 6 ; nextValue: 2> previousValue: 6 ; actualValue: 2 ; nextValue: 100> previousValue: 2 ; actualValue: 100 ; nextValue: undefined`
    );

    doubleLinkedList.delete(2);

    expect(doubleLinkedList.printDoubleLinkedList()).toBe(
      `> previousValue: undefined ; actualValue: 4 ; nextValue: 6> previousValue: 4 ; actualValue: 6 ; nextValue: 100> previousValue: 6 ; actualValue: 100 ; nextValue: undefined`
    );
  });

  test("size", () => {
    doubleLinkedList.pushFront(2);
    doubleLinkedList.pushFront(6);
    doubleLinkedList.pushFront(4);
    doubleLinkedList.pushBack(100);

    expect(doubleLinkedList.size()).toBe(4);
  });

  test("insert", () => {
    doubleLinkedList.pushFront(2);
    doubleLinkedList.pushFront(6);
    doubleLinkedList.pushFront(4);
    doubleLinkedList.pushBack(100);

    doubleLinkedList.insert(500, 2);

    expect(doubleLinkedList.printDoubleLinkedList()).toBe(
      "> previousValue: undefined ; actualValue: 4 ; nextValue: 6> previousValue: 4 ; actualValue: 6 ; nextValue: 500> previousValue: 6 ; actualValue: 500 ; nextValue: 2> previousValue: 500 ; actualValue: 2 ; nextValue: 100> previousValue: 2 ; actualValue: 100 ; nextValue: undefined"
    );
  });
});
