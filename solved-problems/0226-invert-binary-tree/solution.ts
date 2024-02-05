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

function invertTree(root: TreeNode | null): TreeNode | null {

    function swapNodes(currentNode: TreeNode) {

        if (!currentNode) return

        console.log(currentNode)
        const temp = currentNode.left;
        currentNode.left = currentNode.right;
        currentNode.right = temp;
        swapNodes(currentNode.left);
        swapNodes(currentNode.right);

    }

    swapNodes(root)

    return root;
};
