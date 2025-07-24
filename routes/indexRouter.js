const { Router } = require('express');

const indexRouter = Router();
const messages = [
    {
        text: 'Hi There!',
        user: 'Amanda',
        added: new Date()
    },
    {
        text: 'Hello world!',
        user: 'Charles',
        added: new Date()
    }
];

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = indexRouter;