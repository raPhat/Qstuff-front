export class QstuffClientPage {
    navigateTo() {
        return browser.get('/');
    }

    getImageSRC() {

        var item = protractor.promise.defer();
        browser.wait(function() {
            return element(by.id('logo')).getAttribute('src').then(function(value) {
                var result = value !== '';
                if (result) {
                    item.fulfill(value);
                }
                return result;
            });
        });
        return item.promise;

        // return element(by.css('header#header #logo')).getAttribute("src");
    }

    getStoryList() {
        return element.all(by.css('card-story .content-story .title'));
    }
}
