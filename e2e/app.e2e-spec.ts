import { MastermindSportsTaskPage } from './app.po';

describe('mastermind-sports-task App', () => {
  let page: MastermindSportsTaskPage;

  beforeEach(() => {
    page = new MastermindSportsTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
