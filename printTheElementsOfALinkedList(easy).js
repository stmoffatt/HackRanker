/* Given a pointer to the head node of a linked list, print its elements in order, one element per line. If the head pointer is null (indicating the list is empty), don’t print anything.

Input Format

The first line of input contains n, the number of elements in the linked list. 
The next n lines contain one element each, which are the elements of the linked list. */

function printLinkedList(head) {
  while (head !== null) {
    console.log(head.data)
    head = head.next
  }
}
