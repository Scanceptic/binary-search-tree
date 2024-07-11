// Node factory function
function Node(data, left = null, right = null) {
	try {
		return {
			data,
			left,
			right,
		};
	} catch (error) {
		console.log(error);
	}
}

// Binary Search Tree factory function
function Tree(array) {
	try {
		// build tree and save root node
		const root = buildTree(array);
		// insert a value into the tree
		function insert(value) {
			// follow path down the tree based on higher/lower until reaching node.right || node.left === null
			// insert value
		}
		// delete a value from the tree
		function deleteItem(value) {
			// find the node
			// delete node
			// cleanup tree
			// does the node have children?
			// do their nodes have children?
			// are there only children on the right or left?
		}
		// find and return node with value
		function find(value) {}
		// traverse tree breadth-first and provide each node as an argument to the callback
		// use iteration or recursion | return array of vals if no callback param
		// use array acting as queue to keep track of all child nodes yet to traverse and to add new nodes to list
		function levelOrder(callback) {}
		// traverse tree in depth-first order: in order
		function inOrder(callback) {}
		// traverse tree in depth-first order: pre order
		function preOrder(callback) {}
		// traverse tree in depth-first order: post order
		function postOrder(callback) {}
		// return a given node's height (longest no of branches to leaf node)
		function height(node) {}
		// return a given node's depth (no of branches to root node)
		function depth(node) {}
		// check if tree is balanced
		function isBalanced() {
			// go through every node
			for (node in tree) {
				// get height of left subtree
				// get height of right subtree
				// if height diff is more than 1
				if (heightdiff > 1) {
					// return false - unbalanced
					return false;
				}
			}
			// else all nodes balanced: return true
			return true;
		}
        // rebalance an unbalanced tree
		function rebalance() {
            // use a traversal method to provide a new array to the buildTree func
        }
		return {
			root,
			insert,
			deleteItem,
			find,
			levelOrder,
			inOrder,
			preOrder,
			postOrder,
			height,
			depth,
			isBalanced,
			rebalance,
		};
	} catch (error) {
		console.log(error);
	}
}

// Build Tree func
function buildTree(array) {
	try {
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
		console.log(builtBST);
		return builtBST;
	} catch (error) {
		console.log(error);
	}
}

// Provided BST print function
const prettyPrint = (node, prefix = "", isLeft = true) => {
	try {
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
	} catch (error) {
		console.log(error);
	}
};
const testArray = [1, 4, 6, 8, 2, 26, 58, 243, 6734, 7, 19, 82, 72, 64, 85];
const test = Tree(testArray);
prettyPrint(test.root);
