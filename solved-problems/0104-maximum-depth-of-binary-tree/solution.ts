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

    if (!root) return 0

    let maxDepth = 0;

    let queue = [root]

    while (queue.length > 0){
        const currentQueueLength = queue.length
        for (let i = 0; i < currentQueueLength; i++){
            const node = queue.pop();
           
            if (node.left !== null) queue.unshift(node.left)
            if (node.right !== null) queue.unshift(node.right)
        }
        
        maxDepth +=1;
    
    }

    return maxDepth;

};
