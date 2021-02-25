// *********
// PART ONE
// *********

// 1.
// 1.1: 8
// 1.2: 1846

// 2.
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// 3.
// 3.1: 'Your name is Alejandro and you like purple'
// 3.2: 'Your name is Melissa and you like green'
// 3.3: 'Your name is undefined and you like green'

// 4.
// 4.1: 'Maya'
// 4.2: 'Marissa'
// 4.3: 'Chi'

// 5.
// 5.1: 'Raindrops on roses'
// 5.2: 'whiskers on kittens'
// 5.3: ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// 6.
// [10,30,20]


// *********
// PART TWO
// *********

const obj = {
    numbers: {
        a: 1,
        b: 1
    }
}

const { numbers: { a, b } } = obj;

///
const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

///
const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest })