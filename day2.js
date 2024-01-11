const meals = ["1", "2", "3", "4", "5"];

for (let i = 6; i >= 0; i -= 1) {
  console.log(meals[i]);
}
console.log("BLAST OFF");

const grid = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(grid[i][j]);
  }
}
