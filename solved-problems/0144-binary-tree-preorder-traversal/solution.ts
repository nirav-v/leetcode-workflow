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
    
    const result = [root.val];
    
    function pushChildNodes(node) {
        if (!node) return;
        
        if (node.left) result.push(node.left.val);
        pushChildNodes(node.left)
        
        if (node.right) result.push(node.right.val)
        pushChildNodes(node.right)
    }
    
    pushChildNodes(root)
    
    return result;
    
};
