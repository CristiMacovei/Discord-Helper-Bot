const axios = require('axios');

async function handle(bot, msg) {
  const url = msg.attachments.first().url;
  const type = msg.attachments.first().contentType;

  const response = await axios.post(process.env.IMG_UPLOAD_URL, {
    url,
    type
  })
  
  if (response.data.status === 'success') {
    await msg.reply(`Successfully uploaded as ${response.data.url}`);
  }
  else {
    await msg.reply(`Something went wrong: ${response.error.message}`);
  }
}

module.exports = {
  handle
}