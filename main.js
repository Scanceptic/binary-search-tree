// Node factory function
function Node(value = null, leftChild = null, rightChild = null) {
	return {
		value,
		left,
		right,
	};
}

// Binary Search Tree factory function
function Tree(array) {
	const root = buildTree(array);
}

// Build Tree func
function buildTree(array) {
	// sort array FIRST so duplicates can be removed
	function sortArray(array) {
		return array.sort((a, b) => a - b);
	}
	// remove duplicate values
	function cleanArray(array) {
		return [...new Set(array)];
	}
	// make array into BST
	function arrayToBST(array, start = 0, end = array.length - 1) {
		// recursion
		// set base case: if reached end of input array
		if (start > end) {
			return null;
		}
		// get root element of input array
		const root = parseInt((start + end) / 2);
		const node = Node(array[root]);
		// attach left node of root = root of the left subarray
		node.left = arrayToBST(array, start, root - 1);
		// attach right node of root = root of the right subarray
		node.right = arrayToBST(array, root + 1, end);
		// keep looping until every node in the array has been attached
		return node;
	}
	// sort for cleaner to work
	const sortedArray = sortArray(array);
	// clean for builder to work
	const cleanedArray = cleanArray(sortedArray);
	// build
	const builtBST = arrayToBST(cleanedArray);
	// return root node
	return builtBST;
}

// Provided BST print function
const prettyPrint = (node, prefix = "", isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
	}
	console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
	}
};
