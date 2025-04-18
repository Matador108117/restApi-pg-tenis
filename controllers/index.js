const models = require('../database/models');
const createSneaker = async (req, res) => {
    console.log('creating Sneaker');
    try {
        const sneaker = await models.Sneaker.create(req.body);

        return res.status(201).json({ sneaker });
    }
    catch (error) {
        return res.status(500).send(error.message);
    }

};

const getAllSneakers = async (req, res) => {
    console.log('getting Sneakers');
    try {
        const sneakers = await models.Sneaker.findAll({
            include: []
        });
        return res.status(200).json({ sneakers });
    }
    catch (error) {
        return res.status(500).send(error.message);
    }

};
const getSneakerById = async (req, res) => {
    try {
        const sneaker = await models.Sneaker.findOne({ where: { id: req.params.id } });
        if (sneaker) {
            return res.status(200).json({ sneaker });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }

}
const deleteSneaker = async (req, res) => {
    console.log('deteling Sneaker...')
    try {
        const sneaker = await models.Sneaker.findOne({ where: { id: req.params.id } })
        if (sneaker){
            await sneaker.destroy();
            return res.status(200).json({ message: 'Sneaker deleted' });
        }else {
            return res.status(500).json({ message: 'Sneaker not found' });
        }
    } catch (error) {

    }
}
const updateSneaker = async (req, res) => {
    console.log('updating user...');

    try {
            const sneaker = await models.Sneaker.findOne({ where: { id: req.params.id } });
            if (sneaker) {
                    console.log(sneaker);
                    sneaker.name = req.body.name; 
                    sneaker.price  = req.body.price;
                    sneaker.description = req.body.description;
                    sneaker.brand = req.body.brand;
                    sneaker.size = req.body.size;
                    sneaker.image = req.body.image;
                    await sneaker.save();
            }
            else {
                    return res.status(200).json({ "error ": req.params.id + " no existe" });
            }

            return res.status(200).json({ "updated ": sneaker });
    }
    catch (error) {
            return res.status(500).send({ error: error.message });
    }

}
module.exports = {
    createSneaker,
    getAllSneakers,
    getSneakerById,
    deleteSneaker,
    updateSneaker
};