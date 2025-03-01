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

function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const result = [];

    const stack = [root] // if doing preorder traversal, use stack to ensure all left nodes are added first

    // function traverse(node){
    //     if (!node) return;

    //     result.push(node.val)
    //     traverse(node.left)
    //     traverse(node.right)
    // }

    // traverse(root);
    // return result;

    while (stack.length){
        const node = stack.pop();
        result.push(node.val);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);

    }
    

    return result;

};
