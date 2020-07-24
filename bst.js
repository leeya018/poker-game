
// *  Given a binary tree, determine if it is a valid BST.
// *
// *  Valid BST   Not Valid BST
// *
// *      2           5
// *     / \         / \
// *    1   3       1   6
// *                \   / \
// *                9  3   7
// *
class MyNode {
    constructor(val, left, right) {
        this.val = val;  /* number */
        this.left = left;  /* MyNode */
        this.right = right;  /* MyNode */
    }
}

/*
*  Valid BST
*
*      2    
*     / \   
*    1   3  
*/
const tree1 =
    new MyNode(
        2,
        new MyNode(1),
        new MyNode(3)
    );

/*
*  Not Valid BST
*
*      5
*     / \   
*    1   6
*    \  / \
*    9  3  7
*/
const tree2 =
    new MyNode(
        5,
        new MyNode(
            1,
            null, new MyNode(9)
        ),
        new MyNode(
            6,
            new MyNode(3), new MyNode(7)
        )
    );


const tree3 =
    new MyNode(
        8,
        new MyNode(
            5,
            new MyNode(
                1,
                new MyNode(0),
                new MyNode(3,
                    new MyNode(2),
                    new MyNode(4)
                )
            ), new MyNode(6, new MyNode(5.5, new MyNode(11), null), null)
        ),
        new MyNode(
            6,
            new MyNode(3), new MyNode(7)
        )
    );


let counter = 0
const isBst = (root /* MyNode */) => {
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

}

const helper = (node, min, max) => {
    // console.log(++counter)
    if (node == null) return true
    if (node.val < min || node.val > max) return false
    return helper(node.left, min, node.val) &&
        helper(node.right, node.val, max)
}


// console.log('is bst 1:', isBst(tree1));

// console.log('is bst 2:', isBst(tree2));
// console.log('is bst 3:', isBst(tree3));


// base  case - this is stopping condition in recurction
// must stop it somewhere. because if not it run forever
//hwo to write it : 
//a value to statrt  with
// I can start with non recursive and contrinue 
//create a subproblemm to difine the prob 
// run alg on the subProblem

function factorial(n) {
    if (n === 1) return 1
    return factorial(n - 1) * n
}

function fib(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    return fib(n - 1) + fib(n - 2)
}

function gcd(n) {
    let num = Math.round(n / 2) + 1

    return gcdRec(n, num)
}

function gcdRec(n, num) {
    if (n % num === 0) return num
    return gcdRec(n, num - 1)
}

function computes(arr) {
    return computedRec(arr, 0)
}

function computedRec(arr, i) {
    if (arr.length === i) return 0
    return arr[i] + computedRec(arr, i + 1)
}

function binSearch(arr) {
    // this is the first function that I can use
    let mid = getMid(0, arr.length)
    return binSearchR(arr, 0, arr.length, mid)
}

function getMid(s, e) {
    return parseInt((s + e) / 2)

}

function binSearchR(arr, s, e, mid) {
    if (arr[mid] === num) return mid
    if (num < arr[mid]) {
        e = mid
        mid = getMid(s, e)
    }
    if (num > arr[mid]) {
        s = mid
        mid = getMid(s, e)
    }
    return binSearchR(arr, s, e, mid)
}

//this funciton is not dependent in ningun otros 
function binSearchR2(arr) {
    let mid = getMid(0, arr.length)
    if (arr[mid] === num) return mid
    if (num < arr[mid]) {
        return binSearchR2(arr.slice(0, mid))
    }
    if (num > arr[mid]) {
        return mid + binSearchR2(arr.slice(mid, arr.length))

    }
}

// 3 4 2 6

// function merge(left, right) {
//     var arry = [];
//     while (left.length > 0 && right.length > 0) {
//         arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
//     }
//     return arry.concat(left).concat(right);
// };

// Array.prototype.merge_Sort = function () {
//     if (this.length <= 1) {
//         return this;
//     }

//     var half = parseInt(this.length / 2);
//     var left = this.slice(0, half).merge_Sort();
//     var right = this.slice(half, this.length).merge_Sort();




//     return merge(left, right);
// };











function merge(left, right) {
    let newArr = []
    while (left.length > 0 && right.length > 0) {
        newArr.push((left[0] < right[0] ? left.shift() : right.shift()))
    }
    newArr = newArr.concat(left).concat(right)
    return newArr
}


function mergeSort(arr) {
    let mid = parseInt(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    if (left.length > 1) left = mergeSort(left)
    if (right.length > 1) right = mergeSort(right)

    return merge(left, right)
}

var a = [5,55,6,223, 3, 2];
console.log(mergeSort(a));

//[1,2,3,4]
let num = 2





https://github.com/leeya018/course_pojects.git













