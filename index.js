function writeCards(names, event) {
  let result = [];
    for(let i = 0; i < names.length; i++) {
      result.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
  return result;
}


function countDown(number) {
  let counter = 0;
  while (counter <= number) {
    console.log(counter)
    counter ++
  }
} 