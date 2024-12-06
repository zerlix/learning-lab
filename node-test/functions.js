
function callbackFunction(){
  console.log('I am  a callback function');
}

function higherOrderFunction(func){
  console.log('I am higher order function')
  func()
}

higherOrderFunction(callbackFunction);