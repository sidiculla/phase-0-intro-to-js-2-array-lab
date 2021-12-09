const cats=["Milo", "Otis", "Garfield"];

function beforeEach(){
    cats.length=0;
    cats.push('Milo', 'Otis', 'Garfield');
}
function destructivelyAppendCat(name){
    beforeEach();
    cats.push(name);
}
function destructivelyPrependCat(name){
    beforeEach();
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    beforeEach();
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    beforeEach();
    cats.shift();
}
function appendCat(name){
    beforeEach();
    const newcats=cats.slice();
    newcats.push(name);
    return newcats;
}
function prependCat(name){
    beforeEach();
    const newcats=cats.slice();
    newcats.unshift(name);
    return newcats;
}
function removeLastCat(){
    beforeEach();
    const newcats=cats.slice();
    newcats.pop();
    return newcats;
}
function removeFirstCat(){
    beforeEach();
    const newcats=cats.slice();
    newcats.shift();
    return newcats;
}