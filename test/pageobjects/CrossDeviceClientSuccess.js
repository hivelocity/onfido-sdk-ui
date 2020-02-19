import BasePage from './BasePage.js'
import { verifyElementCopy } from '../utils/mochaw'

class CrossDeviceClientSuccess extends BasePage {
  get icon() { return this.$('.velocity-sdk-ui-Theme-icon')}
  get fewSecondsToUpdateMessage() { return this.$('.velocity-sdk-ui-crossDevice-ClientSuccess-text')}

  async verifyUIElements(copy) {
    const crossDeviceClientSuccessStrings = copy.cross_device.client_success
    verifyElementCopy(this.title(), crossDeviceClientSuccessStrings.title)
    verifyElementCopy(this.subtitle, crossDeviceClientSuccessStrings.sub_title)
    this.icon.isDisplayed()
    verifyElementCopy(this.fewSecondsToUpdateMessage, crossDeviceClientSuccessStrings.body)
  }
}

export default CrossDeviceClientSuccess;
