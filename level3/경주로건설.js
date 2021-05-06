function solution(board) {
	let result;
	let visit = Array.from(Array(board.length), () =>
		new Array(board.length).fill(99999999)
	);
	let dY = [-1, 1, 0, 0];
	let dX = [0, 0, -1, 1];
	let D = ['U', 'D', 'L', 'R'];
	let min = 1000000;
	let queue = [[0, 0, 0, 'A']];
	while (queue.length !== 0) {
		let cur = queue.shift();

		if (cur[0] === board.length - 1 && cur[1] === board.length - 1) {
			if (min > cur[2]) {
				min = cur[2];
			}
		}

		for (var i = 0; i < 4; i++) {
			result = 100;
			if (
				cur[0] + dY[i] >= board.length ||
				cur[1] + dX[i] >= board.length ||
				cur[0] + dY[i] < 0 ||
				cur[1] + dX[i] < 0
			) {
				continue;
			}
			if (board[cur[0] + dY[i]][cur[1] + dX[i]] === 1) {
				continue;
			}
			if (cur[3] !== 'A' && cur[3] !== D[i]) {
				result += 500;
			}
			if (visit[cur[0] + dY[i]][cur[1] + dX[i]] < cur[2] + result) {
				continue;
			}
			visit[cur[0] + dY[i]][cur[1] + dX[i]] = cur[2] + result;
			queue.push([cur[0] + dY[i], cur[1] + dX[i], cur[2] + result, D[i]]);
		}
	}
	console.log(min);
	return min;
}
solution([
	[0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 0],
	[0, 0, 1, 0, 0, 0],
	[1, 0, 0, 1, 0, 1],
	[0, 1, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0],
]);
