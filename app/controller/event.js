const {
  gatDataEvent,
  postDataEvent,
  deleteDataEvent,
} = require("../../config/mysql");

const getData = ({ req, res }) => {
  gatDataEvent({ req, res });
};
const postData = (req, res) => {
  postDataEvent({ req, res });
};

const deleteData = (req, res) => {
  deleteDataEvent({ req, res });
};

module.exports = { getData, postData,deleteData };
