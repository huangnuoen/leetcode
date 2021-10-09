/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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
/**
 * 重点是指针引用
 */
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  while(head){
    const temp = head.next
    head.next = prev
    prev = head
    head = temp
  }
  return prev
};
// @lc code=end

