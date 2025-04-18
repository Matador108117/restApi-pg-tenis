const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();
router.get('/', (req, res) => res.send('Welcome'))
router.get('/sneakers', controllers.getAllSneakers);
router.get('/sneakers/:id', controllers.getSneakerById);
router.post('/sneakers', controllers.createSneaker);
router.delete('/sneakers/:id', controllers.deleteSneaker); 
router.put('/sneakers/:id', controllers.updateSneaker);

module.exports = router;