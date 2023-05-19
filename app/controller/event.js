const { gatDataEvent, postDataEvent } = require("../../config/mysql");

const getData = ({ req, res }) => {
  gatDataEvent({ req, res });
};
const postData = (req, res) => {
  postDataEvent({ req, res });
};

module.exports = { getData, postData };
