import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/404');
  }

  getParagraphText() {
    return element(by.css('app-root p')).getText();
  }
}
