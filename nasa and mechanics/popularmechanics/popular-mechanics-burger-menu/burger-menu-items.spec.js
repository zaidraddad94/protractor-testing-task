const BurgerMenuItems = require('./burger-menu-items.selectors');
let listItems = require('../burger-menu-items.data/burger-menu-items.data')
describe(`Popular mechanics burger menu items`, () => {
    let burgerMenuItems = new BurgerMenuItems();
    listItems.forEach((item) => {
        it(`should open ${item.name} when its clicked`, async () => {
            browser.get(`/#sidepanel`);
            browser.wait(EC.visibilityOf(burgerMenuItems.itemButtonById(item.id)), DEFAULT_WAITING_TIME);
            browser.wait(EC.elementToBeClickable(burgerMenuItems.itemButtonById(item.id)), DEFAULT_WAITING_TIME);
            let urlFromA_Tag = await burgerMenuItems.itemButtonById(item.id).getAttribute('href');
            burgerMenuItems.itemButtonById(item.id).click();
            browser.wait(async () => {
                var currentUrl = await browser.getCurrentUrl();
                return currentUrl != POPULAR_MECHANICS_URL;
            }, DEFAULT_WAITING_TIME);
            expect(browser.getCurrentUrl()).toEqual(urlFromA_Tag);
        });
     });
});
