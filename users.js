const {trimStr} = require("./utils");

let users = [];

const findUser = (user) => {
    console.log("User", user)
    const userName = trimStr(user.name);
    const userRoom = trimStr(user.room);

    return users.find(
        (u) => trimStr(u.name) === userName && trimStr(u.room) === userRoom);
}

const addUser = (user) => {

    const isExist = findUser(user)

    !isExist && users.push(user);

    const currentUser = isExist || user;

    return {isExist: !!isExist, user: currentUser};
};

const getRoomUsers = (room) => users.filter((user) => user.room === room );

const removeUser = (user) =>{
    const found = findUser(user)

    if (found) {
        users = users.filter(
            ({room, name}) => room === found.room && name !== found.name
        );
    }
    return found
};

module.exports = {addUser, findUser, getRoomUsers, removeUser};