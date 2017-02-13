import { AnotePage1Page } from './app.po';

describe('anote-page1 App', function() {
  let page: AnotePage1Page;

  beforeEach(() => {
    page = new AnotePage1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
