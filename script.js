function list(s, d) {
  const q = [[s]];
  const visited = new Set();
  visited.add(`${s[0]},${s[1]}`);

  const directions = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  while (q.length > 0) {
    const path = q.shift();
    const [x, y] = path[path.length - 1];

    if (x === d[0] && y === d[1]) {
      console.log(`You made it in ${path.length - 1} moves.`);
      console.log(path.map((set) => `[${set}]`).join("->"));
      return path;
    }
    for (const [moveX, moveY] of directions) {
      const newX = moveX + x;
      const newY = moveY + y;
      const key = `${newX}, ${newY}`;

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8 && !visited.has(key)) {
        visited.add(key);
        q.push([...path, [newX, newY]]);
      }
    }
  }
  console.log("No Path");
  return null;
}

list([0, 0], [7, 2]);
