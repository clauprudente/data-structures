import { BrowserHistory } from "./browserHistory";

describe("testing browser history implementation", () => {
  let browserHistory: BrowserHistory;

  beforeEach(() => {
    browserHistory = new BrowserHistory();
  });

  test("testing visit history", () => {
    browserHistory.visit("/search");
    browserHistory.visit("/face");
    browserHistory.visit("/timeline");

    expect(browserHistory.history.printDoubleLinkedList()).toBe(
      `> previousValue: undefined ; actualValue: /timeline ; nextValue: /face> previousValue: /timeline ; actualValue: /face ; nextValue: /search> previousValue: /face ; actualValue: /search ; nextValue: /homepage> previousValue: /search ; actualValue: /homepage ; nextValue: undefined`
    );
  });

  test("testing back history", () => {
    browserHistory.visit("/search");
    browserHistory.visit("/face");
    browserHistory.visit("/timeline");

    expect(browserHistory.back(2)).toBe(`/search`);
  });

  test("testing back history with visit", () => {
    browserHistory.visit("/search");
    browserHistory.visit("/face");
    browserHistory.visit("/timeline");
    browserHistory.visit("/profile");
    expect(browserHistory.back(1)).toBe("/timeline");

    browserHistory.visit("/dashboard");
    expect(browserHistory.history.printDoubleLinkedList()).toBe(
      `> previousValue: undefined ; actualValue: /dashboard ; nextValue: /timeline> previousValue: /dashboard ; actualValue: /timeline ; nextValue: /face> previousValue: /timeline ; actualValue: /face ; nextValue: /search> previousValue: /face ; actualValue: /search ; nextValue: /homepage> previousValue: /search ; actualValue: /homepage ; nextValue: undefined`
    );
  });

  test("testing forward history", () => {
    browserHistory.visit("/search");
    browserHistory.visit("/face");
    browserHistory.visit("/timeline");
    browserHistory.visit("/profile");
    expect(browserHistory.back(2)).toBe("/face");
    expect(browserHistory.forward(1)).toBe("/timeline");
  });

  test("testing forward history with visit", () => {
    browserHistory.visit("/search");
    browserHistory.visit("/face");
    browserHistory.visit("/timeline");
    browserHistory.visit("/profile");
    expect(browserHistory.back(2)).toBe("/face");
    expect(browserHistory.forward(1)).toBe("/timeline");
    browserHistory.visit("/faq");

    expect(browserHistory.history.printDoubleLinkedList()).toBe(
      `> previousValue: undefined ; actualValue: /faq ; nextValue: /timeline> previousValue: /faq ; actualValue: /timeline ; nextValue: /face> previousValue: /timeline ; actualValue: /face ; nextValue: /search> previousValue: /face ; actualValue: /search ; nextValue: /homepage> previousValue: /search ; actualValue: /homepage ; nextValue: undefined`
    );
  });
});
