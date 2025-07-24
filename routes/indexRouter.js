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
indexRouter.get('/new', (req, res) => {
    res.render('newMessage');
});
indexRouter.post('/new', (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect('/');
});

module.exports = indexRouter;