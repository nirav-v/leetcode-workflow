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

function isSymmetric(root: TreeNode | null): boolean {
    let left = [];
    let right = [];
    
    function traverseLeft(node, result){
        
        result.push(node ? node.val: node);
        if (!node) return result;
        
        traverseLeft(node.left, result);
        traverseLeft(node.right, result);
        
        return result;
    }
    
    
    function traverseRight(node, result){
        
        result.push( node ? node.val: node);
        if (!node) return result;
        
        traverseRight(node.right, result);
        traverseRight(node.left, result);
        
        return result;
    }
    
    const leftTree = traverseLeft(root.left, left);
    const rightTree = traverseRight(root.right, right);
    
    console.log(leftTree, rightTree)
    
    for (let i = 0; i < leftTree.length; i++){
        if (leftTree[i] !== rightTree[i]) return false;
    }
    
    return true;
    
};
