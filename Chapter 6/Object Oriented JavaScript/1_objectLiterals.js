// NetNinja's Object Oriented JavaScript Tutorial:
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7

// Object Literals (again)
// Encapsulate everything that has to do with a user and containing it in once piece:
let userOne = {
  email: 'ryu@ninjas.com',
  name: 'Ryu',
  login(){
    console.log(this.email, 'has logged in')
    // this refers to the object userOne
  },
  logout(){
    console.log(this.email, 'has logged out')
  }
};