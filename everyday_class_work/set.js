// union and intersection
let arr1 =[1,2,2,4,6,6,7,8,0];
let arr2 =[1,3,2,4,6,7,7,8,9];
let union=[];
let intersection=[];
let set1= new Set();
let set2= new Set();

for(let i of arr1){
    if(!set1.has(i)){
        set1.add(i);
    }
}
for(let i of arr2){
    if(!set2.has(i)){
        set2.add(i);
    }
}

for(let i of set1){
    union.push(i);
}
for(let i of set2){
    if(set1.has(i)){
        intersection.push(i);
    }
    else{
        union.push(i);
    }
}

console.log(`your union is ${union.sort()}`);
console.log(`your intersection is ${intersection.sort()}`);