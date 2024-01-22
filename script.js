class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add element to top of stack
  push(element){
    this.items[this.count] = element
    this.count += 1
    console.log(`${element} added to ${this.count}`)
    return this.count - 1
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop(){
    if(this.count == 0) return undefined
    let deleteItem = this.items[this.count - 1]
    this.count -= 1
    console.log(`${deleteItem} removed`)
    return deleteItem
  }

  // Check top element in stack
  peek(){
    console.log(`Top element is ${this.items[this.count -1]}`)
    return this.items[this.count -1]
  }

  // Check if stack is empty
  isEmpty(){
    console.log(this.count == 0 ? `Stack is empty` : `Stack is not empty`)
    return this.count == 0
  }

  //Check size of stack
  size(){
    console.log(`${this.count} elements in stack`)
    return this.count
  }

  // Print elements in stack
  print(){
    let str = ''
    for(let i =0; i < this.count; i++){
      str += this.items[i] + ' '
    }
    return str
  }

  // Clear stack
  clear(){
    this.items = []
    this.count = 0
    console.log('Stack cleared..')
    return this.items
  }

  // Print elements in stack to HTML body using .appendChild
  printToBody() {
    const body = document.body;
    const contentDiv = document.createElement('div');

    contentDiv.classList.add('curved-div');

    if (this.count === 0) {
      const emptyParagraph = document.createElement('p');
      emptyParagraph.textContent = 'Stack is empty';
      contentDiv.appendChild(emptyParagraph);
    } else {
      const peekElement = document.createElement('p');
      peekElement.textContent = `Top element is ${stack.peek()}`;
      contentDiv.appendChild(peekElement);

      const sizeElement = document.createElement('p');
      sizeElement.textContent = `There are ${stack.size()} elements in stack`;
      contentDiv.appendChild(sizeElement);

      for (let i = 0; i < this.count; i++) {
        const elementParagraph = document.createElement('p');
        elementParagraph.textContent = this.items[i];
        contentDiv.appendChild(elementParagraph);
      }
    }
    body.appendChild(contentDiv);
  }
}


const stack = new Stack();

stack.isEmpty();
stack.push(100);
stack.push(200);
stack.peek();
stack.push(300);
stack.size();
// stack.pop();
// stack.pop();
// stack.pop();
stack.printToBody();
