/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    const result = [];
    for(let list of lists){
        let curr = list;
        while(curr != null){
            result.push(curr.val);
            curr = curr.next;
        }
    }
    result.sort((a,b) => a - b);
    const dummyHead = new ListNode(null);
    let tail = dummyHead;
    for(let value of result){
        tail.next = new ListNode(value);
        tail = tail.next;
    }
    return dummyHead.next;
};