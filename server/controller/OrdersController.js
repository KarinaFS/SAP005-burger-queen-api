const models = require("../db/models")

class OrdersController {
  static async getAllOrders(req, res) {
    try {
      const getOrders = await models.Orders.findAll()
      return res.status(200).json(getOrders);
    } catch (error) {
      return res.status(400).json({ error: "Orders not found" });
    }
  }

  static async getOrderById(req, res) {
    try {
      const orderId = await models.Orders.findAll({
        where: { id: req.params.orderId }
      });
      return res.status(200).json(orderId);
    } catch (error) {
      return res.status(400).json({ error: "Order not found" });
    }
  }

  static async createOrder(req, res) {
    try {
      const postOrder = await models.Orders.create({
        userId: req.body.userId,
        client_name: req.body.client_name,
        table: req.body.table,
        status: req.body.status
      })
      const productOrder = await models.ProductsOrders.create({
        orderId: postOrder.id,
        productId: req.body.productId,
        qtd: req.body.qtd
      })
      return res.status(201).json({ postOrder, productOrder });
    } catch (error) {
      return res.status(400).json({ error: "Could not create order" });
    }
  }

  static async updateOrder(req, res) {
    const putOrder = req.body;
    try {
      await models.Orders.update(putOrder, {
        where: { id: req.params.orderId }
      });
      return res.status(200).json({ message: "Orders updated sucessfully" });
    } catch (error) {
      return res.status(400).json({ error: "Could not create order" });
    }
  }

  static async deleteOrder(req, res) {
    try {
      const destroyOrder = await models.Orders.destroy({
        where: {
          id: req.params.orderId
        }
      });
      return res.status(200).json(destroyOrder);
    } catch (error) {
      return res.status(400).json({ error: "It was not possible to delete the order" });
    }
  }
}

module.exports = OrdersController