const { Product } = require('../models');

const create = async(req, res) => {
    const { name, qty, price } = req.body;

    const product = new Product({ name, qty, price });
    await product.save();

    res.send({ message: `Producto ${product.name} agregado correctamente` });
}

const update = async(req, res) => {
    const { name, qty, price } = req.body;
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, { name, qty, price }, { new: true });

    res.send({ message: `Producto ${product.name} actualizado correctamente`, product });
}

module.exports = {
    create,
    update
}