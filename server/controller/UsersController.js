const database = require("../db/models")
const models = require("../db/models")


class UsersController {
  static async getAllUsers(req, res) {
    try {
      const users = await database.User.findAll()
      return res.status(200).json(users)
    } catch (err) {
      return res.status(400).json({ error: "dados não encontrados" })
    }
  }

  static async getUserById(req, res) {
    const { uid } = req.params
    try {
      const userId = await database.User.findAll({
        where: {
          id: Number(uid)
        }
      });
      return res.status(200).json(userId)
    } catch (error) {
      return res.status(400).json({ error: "dados não encontrados" })
    }
  }

  static async createUser(req, res) {
    try {
      const { userName, email, password, role, restaurant } = req.body;
      const createUser = await models.User.create({
        userName,
        email,
        password,
        role,
        restaurant
      })
      return res.status(200).json(createUser);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível criar um usuário" })
    }
  }


}

module.exports = UsersController