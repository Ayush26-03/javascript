//const tinderUser=new Object()
const tinderUser={}

// tinderUser.id="123abc"
// tinderUser.name="sammy"
// tinderUser.isLoggedIn=false
// console.log(tinderUser);


const regularUser={
    email:"some@gmail.com"
    fullname:{
        userfullname:{
            firstname:"Ayush"
            lastname:"Pandey"
        }
    }
}

//console.log(regularUser.fullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3 =Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3={...obj1,...obj2}
//console.log(obj3);
 

//Objects.keys(tinderuser)

const course={
    name:"js",
    price="999",
    instructor="hitesh"

}
//course.instructor

const{ins:instructor}=course

console.log(ins)




 
