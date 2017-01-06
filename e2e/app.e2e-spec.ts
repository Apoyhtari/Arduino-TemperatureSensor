import { TempReaderPage } from './app.po';

describe('temp-reader App', function() {
  let page: TempReaderPage;

  beforeEach(() => {
    page = new TempReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
