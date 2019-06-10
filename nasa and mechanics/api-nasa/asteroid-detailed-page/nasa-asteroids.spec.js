const asteroidsUtility = require('../_services/asteroids.services')
const AsteroidPageSelectors = require('./asteroid-detailed-page.selectors')

const asteroidsList = require('../asteroid.data/asteroid.data')

asteroidsList.forEach((asteroid) => {

    describe(`Asteroid ${asteroid.name} `, () => {
        let nasaAsteroidDetails
        beforeAll(async () => {
            asteroidPageSelectors = new AsteroidPageSelectors()
            nasaAsteroidDetails = await asteroidsUtility.getAsteroidDetailsById(asteroid.id)
            browser.get(`search?asteroid=${asteroid.name}`);
            asteroidPageSelectors.searchResult.click();
        });

        it(`should have the status code of 200 for API call`, () => {
            expect(nasaAsteroidDetails.status).toEqual(200);
        });

        it(`should have same minimum diameter for page and API `, async () => {
            let diameter = await asteroidPageSelectors.asteroidDiameter.getText();
            let astroidAroundEarthDiameter = diameter.split(" ")[0]
            let nasaApiDiameter = nasaAsteroidDetails.data.estimated_diameter.meters.estimated_diameter_min.toFixed(2)
            expect(astroidAroundEarthDiameter).toEqual(nasaApiDiameter);
        });
    });
});
