const promiseResolver = require('@Utils/promise-resolver.js');
const Message = require('./message-model.js');

const messageController = {
  async index(req, res) {
    const { page, limit, sort } = req.query;
    const DATA_LIMIT = 10;

    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : DATA_LIMIT;
    const sortKey = sort || '-createdAt';

    const queryFilter = {};
    const queryOptions = {
      page: pageNum,
      limit: limitNum,
      sort: sortKey,
    };

    const [data, error] = await promiseResolver(
      Message.paginate(queryFilter, queryOptions),
    );

    return res.json(data);
  },
  async show(req, res) {
    const { id } = req.params;

    const [message, error] = await promiseResolver(Message.findById(id));

    if (message === null) {
      return res.json({
        status: 'error',
        message: `No message found with ID ${id}.`,
      });
    }

    const result = {
      status: 'ok',
      data: message,
    };

    return res.json(result);
  },
  async create(req, res) {
    const { message } = req.body;

    const [createdMessage, error] = await promiseResolver(
      Message.create(message),
    );

    if (error) {
      const errorResponse = {
        status: 'error',
        error,
      };

      return res.json(errorResponse);
    }

    const result = {
      status: 'ok',
      data: createdMessage,
    };

    return res.json(result);
  },
  async delete(req, res) {
    const { id } = req.params;

    const [deletedMessage, error] = await promiseResolver(
      Message.findByIdAndDelete(id),
    );

    if (deletedMessage === null) {
      return res.json({
        status: 'error',
        message: 'No data found.',
      });
    }

    return res.json({
      status: 'ok',
    });
  },
  async changeReadStatus(req, res) {
    const { id } = req.params;

    const updateParams = {
      status: 'read',
    };

    const [updatedMessage, error] = await promiseResolver(
      Message.findByIdAndUpdate(id, updateParams),
    );

    if (updatedMessage === null) {
      return res.json({
        status: 'error',
        message: `No message found with ID ${id}`,
      });
    }

    const result = {
      status: 'ok',
      data: updatedMessage,
    };

    return res.json(result);
  },
};

module.exports = messageController;
