import { Stack } from "./index";

const stackToSort = new Stack();
stackToSort.add(1);
stackToSort.add(3);
stackToSort.add(5);
stackToSort.add(15);
stackToSort.add(22);
stackToSort.add(41);
stackToSort.add(11);
stackToSort.add(2);
stackToSort.add(7);

const sortHelper = (stack: Stack, tempSorted: Stack, tempRest: Stack) => {
  while (!stack.isEmpty()) {
    const popped = stack.pop();
    if (tempSorted.isEmpty()) {
      console.log("in here every time...?");
      tempSorted.add(popped);
    } else if (popped > tempSorted.peek()) {
      console.log("greater than condition");
      tempSorted.add(popped);
    } else tempRest.add(popped);
  }
  return {
    stack,
    tempSorted,
    tempRest,
  };
};

const sorter = (sorted: Stack, unsorted: Stack) => {
    
};

const sortStack = (stack: Stack) => {
  let tempSorted = new Stack();
  let tempRest = new Stack();

  tempSorted.printAll();
  console.log("mid");
  tempRest.printAll();
  console.log("and");
  stack.printAll();
};

sortStack(stackToSort);
