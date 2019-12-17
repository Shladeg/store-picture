import users from "../data/users";

export default () => {
  const usersStorage = JSON.parse(localStorage.getItem("users"));
  const userStorage = JSON.parse(localStorage.getItem("user"));

  const getUsers = () => {
    if (!usersStorage) {
      localStorage.setItem("users", JSON.stringify(users));
    }

    return usersStorage;
  };

  // TODO: добавить обновление пользователя при редактировании
  const addUsers = user => {
    if (user) {
      const newUsers = JSON.stringify([user, ...usersStorage]);
      localStorage.setItem("users", newUsers);

      return usersStorage;
    }
  };

  const getUser = () => userStorage;
  const adduser = user => {
    if (user) {
      const newUser = JSON.stringify(user);
      localStorage.setItem("user", newUser);

      return userStorage;
    }
  };
  const removeUser = () => localStorage.removeItem("user");

  return {
    users: {
      get: getUsers,
      add: addUsers
    },

    user: {
      get: getUser,
      add: adduser,
      remove: removeUser
    }
  };
};
