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

function levelOrder(root: TreeNode | null): number[][] {    
    
    const result = []
    
    if (!root) return result

    
    function traverse(){
        const q = [root];
        
        while (q.length){
            
            let level = [];
            let currentQLength = q.length;
            
            for (let i = 0; i < currentQLength; i++){
                const node = q.pop();
                
                level.push(node.val)

                if (node.left) q.unshift(node.left)
                if (node.right) q.unshift(node.right)    
            }
            
            result.push(level);

        }
    }
    
    traverse();
    
    return result;
};
