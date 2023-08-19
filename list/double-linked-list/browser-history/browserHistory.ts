import { DoubleLinkedList } from "./doubleLinkedList";

export class BrowserHistory {
  history: DoubleLinkedList;
  actualPosition: number;

  constructor() {
    this.history = new DoubleLinkedList();
    this.history.pushFront("/homepage");
    this.actualPosition = 0;
  }

  visit(url: string): void {
    if (this.actualPosition === 0) {
      this.history.pushFront(url);
      return;
    } else {
      let temporaryNode = this.history.head;

      for (let i = 0; i < this.actualPosition - 1; i++) {
        temporaryNode = temporaryNode?.next;
      }

      if (temporaryNode) {
        temporaryNode.previous = undefined;
        temporaryNode.value = url;
        this.history.head = temporaryNode;
        this.actualPosition = 0;
      }
    }
  }

  back(steps: number): string | void {
    if (steps >= this.history.size()) {
      console.log("caiu no if");
      this.actualPosition = this.history.size();
    } else {
      console.log("caiu no else");
      this.actualPosition += steps;
    }
    return this.history.get(this.actualPosition);
  }

  forward(steps: number): string | void {
    console.log(
      `this.history.size() : ${this.history.size()}  this.actualPosition: ${
        this.actualPosition
      }`
    );
    if (steps <= this.history.size()) {
      console.log("caiu no if");
      this.actualPosition -= steps;
    } else {
      this.actualPosition = 0;
    }
    return this.history.get(this.actualPosition);
  }
}
let browserHistory = new BrowserHistory();

browserHistory.visit("/search");
browserHistory.visit("/face");
browserHistory.visit("/timeline");
browserHistory.visit("/profile");
browserHistory.visit("/dashboard");
browserHistory.visit("/timeline2");

console.log(browserHistory.back(4));
console.log(browserHistory.forward(2));
