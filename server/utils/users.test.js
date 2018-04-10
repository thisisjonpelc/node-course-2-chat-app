const expect = require("expect");

const {Users} = require("./users");

describe("Users", () => {

  var users;

  beforeEach(() => {
    users = new Users();

    users.users = [{
      id:1,
      name:"Jon",
      room: "Node Course"
    },
    {
      id:2,
      name:"Victoria",
      room: "React Course"
    },
    {
      id:3,
      name:"Violet",
      room: "Node Course"
    }];
  });

  it("should add new user", () => {
    var users = new Users();
    var user = {
        id: "123",
        name: "Jon",
        room: "Yankee fans"
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should remove a user", () => {
    var user = users.removeUser(3);

    //expect(users.length).toBe(2);
    expect(user).toEqual({id:3, name:"Violet", room:"Node Course"});
    expect(users.users.length).toBe(2);


  });

  it("should not remove user", () => {
    var user = users.removeUser(22);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it("should find user", () => {
    var user = users.getUser(1);

    expect(user).toExist();
    expect(user).toEqual({id:1, name:"Jon", room:"Node Course"});
  });

  it("should not find user", () => {
    var user = users.getUser(22);

    expect(user).toNotExist();
  });


  it("should return names for node course", () => {
    var userList = users.getUserList("Node Course");

    expect(userList).toEqual(["Jon", "Violet"]);
  });

  it("should return names for react course", () => {
    var userList = users.getUserList("React Course");

    expect(userList).toEqual(["Victoria"]);
  });


})
