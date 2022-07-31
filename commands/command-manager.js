const uploadImageCommand = require('./image-hosting/upload-image');

function execute(bot, msg) {
  if (msg.attachments.size > 0) {
    uploadImageCommand.handle(bot, msg);
  }
}

module.exports = {
  execute
};