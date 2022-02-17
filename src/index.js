module.exports = function check(str, bracketsConfig) {
  let open = [];
  let pair = {};
  let stack = [];
  

  for (let j = 0; j < bracketsConfig.length; j++) {
    pair[bracketsConfig[j][1]] = bracketsConfig[j][0];
    open.push(bracketsConfig[j][0]);
  }

    for (let i = 0; i < str.length; i++) {

          if(open.includes(str[i])) {
            stack.push(str[i]);
          } else {
                if (stack.length === 0) {
                  return false;
                }
                              
                if(pair[str[i]] === (stack[stack.length - 1])) {
                  stack.pop();
                } else {
                  return false;
                } 
            }
        } 
        return stack.length === 0
  }
  


