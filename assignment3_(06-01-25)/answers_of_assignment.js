// 2. Rotate a Matrix 90 Degrees Clockwise

function rotateMatrix(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let row of matrix) {
        row.reverse();
    }
    return matrix;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Rotated Matrix:", rotateMatrix(matrix));

// 3. Maximum Frequency Stack

class FreqStack {
    constructor() {
        this.freqMap = new Map();
        this.groupMap = new Map();
        this.maxFreq = 0;
    }

    push(val) {
        let freq = (this.freqMap.get(val) || 0) + 1;
        this.freqMap.set(val, freq);
        if (!this.groupMap.has(freq)) this.groupMap.set(freq, []);
        this.groupMap.get(freq).push(val);
        this.maxFreq = Math.max(this.maxFreq, freq);
    }

    pop() {
        let val = this.groupMap.get(this.maxFreq).pop();
        this.freqMap.set(val, this.freqMap.get(val) - 1);
        if (this.groupMap.get(this.maxFreq).length === 0) this.maxFreq--;
        return val;
    }
}

let fs = new FreqStack();
fs.push(5);
fs.push(7);
fs.push(5);
fs.push(7);
fs.push(4);
fs.push(5);
console.log(fs.pop()); // 5
console.log(fs.pop()); // 7
console.log(fs.pop()); // 5
console.log(fs.pop()); // 4

// 4. Sliding Window Maximum

function maxSlidingWindow(nums, k) {
    let deque = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length && deque[0] < i - k + 1) deque.shift();
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
        deque.push(i);
        if (i >= k - 1) result.push(nums[deque[0]]);
    }

    return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

// 5. Detect and Remove a Loop in a Linked List

function detectAndRemoveLoop(head) {
    let slow = head, fast = head;

    // Detect loop
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    if (slow !== fast) return; 

    // Remove loop
    slow = head;
    while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = null;
}

// 6. Find the Median of a Running Stream

class MedianFinder {
    constructor() {
        this.low = new MaxPriorityQueue(); 
        this.high = new MinPriorityQueue(); 
    }

    addNum(num) {
        if (this.low.isEmpty() || num <= this.low.front().element) {
            this.low.enqueue(num);
        } else {
            this.high.enqueue(num);
        }

        // Balance heaps
        if (this.low.size() > this.high.size() + 1) {
            this.high.enqueue(this.low.dequeue().element);
        } else if (this.high.size() > this.low.size()) {
            this.low.enqueue(this.high.dequeue().element);
        }
    }

    findMedian() {
        if (this.low.size() > this.high.size()) {
            return this.low.front().element;
        }
        return (this.low.front().element + this.high.front().element) / 2;
    }
}

let mf = new MedianFinder();
mf.addNum(6);
mf.addNum(10);
console.log("Median:", mf.findMedian()); // 8
mf.addNum(2);
mf.addNum(8);
console.log("Median:", mf.findMedian()); // 7

// 7. Lowest Common Ancestor in a Binary Tree

function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    return left && right ? root : left || right;
}

// 9. Count Distinct Subsequences

function countDistinctSubsequences(s) {
    const MOD = 1e9 + 7;
    let lastOccurrence = {};
    let dp = Array(s.length + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= s.length; i++) {
        dp[i] = (2 * dp[i - 1]) % MOD;
        if (lastOccurrence[s[i - 1]] !== undefined) {
            dp[i] = (dp[i] - dp[lastOccurrence[s[i - 1]] - 1] + MOD) % MOD;
        }
        lastOccurrence[s[i - 1]] = i;
    }

    return dp[s.length];
}

console.log(countDistinctSubsequences("abcbac")); 

// 1. Dijkstra's Algorithm

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(u, v, weight) {
        this.adjacencyList.get(u).push({ node: v, weight });
    }

    dijkstra(source) {
        let distances = new Map();
        let visited = new Set();
        let pq = new MinPriorityQueue();

        // Initialize distances
        for (let vertex of this.adjacencyList.keys()) {
            distances.set(vertex, Infinity);
        }
        distances.set(source, 0);
        pq.enqueue(source, 0);

        while (!pq.isEmpty()) {
            let { element: current } = pq.dequeue();
            visited.add(current);

            for (let neighbor of this.adjacencyList.get(current)) {
                if (visited.has(neighbor.node)) continue;

                let newDist = distances.get(current) + neighbor.weight;
                if (newDist < distances.get(neighbor.node)) {
                    distances.set(neighbor.node, newDist);
                    pq.enqueue(neighbor.node, newDist);
                }
            }
        }

        return distances;
    }
}

let graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);

graph.addEdge(1, 2, 4);
graph.addEdge(1, 3, 2);
graph.addEdge(2, 4, 7);
graph.addEdge(2, 5, 1);
graph.addEdge(3, 6, 5);
graph.addEdge(5, 6, 3);

let distances = graph.dijkstra(1);
for (let [node, dist] of distances) {
    console.log(`Shortest path to ${node}: ${dist}`);
}
// 8. Topological Sorting

function topologicalSortDFS(graph) {
    let visited = new Set();
    let stack = [];

    function dfs(node) {
        visited.add(node);
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) dfs(neighbor);
        }
        stack.push(node);
    }

    for (let node in graph) {
        if (!visited.has(node)) dfs(node);
    }

    return stack.reverse();
}

let graphDFS = {
    1: [2, 3],
    2: [4],
    3: [4],
    4: []
};

console.log("Topological Order (DFS):", topologicalSortDFS(graphDFS));