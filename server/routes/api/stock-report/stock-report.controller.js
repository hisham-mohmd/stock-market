const { uri } = require('../../../config/config');
const axios = require('axios');
exports.getCities = async (req, res) => {
    try {
        let data = await axios.get(uri, {
            params: {
                function: 'OVERVIEW',
                symbol: 'IBM',
                apikey: 'CUJAJTOBSVMOWAHP'
            }
        });
        console.log(data.data);
        res.status(200).send(data.data)
    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        });
    }
}