function arrayToLinkedList(arr) {
  let head = null;
  let tail = null;
  for (let i = 0; i < arr.length; i++) {
    if (!head) {
      head = {value: arr[i], next: null};
      tail = head;
    } else {
      tail.next = {value: arr[i], next: null};
      tail = tail.next;
    }
  }
  return head;
}

console.log(arrayToList([10, 20,30,50,80]));