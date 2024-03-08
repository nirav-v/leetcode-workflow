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

function inorderTraversal(root: TreeNode | null): number[] {
//     once node has no children, add it to the result and return
    
    const result = [];
    
    function traverse(node) {
        
        if (!node) return
        
        traverse(node.left);
        result.push(node.val)
        traverse(node.right);
    }
    
    traverse(root)
    
    return result;
    
};
