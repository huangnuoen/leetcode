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
/**
 * @description: 递归
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) return l2
  if (l2 === null) return l1
  let node: ListNode
  if (l1.val < l2.val) {
    node = new ListNode(l1.val, mergeTwoLists(l1.next, l2))
  } else {
    node = new ListNode(l2.val, mergeTwoLists(l1, l2.next))
  }
  return node
}
/**
 * @description: 迭代法
 * 循环l1,l2 判断大小
 * 重点在于指针的转换
 */
function mergeTwoLists2(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let node: ListNode = new ListNode()
  let prev = node
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      prev.next = new ListNode(l2.val)
      l2 = l2.next
    }
    prev = prev.next
  }
  if (l1) prev.next = l1
  if (l2) prev.next = l2
  return node.next
}
// @lc code=end
