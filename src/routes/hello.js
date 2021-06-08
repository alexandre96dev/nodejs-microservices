const router = require('express').Router();

router.route('/').get((req,res) => {
    msg = 'Ola Mundo';
    res.json({msg})
})

router.route('/:lang').get((req, res) => {
    switch (req.params.lang) {
        case "pt":
            msg = "Olá mundo"
            break;
        case "en":
            msg = "Hello World"
            break;
        
    }
    res.json({msg})
});

router.route('/').post((req,res) => {
    msg = 'Ola ' + req.body.name;
    res.json({msg})
})


module.exports = router;