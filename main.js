// Node factory function
function Node(data = null, left = null, right = null) {
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
		// insert a value into the tree (recursive)
		function insert(value, node = root) {
			//console.log("Node is:");
			//console.log(node);
			// is the tree empty?
			if (node.data === null) {
				//console.log("Tree empty");
				node = Node(value);
			}
			// is current selected node greater than value?
			if (node.data > value) {
				// YES - go left to lower values
				// if there is a left node
				if (node.left !== null) {
					//console.log("Going left...");
					// go down the branch
					insert(value, node.left);
				} else {
					//console.log("Inserting left");
					// else insert value
					node.left = Node(value);
					// stop - sucess
					return true;
				}
			} else if (node.data < value) {
				// NO - go right to higher values
				// if there is a right node
				if (node.right !== null) {
					//console.log("Going right...");
					// go down the branch
					insert(value, node.right);
				} else {
					//console.log("Inserting right");
					// else insert value
					node.right = Node(value);
					// stop - sucess
					return true;
				}
			} else {
				/*
				 *   else node === value so stop because either:
				 *   it was an empty tree and node has been placed at root
				 *   or a duplicate snuck in somewhere so should not be placed in the tree
				 */
				//console.log("Null node");
				// stop - failure (empty tree or duplicate)
				return false;
			}
		}
		// delete a value from the tree
		function deleteItem(value, node = root) {
			// follow the tree in the same way as for insert()
			// start from root
			// if tree doesnt exist
			if (node.data === null) {
				// stop - failure (empty tree)
				console.log("Empty tree");
				return false;
			}
			// check if node.left.data and node.right.data match value
			else if (node.left && node.left.data === value) {
				console.log("Match left");
				console.log(node);
				// get node.left.left and node.left.right
				// attach them to node.left
				// stop - success
				return true;
			} else if (node.right && node.right.data === value) {
				console.log("Match right");
				console.log(node);
				// get node.right.left and node.right.right
				// attach them to node.right
				// stop - success
				return true;
			}
			// if neither is true go a layer deeper according to tree logic
			else if (node.data > value) {
				// GREATER - go left to lower values
				// if there is a left node
				if (node.left !== null) {
					console.log("Going left...");
					// go down the branch
					deleteItem(value, node.left);
				} else {
					// else no item found return false
					// stop - failure (no item found)
					console.log("No item found");
					return false;
				}
			} else if (node.data < value) {
				// LESS - go right to higher values
				// if there is a right node
				if (node.right !== null) {
					console.log("Going right...");
					// go down the branch
					deleteItem(value, node.right);
				} else {
					// else no item found return false
					// stop - failure (no item found)
					console.log("No item found");
					return false;
				}
			}
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
