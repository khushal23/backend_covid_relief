const Country = require('../models/countries');
const State = require('../models/states');

module.exports = {
    

    addStates() {

        let newArray = []

        for (let i = 0; i < states.length; i++) {
            const element = states[i];
            newArray.push({
                name: element.name,
                countryCode: element.country_code,
                stateCode: element.state_code,
                temp_country_id: element.country_id,
                temp_id: element.id,
                temp_state_id:element.state_id,
                latitude: element.latitude,
                longitude: element.longitude,

            })
        }

        for(let i=0 ; i<city.length; i++) {
            for(j=0; j<countries.length; j++) {
                if(countries[j].temp_id == city[i].temp_country_id) {

                    db.cities.update(
                        { _id: city[i]._id},
                        { "$set": { countryId: countries[j]._id } }
                    )
                    break;
                }
            }   
        }

        console.log('countries', newArray[0]);


        return City.insertMany(newArray);
    },

    getCountries(request) {
        return Country.find(request)
    },

    getStates(request) {
        return State.find(request)
    }
}


