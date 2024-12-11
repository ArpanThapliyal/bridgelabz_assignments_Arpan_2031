let arr = [40,50];

//push
arr.push(60);

//unshift
arr.unshift(30);

//splice (start_idx,ele_to_delete,ele_to_insert)
arr.splice(4,0,70,80);

//concat
arr = arr.concat(90,100);

//spread operator (...))
arr = [...arr,110,120,];

//from
arr= Array.from([...arr,130,140]);

//direct access
arr[arr.length] = 150;

//apply using splice
Array.prototype.splice.apply(arr,[13,0,160]);

//call using splice
Array.prototype.splice.call(arr,14,0,170,180);

//printing the array
console.log(arr);
