const orderSet=new Set([
    'Pasta',
    'Pizza',
    'Burgur',
    'Pasta',
    'Pizza',
    'Burgur'
]);

console.log(orderSet);
console.log(new Set('Soumyaaaaa'));
console.log(orderSet.size);
console.log(orderSet.has('Burgur'));
console.log(orderSet.has('Bread'));
orderSet.add('Bread');
console.log(orderSet);
orderSet.delete('Bread');
console.log(orderSet);
// orderSet.clear();
// console.log(orderSet);

for(const order of orderSet){
    console.log(order);
}