let appId = 'abc'; // Global
const button = document.querySelector('button')!; // No! this button is exist

function add(n1: number, n2: number) {
  // noImplicitReturns
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = 'David'; // noUnusedLocals
  console.log('Clicked!' + message);
}

// a comment
if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
