const {
  getUserMessages,
  deleteMessage,
} = require("../services/messages.services");
const { outputFormat } = require("../common/common");

exports.getUserMessages = async (req, res) => {
  res
    .status(200)
    .json(
      outputFormat(
        await getUserMessages(req.body.reciver_id, req.body.sender_id),
        "all messages",
        200,
        null
      )
    );
};

exports.deleteMessages = async (req, res) => {
  res
    .status(200)
    .json(
      outputFormat(
        await deleteMessage(req.body.sender_id),
        "messages deleted",
        200,
        null
      )
    );
};
