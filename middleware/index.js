const path = require('path');

const renderFile = (req, res, next) => {
  res.renderFile = (name) => {
    const filePath = path.join(__dirname, `../files/${name}.html`);
    res.sendFile(filePath);
  };
  next();
};

module.exports = { renderFile };