const stringHandsOn = function(){
const str= " Hey you are doing good, keep it up ";
console.log(`${str}`);
console.log(str.length);
console.log(str.trim());
console.log(str.length- str.trim().length);
var res=str.trim();
console.log(res.charAt(0));
console.log(res.charAt(res.length-1));
console.log(str.split(","));
console.log(str.indexOf("good"));
console.log("using sub string method Ans-->");
console.log(str.substring(22));
console.log("using slice method Ans-->");
console.log(str.slice(22));
console.log("ends with up ? Ans -->");
console.log(res.endsWith("up"));
console.log("start with Hey ? Ans -->");
console.log(res.startsWith("Hey"));
const word=res.split(" ");
console.log(word.length);
}
stringHandsOn();