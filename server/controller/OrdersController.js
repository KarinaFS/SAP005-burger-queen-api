const models = require("../db/models")

class OrdersController {
  static async getAllOrders(req, res) {
    try {
      const getOrders = await models.Orders.findAll({
        include: [{
          model: models.Products,
          as: 'products',
          required: false,
          attributes: [
            'id',
            'name',
            'price',
            'flavor',
            'complement',
            'type',
            'subType'
          ],
          through: {
            model: models.ProductsOrders,
            as: 'qtd',
            attributes: ['qtd']
          }
        },
        {
          model: models.User,
          required: false,
          attributes: ['userName', 'id']
        }
      ]
      })
      return res.status(200).json(getOrders);
    } catch (error) {
      return res.status(400).json({ error: "Orders not found" });
    }
  }

  static async getOrderById(req, res) {
    try {
      const orderId = await models.Orders.findAll({
        where: { id: req.params.orderId },
        include: [{
          model: models.Products,
          as: 'products',
          required: false,
          attributes: [
            'id',
            'name',
            'price',
            'flavor',
            'complement',
            'type',
            'subType'
          ],
          through: {
            model: models.ProductsOrders,
            as: 'qtd',
            attributes: ['qtd']
          }
        },
        {
          model: models.User,
          required: false,
          attributes: ['userName', 'id']
        }
      ]
      });
      return res.status(200).json(orderId);
    } catch (error) {
      return res.status(400).json({ error: "Order not found" });
    }
  }

  static async createOrder(req, res) {
    try {
      const createdOrder = await models.Orders.create(req.body);
      req.body.Products.map(async (item) => {
        const findProduct = await models.Products.findByPk(item.productId);
        if (!findProduct) {
          return res.status(400).json("Product not found");
        }
        const productOrder = {
          orderId: createdOrder.id,
          productId: item.productId,
          qtd: item.qtd
        }
        await models.ProductsOrders.create(productOrder);
      })
      return res.status(201).json(createdOrder);
    } catch (error) {
      return res.status(400).json({ error: "Could not create order" });
    }
  }

  static async updateOrder(req, res) {
    const { updateOrder } = req.body;
    try {
      await models.Orders.update({ updateOrder }, {
      where: {id: req.params.orderId}
      });
      return res.status(200).json({ message: "Orders updated sucessfully" });
    } catch (error) {
      return res.status(400).json({ error: "Could not create order" });
    }
  }

  static async deleteOrder (req, res) {
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