const { Router } = require('express');
const db = require('../db/queries');

const indexRouter = Router();

indexRouter.get('/', async (req, res) => {
    const messages = await db.getAllMessages();
    console.log('All messages: ', messages);
    res.render('index', {
        title: 'Mini Messageboard',
        messages: messages,
    });
});

indexRouter.get('/new', (req, res) => {
    res.render('newMessage');
});

indexRouter.get('/:messageId', async (req, res) => {
    const id = parseInt(req.params.messageId);
    const message = await db.getMessage(id);
    console.log('Getting message: ', message);
    res.render('message', { message: message });
});

indexRouter.post('/new', async (req, res) => {
    const message = {text: req.body.messageText, user: req.body.messageUser, added: new Date().toISOString()};
    console.log('Adding message: ', message);
    await db.insertMessage(message);
    res.redirect('/');
});

module.exports = indexRouter;