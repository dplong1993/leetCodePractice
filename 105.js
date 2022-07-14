/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if(preorder.length === 0) return null;
    if(preorder.length === 1) return new TreeNode(preorder[0], null, null);
    
    let root = preorder[0];
    let rootInorderPos = inorder.indexOf(root);
    let leftInorder = inorder.slice(0, rootInorderPos);
    let rightInorder = inorder.slice(rootInorderPos + 1);
    let leftPreorder = preorder.slice(1, leftInorder.length + 1);
    let rightPreorder = preorder.slice(leftInorder.length + 1);
    
    // console.log(root, rootInorderPos, leftInorder, rightInorder, leftPreorder, rightPreorder);
    let leftSubtree = buildTree(leftPreorder, leftInorder);
    let rightSubtree = buildTree(rightPreorder, rightInorder);
    
    return new TreeNode(root, leftSubtree, rightSubtree);
};