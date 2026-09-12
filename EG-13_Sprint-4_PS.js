
// 08. Find First and Last Position of Element in Sorted Array

var searchRange = function(nums, target) {

    let first = -1;
    let last = -1;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === target) {
            if (first === -1) first = i;
            last = i;
        }
    }

    return [first, last];
};







// 07. Remove Nth Node From End of List

var removeNthFromEnd = function(head, n) {

    let dummy = { val: 0, next: head };
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};

let list = createLinkedList([1, 2, 3, 4, 5]);

let result = removeNthFromEnd(list, 2);

// console.log(linkedListToArray(result));




// 06. Product of Array Except Self
var productExceptSelf = function(nums) {

    let result = [];
    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = product;
        product *= nums[i];
    }

    product = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= product;
        product *= nums[i];
    }

    return result;
};







// 05. Middle of the Linked List
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}


let inputArr = [1, 2, 3, 4, 5];
let head = createLinkedList(inputArr);

let resultNode = middleNode(head);
// console.log("Output:", linkedListToArray(resultNode)); 







// 04. Reverse Linked List
var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

let testList = createLinkedList([1, 2, 3, 4, 5]);
let reversedHead = reverseList(testList);
// console.log(linkedListToArray(reversedHead)); 








// 03. Find the Difference

var findTheDifference = function(s, t) {

    let map = {};

    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of t) {

        if (!map[char]) {
            return char;
        }

        map[char]--;

    }

};





// 02. Word Pattern

var wordPattern = function(pattern, s) {

    let words = s.split(" ");

    if (pattern.length !== words.length) return false;

    let mapPW = {};
    let mapWP = {};

    for (let i = 0; i < pattern.length; i++) {

        let char = pattern[i];
        let word = words[i];

        if (mapPW[char] && mapPW[char] !== word) {
            return false;
        }

        if (mapWP[word] && mapWP[word] !== char) {
            return false;
        }

        mapPW[char] = word;
        mapWP[word] = char;

    }

    return true;
};






// 01. Isomorphic Strings
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let mapST = {};
    let mapTS = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (mapST[charS] && mapST[charS] !== charT) {
            return false;
        }

        if (mapTS[charT] && mapTS[charT] !== charS) {
            return false;
        }

        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
};


