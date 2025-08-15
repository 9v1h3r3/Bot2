module.exports.run = async function({ api, event }) {
  api.sendMessage("ID of this thread: "+event.threadID, event.threadID, event.messageID);
};
