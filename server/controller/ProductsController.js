const models = require("../db/models")

class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const getProducts = await models.Products.findAll()
      return res.status(200).json(getProducts);
    } catch (error) {
      return res.status(400).json({ error: "Products not found" });
    }
  }

  static async getProductById(req, res) {
    try {
      const productId = await models.Products.findAll({
        where: {
          id: req.params.productId
        }
      });
      return res.status(200).json(productId);
    } catch (error) {
      return res.status(400).json({ error: "Product not found" });
    }
  }

  static async createProduct(req, res) {
    try {
      const { name, price, flavor, complement, image, type, sub_type } = req.body;
      const postProduct = await models.Products.create({
        name,
        price,
        flavor,
        complement,
        image,
        type, 
        sub_type,
        createdAt: new Date(),
        updateAt: new Date()
      })
      return res.status(201).json(postProduct);
    } catch (error) {
      return res.status(400).json({ error: "Could not create a product" });
    }
  }

  static async updateProduct(req, res) {
    try {
      const { name, price, flavor, complement, image, type, sub_type } = req.body;
      const putProduct = await models.Products.update({
        name,
        price,
        flavor,
        complement,
        image,
        type, 
        sub_type,
      },
        {
          where: {
            id: req.params.productId
          }
        }
      );
      return res.status(200).json(putProduct);
    } catch (error) {
      return res.status(400).json({ error: "The product could not be updated" });
    }
  }

  static async deleteProduct (req, res) {
    try {
      const destroyProduct = await models.Products.destroy({
        where: {
          id: req.params.productId
        }
      });
      return res.status(200).json(destroyProduct);
    } catch (error) {
      return res.status(400).json({ error: "It was not possible to delete the product" });
    }
  }
}

module.exports = ProductsController