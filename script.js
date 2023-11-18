let ecole = [
  "Richardson",
  "Webster",
  "Alexis",
  "Berlin",
  "Bouquet"
]

//console.log(ecole[2]);
//  console.log(ecole.length);
//console.log(ecole[ecole.length - 1]);

// let newArray = ecole.pop(); /*ecole.shift();*/
// console.log(newArray);
// console.log(ecole);

//let addName = ecole.push("Guichard");
// console.log(ecole);

/*let sliceArray = ecole.slice(0, 2);
console.log(sliceArray);

console.log(ecole.indexOf("Alexis"));


function include() {
  if (ecole.includes("Webster")) {

    console.log("He is a teacher")

  } else {
    console.log("we do not find Webster")

  }
}
include();

ecole.push("Berlin")


let otherName = ecole.find((element) => element === "Berlin")
// console.log(ecole)
 console.log(otherName)


 let otherNameFilter = ecole.filter((element) => element === "Berlin")


 console.log(otherNameFilter)*/




let pays = new Set([
  "Haiti",
  "Congo",
  "Usa",
  "Italie",
  "Italie"
])

pays.add("Allemagne")
console.log(pays.size)
//console.log(pays)

pays.forEach((elemnt) => {
  console.log(elemnt)
})

console.log(pays.has("Allemagne"))

//console.log(pays.delete("Allemagne"))

console.log(pays)






