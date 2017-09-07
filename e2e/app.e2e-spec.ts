import { BrickByBrickPage } from './app.po';

describe('brick-by-brick App', () => {
  let page: BrickByBrickPage;

  beforeEach(() => {
    page = new BrickByBrickPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
