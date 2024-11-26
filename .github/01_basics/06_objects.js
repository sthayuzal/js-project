const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Samamy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
        firstname: "Yuzal",
        lastname: "shrestha"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));

const course = {
    coursename: "JS",
    price: "699",
    courseInst: "Yuzal"

}

// course.courseInst

const {courseInst: inst} = course

console.log(inst);

// {
//     "name": "Yuzal",
//     "coursename1": "JS",
//     "price": "free"
// }



