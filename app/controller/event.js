const {  postDataSensor, gatDataEvent } = require("../../config/mysql")

const getData =  ({req, res}) => {
    gatDataEvent({req,res})
}
const postData = (req,res) => {
    postDataSensor({req,res})
}


module.exports = {getData, postData}