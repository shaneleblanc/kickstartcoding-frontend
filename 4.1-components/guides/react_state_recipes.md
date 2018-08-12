The reason it is tricky to do in React is because React prohibits
modifying the state directly. It likely will yell at you if you try, and
even if you ignore the warning (or avoid it), it is considered good
practice to copy arrays and objects first before modifying them.

Use these techniques to "copy" parts of the state, modify cop

# Changing a simple, flat value in the state

```
// Most of the time, you can set the state directly
this.setState({
  name: 'Jane Q Hacker',
  occupation: null,
  age: 35,
});
```

# Adding something to an array

If you have an array, and want to add something to it -- "push" in
JavaScript -- then you need to copy that array ("slice" in JavaScript),
push to the copy, and then do a setState replacing the old array with
the new modified copy.

```
let data = 'test';      // as an example, adding a string
const arr = this.state.arr.slice();      // duplicating array
arr.push(data);
this.setState({
  arr: arr,
});
```


# Deleting from an array

If you have an array, and want to remove an element from it based on
index, you will need to copy the array ("slice" in JavaScript), remove
it -- "splice" in JavaScript --- and then do a setState replacing the
old array with the new modified copy.

```
let index = 5; // as an example, moving item in the 5th slot
const arr = this.state.arr.slice();       // duplicating array
arr.splice(index, 1); // removing the item from the "clone"
this.setState({
  arr: arr,
});
```



# Moving an item from one array to another


If you have two arrays, and want to remove an element from one, and then
push that element to another, you will need to copy both arrays, remove
it from one (slice) and then put it in the other (push), then setState
with both copies.

```
let index = 5; // as an example, moving item in the 5th slot
const arrayA = this.state.arrayA.slice(); // duplicating array
const arrayB = this.state.arrayB.slice(); // duplicating array

const item = arrayA[index];  // accessing the item from index 5
arrayA.splice(index, 1); // removing the item from 
arrayB.push(item);       // adding the item
this.setState({
  arrayA: arrayA,        // update arrayA & arrayB
  arrayB: arrayB,
});
```


# Modifying an object


If you have an object, and want to add, delete, or modify a key/value
within that object in any way, you will need to first duplicate the
array (can use Object.assign), modify the duplicate, then do a setState
to make the duplicate replace the original.

```
const obj = Object.assign({}, this.state.obj); // duplicating object
obj.exampleKey = 'new value';  // set key "exampleKey" to value "new value"
this.setState({
  obj: obj,
});
```

