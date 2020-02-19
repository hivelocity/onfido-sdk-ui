import { locale } from '../utils/mochaw'

class BasePage {
  constructor(driver, $, waitAndFind, clickWhenClickable) {
    this.$ = $
    this.driver = driver
    this.waitAndFind = waitAndFind
    this.clickWhenClickable = clickWhenClickable
  }

  async title() { return this.waitAndFind('.velocity-sdk-ui-PageTitle-titleSpan')}
  get subtitle() { return this.$('.velocity-sdk-ui-PageTitle-subTitle')}
  get backArrow() { return this.$('.velocity-sdk-ui-NavigationBar-iconBack')}

  copy(lang) { return locale(lang) }

  async clickBackArrow() {
    this.backArrow.click()
  }
}

export default BasePage
