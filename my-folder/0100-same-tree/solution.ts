/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // form array of all the node we visit in order

    let treeP = [];
    let treeQ = [];
    function buildTree(node: TreeNode, tree: TreeNode[]) {
        // let queue = [node];
        // BFS using queue
        // while (queue.length){
        //     let currentNode = queue.pop();
        //     tree.push(currentNode)
        //     if (currentNode === null) continue;
        //     if(currentNode.left || currentNode.right){
        //         queue.unshift(currentNode.left)
        //         queue.unshift(currentNode.right)
        //     }
        // }

        if (node !== null) {
            tree.push(node);
            buildTree(node.left, tree)
            buildTree(node.right, tree)
        }

        return tree;
    }

    return JSON.stringify(buildTree(q, treeQ)) === JSON.stringify(buildTree(p, treeP))

};
