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
					// go down the branch
					insert(value, node.left);
				} else {
					// else insert value
					node.left = Node(value);
					return true;
				}
			} else if (node.data < value) {
				// NO - go right to higher values
				// if there is a right node
				if (node.right !== null) {
					// go down the branch
					insert(value, node.right);
				} else {
					// else insert value
					node.right = Node(value);
					return true;
				}
			} else {
				return false;
			}
		}
		// delete a value from the tree
		function deleteItem(value, node = root) {
			// follow the tree in the same way as for insert()
			// start from root
			// if tree doesnt exist
			if (node === null) {
				return false;
			}
			// check if node.data matches value
			else if (node.data === value) {
				// if the node has children on both sides
				if (node.left !== null && node.right !== null) {
					// get node to delete
					const toBeDeleted = node;
					// get right child
					const rightChild = toBeDeleted.right;
					// crawl through right branch > left...
					let minValue = rightChild;
					node = rightChild;
					// while there is a left child
					while (node.left !== null) {
						// set minvalue = left child
						minValue = node.left;
						// go to left child
						node = node.left;
					}
					// replace the original node with the minimum value
					toBeDeleted.data = minValue.data;
					// remove the minimum value from its original position
					deleteItem(minValue.data, toBeDeleted.right);
					return true;
				}
				// else if the node has children on the left side
				else if (node.left !== null && node.right === null) {
					// replace node with node.left
					node = Node(node.left.data, node.left.left, node.left.right);
					return true;
				}
				// else if the node has children on the right side
				else if (node.left === null && node.right !== null) {
					// replace node with node.right
					node = Node(node.right.data, node.right.left, node.right.right);
					return true;
				}
			}
			// else if node ahead is equal to value and has no children
			else if (
				node.left.data === value &&
				node.left.right === null &&
				node.left.left === null
			) {
				// delete node
				node.left = null;
				// stop - success
				return true;
			}
			// if neither is true go a layer deeper according to tree logic
			else if (node.data > value) {
				// GREATER - go left to lower values
				// if there is a left node
				if (node.left !== null) {
					// go down the branch
					deleteItem(value, node.left);
				} else {
					// else no item found return false
					return false;
				}
			} else if (node.data < value) {
				// LESS - go right to higher values
				if (node.right !== null) {
					// go down the branch
					deleteItem(value, node.right);
				} else {
					// else no item found return false
					return false;
				}
			}
		}
		// find and return node with value
		function find(value, node = root) {
			// if node found
			if (node.data === value) {
				return node;
			}
			// if node !== value go a layer deeper according to tree logic
			else if (node.data > value && node.left !== null) {
				// GREATER - go left to lower values
				// go down the branch
				return find(value, node.left);
			} else if (node.data < value && node.right !== null) {
				// LESS - go right to higher values
				// go down the branch
				return find(value, node.right);
			} else {
				// no item found
				return false;
			}
		}
		// traverse tree breadth-first and provide each node as an argument to the callback
		// use iteration or recursion | return array of vals if no callback param
		// use array acting as queue to keep track of all child nodes yet to traverse and to add new nodes to list
		function levelOrder(callback = console.log, queue = [root], array = []) {
			while (queue.length > 0) {
				// set new node
				const node = queue[0];
				// execute callback on node in queue
				callback(node);
				// push the left child to the queue if not null
				if (node.left !== null) {
					//console.log("left node");
					queue.push(node.left);
				}
				// push the right child to the queue if not null
				if (node.right !== null) {
					//console.log("right node");
					queue.push(node.right);
				}
				// remove visited node from front of queue
				/*
				console.log("queue before shift:");
				console.log(queue);
				*/
				array.push(node.data);
				queue.shift();
				/*
				console.log("queue after shift:");
				console.log(queue);
				*/
			}
			return array;
		}
		// traverse tree in depth-first order: in order
		function inOrder(callback = console.log, node = root) {
			if (node) {
				inOrder(callback, node.left);
				callback(node.data);
				inOrder(callback, node.right);
			}
		}
		// traverse tree in depth-first order: pre order
		function preOrder(callback = console.log, node = root) {
			if (node === null) return;

			callback(node.data);

			preOrder(callback, node.left);
			preOrder(callback, node.right);
		}
		// traverse tree in depth-first order: post order
		function postOrder(callback = console.log, node = root) {
			if (node === null) return;

			postOrder(callback, node.left);
			postOrder(callback, node.right);

			callback(node.data);
		}
		// return a given node's height (longest no of branches to leaf node)
		function height(node) {
			if (node === null) return -1;

			let leftHeight = height(node.left);
			let rightHeight = height(node.right);

			return Math.max(leftHeight, rightHeight) + 1;
		}
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
