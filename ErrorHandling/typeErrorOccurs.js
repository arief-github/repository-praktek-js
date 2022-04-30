// Type Coercion
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(1 == true);
// console.log(1 === true);

function concat(str1, str2, str3){
    let result = str1 + str2;
    if(typeof str3 === "string"){
        result += str3;
    }
    return result;
}

console.log(concat("Hello", " Good", " Morning"));


// Data Type Error
// function getQueryString(url){
//     const pos = url.indexOf("?");
//     if (pos > -1){
//         return url.substring(pos + 1);
//     }
//     return "";
// }
//
// console.log(getQueryString('nothing'));
