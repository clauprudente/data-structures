import { LinkedList } from "./linkedList";

describe("testing linked list implementation", () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test("pushing front linked list", () => {
    linkedList.pushFront(2);
    linkedList.pushFront(6);
    linkedList.pushFront(4);
    expect(linkedList.printLinkedList()).toBe("4 > 6 > 2");
  });

  test("pushing back linked list", () => {
    linkedList.pushFront(2);
    linkedList.pushFront(6);
    linkedList.pushFront(4);
    linkedList.pushBack(3);
    expect(linkedList.printLinkedList()).toBe("4 > 6 > 2 > 3");
  });

  test("insert at index", () => {
    linkedList.pushFront(2);
    linkedList.pushFront(6);
    linkedList.pushFront(4);
    linkedList.pushBack(3);
    expect(linkedList.printLinkedList()).toBe("4 > 6 > 2 > 3");
    linkedList.insertAtIndex(100, 2);
    expect(linkedList.printLinkedList()).toBe("4 > 6 > 100 > 2 > 3");
  });

  test("remove at index", () => {
    linkedList.pushFront(2);
    linkedList.pushFront(6);
    linkedList.pushFront(4);
    linkedList.pushBack(3);
    expect(linkedList.printLinkedList()).toBe("4 > 6 > 2 > 3");
    linkedList.removeAtIndex(2);
    expect(linkedList.printLinkedList()).toBe("4 > 6 > 3");
  });
});
