
console.log("funzionooo!")




for (let i = 1; i <= 100; i++) {


  if (i % 15 === 0) {
    console.log(i, "fizzbuzz")
    document.getElementById("output3").innerHTML += " fizzbuzz"
  }

  else if (i % 3 === 0) {
    console.log(i, "fizz")
    document.getElementById("output").innerHTML += " fizz"
  }

  else if (i % 5 === 0) {
    console.log(i, "buzz")
    document.getElementById("output2").innerHTML += " buzz"
  }

  else if(i) {
    console.log(i)
  }


  // come ultimo altrimenti se, gli dico semplicemente di stampare il numero (i) che in questo caso non deve avere un modulo
  // per trovare un multiplo
  // let multiploDiTre = (i % 3 === 0)
  // console.dir(multiploDiTre)

  // let multiploDiCinque = (i % 5 === 0)

  // let multiploDiQuindici = (i % 15 === 0)


  // document.getElementById("output").innerHTML = multiploDiTre
  
  
  
}