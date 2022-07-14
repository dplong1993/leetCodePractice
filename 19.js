/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let curr = head;
    let prev = null;
    let length = 0;
    while(curr != null){
        length += 1;
        curr = curr.next;
    }
    
    if(length === 1){
        return null;
    }
    
    let nodePos = length + 1 - n;
    curr = head;
    let count = 0;
    while(count < nodePos){
        count += 1;
        if(count === nodePos){
            if(prev !== null){
                prev.next = curr.next;
            } else {
                return curr.next;
            }
            return head;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
};