console.log("funzionooo!")


for (let i = 0; i <= 100; i++) {

  console.log(i)
  
  if (i % 15 === 0) {
    console.log(i, "fizzbuzz")
  }

  else if (i % 3 === 0) {
    console.log(i, "fizz")
  }

  else if (i % 5 === 0) {
    console.log(i, "buzz")
  }


  // console.log(i)

}

//devi dire tutti i numeri da 1 a 100, poi ogni multiplo di 3 "fizz" ogni multiplo di 5 "buzz" ogni multiplo di 15 "fizzbuzz"
