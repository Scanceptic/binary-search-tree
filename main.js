// use no built-in methods

// Node factory function
function Node(value = null, leftChild = null, rightChild = null) {
	return {
		value,
		leftChild,
		rightChild,
	};
}

// Binary Search Tree factory function
function Tree(array) {
	const root = buildTree(array);
}

// Build Tree func
function buildTree(array) {
	// remove duplicate values
	function cleanArray() {}
	// sort array
	function sortArray() {}
	function arrayToBST() {
		// recursion
		// set base case: if reached end of input array
		// keep moving index along subarrays attaching the middle elements
		// get subarray left half (lower half) of sorted array
		// get middle of left half
		// attach to root element as left child
		// get subarray right half (higher half) of sorted array
		// get middle of right half
		// attach to root element as right child
	}
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
