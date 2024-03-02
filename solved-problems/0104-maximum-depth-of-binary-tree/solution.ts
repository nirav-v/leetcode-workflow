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
    //  create q to store nodes at each level
    // while the q has nodes, remove all the nodes, add any children they have to the q, and increment the depth
    // once all the nodes have null children we are done
    if (!root) return 0;
    const q = [root];
    let levels = 0;

    while (q.length) {
        const currentLength = q.length;

        let i = 0;
        // every time this loop completes it means we explored a full level and can inc depth
        while (i < currentLength) {
            const node = q.shift();

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right)

            i++;
        }


        levels += 1

    }

    return levels;
};
