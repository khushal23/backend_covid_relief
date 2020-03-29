const areaService = require('../services/areas');
const responseService = require('../common/response');
const helperService = require('../common/helper');

module.exports = {

    async getCountriesList(req, res) {

        try {
            
            let countries = await areaService.getCountries({});
            res.send(responseService.success({countries}));

        } catch (error) {
            res.status(error.code || 500).send(responseService.failure(error));
        }

    },

    async getStatesList(req, res) {

        try {

            let countryId = req.query.countryId;
            if(!countryId) throw new Error('Country ID is required')

            if (!helperService.isValidMongoId(countryId)) throw new Error('Invalid Country ID')
            
            let states = await areaService.getStates({countryId: countryId});
            res.send(responseService.success({states}));

        } catch (error) {
            res.status(error.code || 500).send(responseService.failure(error));
        }

    },

    async getCitiesList(req, res) {

        try {

            let stateId = req.query.stateId;
            if(!stateId) throw new Error('State ID is required')

            if (!helperService.isValidMongoId(stateId)) throw new Error('Invalid State ID')

            
            let cities = await areaService.getStates({stateId: stateId});
            res.send(responseService.success({cities}));

        } catch (error) {
            res.status(error.code || 500).send(responseService.failure(error));
        }

    },

    async addCountryList(req, res) {

        try {
            
            let res = await areaService.addStates();
            res.send(res);

        } catch (error) {
            res.send(error)
        }
    }
}