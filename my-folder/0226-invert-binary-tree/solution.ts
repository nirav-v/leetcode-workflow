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

    if (!root) return root

    // iterative BFS
    // const q = [root];

    // while (q.length){
    //     const node = q.pop();

    //     let temp = node.left;
    //     node.left = node.right;
    //     node.right = temp;

    //     if (node.left) q.unshift(node.left);
    //     if (node.right) q.unshift(node.right);

    // }

    // return root;

    // recursive DFS
        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        invertTree(root.left);
        invertTree(root.right);

        return root;

};
