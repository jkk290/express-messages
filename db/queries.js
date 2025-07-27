const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function getMessage(id) {
    const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
    if (rows.length > 0) {
        const message = rows[0];
        return message;
    } else {
        console.log('No message found')
    }
}

async function insertMessage(message) {
    await pool.query('INSERT INTO messages (text, "user", added) VALUES ($1, $2, $3)', [message.text, message.user, message.added]);   
}

module.exports = {
    getAllMessages,
    getMessage,
    insertMessage
};