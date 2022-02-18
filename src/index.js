module.exports = function check(str, bracketsConfig) {
  
let pair = bracketsConfig.map(el => el.join(''))
 

for (let i = 0; i < pair.length;) {
  if (str.includes(pair[i])) {
    str = str.replace(pair[i], '')
    i = 0
  } else { 
            i++ }
}


return str.length === 0;
}


       
       
  
