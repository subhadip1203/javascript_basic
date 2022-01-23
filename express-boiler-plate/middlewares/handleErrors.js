const { GeneralError } = require('../utils/error');

// eslint-disable-next-line no-unused-vars
const handleErrors = (err, _req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message,
  });
};

module.exports = handleErrors;
