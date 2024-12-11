let arr= [10,20,30,40,50,60,70,80,90,100];
let target = 60 //ele to delete
//pop
arr.pop();

//shift
arr.shift();

//splice
arr.splice(0,1);

//filter
arr = arr.filter((val)=> val !==target);

//slice
arr = arr.slice(0,2).concat(arr.slice(3));

//delete (not recomended);
// delete arr[0];

//priting purpose
console.log(arr);