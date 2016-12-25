import { PlexCalculatorPage } from './app.po';

describe('plex-calculator App', function() {
  let page: PlexCalculatorPage;

  beforeEach(() => {
    page = new PlexCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
