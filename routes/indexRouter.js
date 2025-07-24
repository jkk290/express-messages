const { Router } = require('express');

const indexRouter = Router();
const messages = [
    {
        id: 1,
        text: 'Hi There!',
        user: 'Amanda',
        added: new Date()
    },
    {
        id: 2,
        text: 'Hello world!',
        user: 'Charles',
        added: new Date()
    }
];
let count = 3;
const getIndex = (id) => {
    return messages.findIndex((message) => message.id === id );
};

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
});
indexRouter.get('/new', (req, res) => {
    res.render('newMessage');
});
indexRouter.get('/:messageId', (req, res) => {
    const id = parseInt(req.params.messageId);
    const index = getIndex(id);
    res.render('message.ejs', { message: messages[index] });
});
indexRouter.post('/new', (req, res) => {
    messages.push({ id: count, text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    count += 1;
    res.redirect('/');
});

module.exports = indexRouter;