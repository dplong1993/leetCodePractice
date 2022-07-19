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
 var inorderTraversal = function(root) {
    if(root === null) return [];
    
    let leftInorder = root.left === null ? []: inorderTraversal(root.left);
    let rightInorder = root.right === null ? []: inorderTraversal(root.right);
    
    return [...leftInorder, root.val, ...rightInorder];
};