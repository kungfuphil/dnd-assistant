import { DndAssistantPage } from './app.po';

describe('dnd-assistant App', () => {
  let page: DndAssistantPage;

  beforeEach(() => {
    page = new DndAssistantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
