 let a = prompt()
 let b 
 let admin = "admin"
 let admin_password = 12345
 let null_password = null
 let user = "user"
if ( a == admin){
    console.log("введите пароль админа");
     b = prompt()
}
if (a == user){
    console.log("sallom mexmonla");
}

if (b == admin_password){
    console.log("Admiiiiiiiiiin");
}
if (b !== admin){
    console.log("Vzlomwik yoqol");
}
if (b == null_password){
    console.log("Otmen buldi");
}