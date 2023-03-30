// Array Iteration

const scores = [23, 78, 56, 34, 45];
const students = [
	{
		name: 'Paul',
		score: 37,
		age: 27,
	},
	{
		name: 'Ryan',
		score: 38,
		age: 21,
	},
	{
		name: 'Geofrey',
		score: 31,
		age: 26,
	},
	{
		name: 'Sandra',
		score: 56,
		age: 19,
	},
];

console.log('Accessing element with index', scores[1]);

// 1.1 for of loop
for (const score of scores) {
	console.log('Accesing elements using for of', score);
}

// 1.2 for
for (let i = 0; i < scores.length; i++) {
	console.log('Index', i);
	const score = scores[i];
	console.log('Accesing elements using for', score);
}

// 2 forEach
scores.forEach((score, index) => {
	console.log(index);
	console.log(score * 2);
});

// 3. Map
const squaredScores = scores.map((score, index) => {
	console.log(index);
	console.log(score);
	return score * 2;
});

console.log(squaredScores.slice(0, 2));

const mappedStudents = students.map((student) => {
	console.log(student);
	student.score += 10;
	console.log(student);
	return student;
});

console.log(mappedStudents);

// 4. filter - returns an array that meets a given condition
console.log(scores);
const filteredScores = scores.filter((score) => {
	if (score > 90) {
		return score;
	}
});

console.log(students);
// OR operator ||
// AND operator &&
const filteredStudents = students.filter((student) => {
	if ((student.name === 'Ryan' && student.score > 50) || student.age > 20) {
		return student;
	}
});

console.log(filteredStudents);

// 5. find - returns the first element that meets the given condition
const student = students.find((student) => student.age === 26);

console.log(student);

// 6. indexOf - finds the index of a given element
console.log(scores.indexOf(45));
