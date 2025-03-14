let username = "JACK";
let userCheck = /^[^0-9]\w+[0-9]*/i;
let result = userCheck.test(username);

console.log(result);