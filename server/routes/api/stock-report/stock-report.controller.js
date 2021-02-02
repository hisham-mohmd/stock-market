const { uri } = require('../../../config/config');
const axios = require('axios');
exports.getSymbolData = async (req, res) => {
    try {
        let symbol = req.params.symbol;
        let data = await axios.get(uri, {
            params: {
                function: 'OVERVIEW',
                symbol: symbol,
                apikey: 'CUJAJTOBSVMOWAHP'
            }
        });
        res.status(200).send(data.data)
    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        });
    }
}
