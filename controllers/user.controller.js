const { User } = require('../models');

const create = async(req, res) => {
    const { name, age } = req.body;

    const user = new User({ name, age });
    await user.save();

    res.send({ message: `Usuario ${user.name} agregado correctamente`, user });
}

module.exports = {
    create
}