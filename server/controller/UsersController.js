const models = require("../db/models")

class UsersController {
  static async getAllUsers(req, res) {
    try {
      const getUsers = await models.User.findAll()
      return res.status(200).json(getUsers);
    } catch (error) {
      return res.status(400).json({ error: "Users not found" });
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = await models.User.findAll({
        where: {
          id: req.params.uid
        }
      });
      return res.status(200).json(userId);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }

  static async createUser(req, res) {
    try {
      const { userName, email, password, role, restaurant } = req.body;
      const postUser = await models.User.create({
        userName,
        email,
        password,
        role,
        restaurant,
        createdAt: new Date(),
        updateAt: new Date()
      })
      return res.status(201).json(postUser);
    } catch (error) {
      return res.status(400).json({ error: "Could not create user" });
    }
  }

  static async updateUser(req, res) {
    try {
      const { userName, email, password, role, restaurant } = req.body;
      const putUser = await models.User.update({
        userName,
        email,
        password,
        role,
        restaurant
      },
        {
          where: {
            id: req.params.uid
          }
        }
      );
      return res.status(200).json(putUser);
    } catch (error) {
      return res.status(400).json({ error: "Could not update user" });
    }
  }

  static async deleteUser (req, res) {
    try {
      const destroyUser = await models.User.destroy({
        where: {
          id: req.params.uid
        }
      });
      return res.status(200).json(destroyUser);
    } catch (error) {
      return res.status(400).json({ error: "It was not possible to delete the user" });
    }
  }
}

module.exports = UsersController