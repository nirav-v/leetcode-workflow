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

function maxDepth(root: TreeNode | null): number {
    
    if (!root) return 0;

    let currentDepth = 1
    let maxDepth = currentDepth;
    
    function traverse(node, depth){
        
        if (!node) return;
        
        if (!node.left && !node.right) maxDepth = Math.max(maxDepth, depth);
        
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
        
    }
    
    traverse(root, currentDepth)
    return maxDepth;
    
};
