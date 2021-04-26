// 2021.04.26 해결

function solution(bridge_length, weight, truck_weights) {
	var answer = 0;
	var queue = Array(bridge_length).fill(0);
	while (truck_weights.length !== 0) {
		weight += queue.shift();
		if (weight >= truck_weights[0]) {
			queue.push(truck_weights.shift());
			weight -= queue[queue.length - 1];
		} else {
			queue.push(0);
		}
		answer++;
	}
	answer += bridge_length;
	console.log(answer);
}
solution(2, 10, [7, 4, 5, 6]);
