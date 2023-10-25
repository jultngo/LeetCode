var isValid = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            stack.push(s[i])
        } else {
            switch(s[i]) {
                case ")":
                    if(stack[stack.length-1] == "(") {
                        stack.pop(stack.length-1)
                    } else {
                        return false
                    }
                    break;
                case "}":
                    if(stack[stack.length-1] == "{") {
                        stack.pop(stack.length-1)
                    } else {
                        return false
                    }
                    break;
                case "]":
                    if(stack[stack.length-1] == "[") {
                        stack.pop(stack.length-1)
                    } else {
                        return false
                    }
                    break;
            }
        }
    }
    if(stack.length > 0) {
        return false;
    }
    return true;
};