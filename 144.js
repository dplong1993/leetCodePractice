/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    if(root === null) return [];
    
    let leftPreorder = root.left === null ? [] : preorderTraversal(root.left);
    let rightPreorder = root.right === null ? [] : preorderTraversal(root.right);
    
    return [root.val, ...leftPreorder, ...rightPreorder];
};