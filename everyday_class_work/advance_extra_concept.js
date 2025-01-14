// function* gem(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// const g = gem();
// console.log(g.next());
// console.log(g.next().value);
// console.log(g.next().done);
// console.log(g.next("1000").value);
// console.log(g.next());

function* myGenerator() {
   
    let k = yield "What's your name?";
    k = yield "do";
    console.log(`Hello, ${k}`);
}

const gen = myGenerator();
console.log(gen.next().value); 
console.log(gen.next("ALICE")); 
console.log(gen.next("palace"));

