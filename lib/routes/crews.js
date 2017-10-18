const Router = require('express').Router;
const router = Router();

router
    .get('/', (req, res) => {
        res.send([
            { name: 'Lego Pirates'},
            { name: ' Royal Armada'}]
        );
    })

    .get('/:id', (req, res) =>{
        res.send({ name: 'Lego Pirates'});
    })

    .post('/', (req, res) =>{
        res.send(req.body);
    })
    
    .delete('/:id', (req, res) =>{
        res.send({ removed: true});     
    });

module.exports = router;