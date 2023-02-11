class StackNode {
  data: any;
  next: StackNode | null;
  constructor(data: any) {
    this.data = data;
  }
}

class Stack {
  head: StackNode | null = null;
  add(data: any) {
    const node = new StackNode(data);
    const temp = this.head;
    this.head = node;
    this.head.next = temp;
  }
  pop() {
    if (!this.head) {
      throw new Error("Stack empty");
    }
    const temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }
  peek() {
    return this.head?.data ?? null;
  }
  isEmpty() {
    return !this.head;
  }

  printAll() {
    let node = this.head;
    let index = 0;
    while (node) {
      console.log("index " + index, node.data);
      node = node.next;
      index++;
    }
  }
}

export { Stack };
