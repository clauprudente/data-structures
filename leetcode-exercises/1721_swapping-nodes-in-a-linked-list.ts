//leetcode.com/problems/swapping-nodes-in-a-linked-list/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(value?: number, next?: ListNode | null) {
    this.val = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  return null;
}
