//singelton



//object literal

//object.create//constructor method

const mySym=Symbol("key1")



const JsUser={
    name:"Hitesh",
    [mySym]:"mykey1"//used as symbol
    age:18,
    locatioon:"Pune", 
    email:"example.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","sarueday"]

}
console.log(JsUser.email);
console.log((JsUser["email"]));//always use this

JsUser.email="chatgpt.com"

//Object.freeze(JsUser)

JsUser.greeting=function(){
    console.log("Hello");

    
}
JsUser.greetingtwo=function(){
    console.log(`helo,${this.name}`);
    
}
console.log(JsUser.greeting());

console.log(JsUser.greetingtwo());


