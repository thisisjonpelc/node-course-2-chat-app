class Users  {
  constructor(){
    this.users = [];
  }

  addUser(id, name, room){

    var user = {id, name, room};
    this.users.push(user);
    return user;

  }

  removeUser(id){
    var user = this.users.filter((user) => {
      return user.id === id;
    })[0];

    //console.log("User: ", user);

    if(user){
      this.users = this.users.filter((user) => {
        return user.id !== id;
      });
    }

    return user;
  }

  getUser(id){
    var user = this.users.filter((user) => {
      return user.id === id;
    })[0];

    return user;
  }

  getUserList(room){
    var users = this.users.filter((user) => {
      return user.room === room;
    });

    var namesArray = users.map((user) => {
      return user.name;
    });

    return namesArray;
  }
}

module.exports = {Users};


// class Person {
//   constructor(name, age) {
//     console.log(name, age);
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription(){
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person("Jon", 30);
// var description = me.getUserDescription();
// console.log(description);
