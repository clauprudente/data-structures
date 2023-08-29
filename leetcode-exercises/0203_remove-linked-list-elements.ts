//leetcode.com/problems/remove-linked-list-elements/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(value?: number, next?: ListNode | null) {
    this.val = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head == null) {
    return null;
  }

  let currentNode: ListNode | null = head;
  let previousNode: ListNode | null = null;

  while (currentNode != null) {
    if (currentNode.val === val) {
      if (previousNode != null) {
        previousNode.next = currentNode.next;
      } else {
        if (head.next) {
          head = head?.next;
        }
      }
    } else {
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }

  return head;
}
