let burgerMenuItems = function () {
    this.itemButtonById = (id) => {
        return $(`#sidepanel > ul > li:nth-child(${id}) > a`)
    }
}
module.exports = burgerMenuItems;
