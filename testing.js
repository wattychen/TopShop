var stack = [];

stack.push("google");
stack.push("instagram");

const remove = (stack) => {
    return stack.pop();
}

console.log(remove(stack))
console.log(remove(stack))
console.log(stack)