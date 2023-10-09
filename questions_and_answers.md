<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Explanation: The code will show ReferenceError because In this code declared greeting as a variable but When set a value then there was typically mistake in the variable name. And console logged the wrong item which one wasn't declared as a variable.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Explanation: In this code we can see, sum is a function and it contain two parameters called a and b and the function return total of a and b. when was call the function sum then first parameter's value was 1 (a number) and second parameter's value was "2" (a string because of the quotation). and we know number's and string's sum will be always string. That's why the answer will be "12" </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Explanation: The correct answer will be A. Because there called the food array. And the array's value was same when was called the array. So we will get the food array as it is and nothing was change of the food array when it was call.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Explanation: In the code 'Hi there, undefined' will be the correct answer. Because sayHi function had a parameter. And the function return `Hi there, ${name}`. When we pass a parameter into a function but if we call the function and we didn't pass the parameter's value then the parameter will return undefined. </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Explanation: In this code, the count variable's value was 0 and nums array was [0, 1, 2, 3]. we loop through into nums and each time we get a element of nums and we store it inside of num. and gave a condition, if the num is true then count will sum with 1. Fist time num's value was 0 which is falsy value. So it didn't go inside of condition. Second time num was 1 which one was true so count = count + 1 (0 + 1) = 1. The count value was 1. Third time num was 2 so count = count + 1 (1 + 1) = 2 . The value of count was 2. last time num was 3 so count = count + 1 (2 + 1) = 3. The the count value will be 3. </i>

</p>
</details>
