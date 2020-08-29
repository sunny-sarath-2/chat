const messages = require("../models/messages.model");

exports.getUserMessages = (reciver_id, sender_id) => {
  return messages
    .find({
      $or: [
        {
          $and: [
            { reciver_id: reciver_id },
            {
              sender_id: sender_id,
            },
          ],
        },
        { $and: [{ sender_id: reciver_id }, { reciver_id: sender_id }] },
      ],
    })
    .sort({ created_date: 1 });
};

exports.saveMessages = (message) => {
  let newMessage = new messages(message);
  return newMessage.save();
};

exports.deleteMessage = (userId) => {
  return messages.deleteMany({
    sender_id: userId,
  });
};
