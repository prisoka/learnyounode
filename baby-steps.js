// console.log(process.argv);
let totalSum = 0;

for(let i=2; i<process.argv.length; i++){
  totalSum += Number(process.argv[i]);
}
console.log(totalSum);
