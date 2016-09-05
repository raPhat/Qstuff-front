import { QstuffClientPage } from './app.po';

describe('qstuff-client App', function() {
  let page: QstuffClientPage;

  beforeEach(() => {
    page = new QstuffClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
