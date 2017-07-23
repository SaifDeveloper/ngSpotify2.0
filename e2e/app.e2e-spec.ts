import { Spotify2.0Page } from './app.po';

describe('spotify2.0 App', () => {
  let page: Spotify2.0Page;

  beforeEach(() => {
    page = new Spotify2.0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
