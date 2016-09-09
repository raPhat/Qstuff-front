import { QstuffClientPage } from './app.po';

describe('qstuff-client App', function() {
  let page: QstuffClientPage;

  beforeEach(() => {
    page = new QstuffClientPage();
  });

  it('AT0000_01 should has LOGO SRC', () => {
    page.navigateTo();
    expect(page.getImageSRC()).toEqual('http://localhost:4600/images/header/LOGO_BD.svg');
  });

  it('AT0000_02 should display a list of stories.', () => {
    page.navigateTo();
    page.getStoryList()
      .then(items => {
        expect(items.length).toEqual(3);
        expect(items[0].getText()).toContain('PERFUME: เสาวธาร');
        expect(items[1].getText()).toContain('PERFUME: เสาวธาร');
        expect(items[2].getText()).toEqual('');
      });
  });
});
