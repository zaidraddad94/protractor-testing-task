let selectors = function () {
    this.searchResult = $(' tr:nth-child(2) > td:nth-child(1) > a')
    this.asteroidDiameter = $(' div:nth-child(1) > table > tbody > tr:nth-child(2) > td')

};

module.exports = selectors;
