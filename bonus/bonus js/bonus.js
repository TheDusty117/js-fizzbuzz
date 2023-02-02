
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


  let multiploDiTre = (i % 3 === 0)

  let multiploDiCinque = (i % 5 === 0)

  let multiploDiQuindici = (i % 15 === 0)


  document.getElementById("output").innerHTML = multiploDiTre
  
  // come ultimo altrimenti se, gli dico semplicemente di stampare il numero (i) che in questo caso non deve avere un modulo
  // per trovare un multiplo
  
}