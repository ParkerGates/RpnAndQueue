function rpn(expression) {
    stack = new Stack();
    expression = expression.split(" ");

    for (let i = 0; i < expression.length; i ++) {
        stack.push(expression[i]);

        switch(expression[i]) {
            case "+":
            case "-":
            case "*":
            case "**":
            case "/":
            case "%":
                top1 = stack.pop();
                top2 = stack.pop();
                top3 = stack.pop();

                stack.push(eval(top2 + " " + top1 + " " + top3));
                break;
        }
    }
    return stack.data[0];
}