console.log("funzionooo!")


for (let i = 1; i <= 100; i++) {


  if (i % 15 === 0) {
    console.log(i, "fizzbuzz")
  }

  else if (i % 3 === 0) {
    console.log(i, "fizz")
  }

  else if (i % 5 === 0) {
    console.log(i, "buzz")
  }

  else if(i) {
    console.log(i)
  }

  // come ultimo altrimenti se, gli dico semplicemente di stampare il numero (i) che in questo caso non deve avere un modulo
  // per trovare un multiplo


  // console.log(i)

}


//devi dire tutti i numeri da 1 a 100, poi ogni multiplo di 3 "fizz" ogni multiplo di 5 "buzz" ogni multiplo di 15 "fizzbuzz"
