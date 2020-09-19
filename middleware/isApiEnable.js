const ApiSchema = require('../models/ApiSchema');

exports.isApiEnable = async (req, res, next) => {
  const data = await ApiSchema.find();
  const url = req.originalUrl;
  const extactedUrl = url.slice(
    0,
    -(req.params.id ? req.params.id.length + 1 : -req.originalUrl.length)
  );
  const isEnable = JSON.parse(
    JSON.stringify(data.filter((api) => api.apiPath === extactedUrl)[0])
  ).isEnabled;

  if (!isEnable) {
    return res.status(400).json({
      success: false,
      data: { error: 'Currently this API is disabled' },
    });
  }
  next();
};
