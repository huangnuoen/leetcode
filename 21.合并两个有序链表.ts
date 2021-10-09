/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//   }
// }

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let res = new ListNode(0)
  let cur = res.next
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur = new ListNode(l1.val)
      l1 = l1.next
    } else {
      cur = new ListNode(l2.val)
      l2 = l2.next
    }
    cur = cur.next
  }
  if(l1) cur = l1
  if(l2) cur = l2
  return res.next
}
// @lc code=end
