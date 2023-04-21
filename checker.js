const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

 const checker = (check) => {
 
 	if(check.includes('John')){
       return check;
 	}
 };

 const checkdragons = () => { dragons.forEach((dragon) => {
let result = checker(dragon);
if (result){
console.log(result + " contains John.");
 }}); }

 checkdragons();