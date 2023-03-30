// Array Iteration

const scores = [23, 78, 56, 34, 45];
const students = [
	{
		name: 'Paul',
		score: 37,
	},
	{
		name: 'Ryan',
		score: 38,
	},
	{
		name: 'Geofrey',
		score: 31,
	},
	{
		name: 'Sandra',
		score: 56,
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
