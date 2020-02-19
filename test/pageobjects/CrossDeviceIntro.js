import BasePage from './BasePage.js'
import { verifyElementCopy } from '../utils/mochaw'

class CrossDeviceIntro extends BasePage {
  get smsIcon() { return this.$('.velocity-sdk-ui-crossDevice-Intro-stageIcon-sms')}
  get takePhotosIcon() { return this.$('.velocity-sdk-ui-crossDevice-Intro-stageIcon-take-photos')}
  get returnToComputerIcon() { return this.$('.velocity-sdk-ui-crossDevice-Intro-stageIcon-return-to-computer')}
  get smsMessage() { return this.$('.velocity-sdk-ui-crossDevice-Intro-stageMessage-sms')}
  get takePhotosMessage() { return this.$('.velocity-sdk-ui-crossDevice-Intro-stageMessage-take-photos')}
  get returnToComputerMessage() { return this.$('.velocity-sdk-ui-crossDevice-Intro-stageMessage-return-to-computer')}
  get continueButton() { return this.$('.velocity-sdk-ui-Button-button')}

  async verifyTitle(copy) {
    const crossDeviceIntroStrings = copy.cross_device.intro
    verifyElementCopy(this.title(), crossDeviceIntroStrings.title)
  }

  async verifySubTitle(copy) {
    const crossDeviceIntroStrings = copy.cross_device.intro
    verifyElementCopy(this.subtitle, crossDeviceIntroStrings.sub_title)
  }

  async verifyIcons() {
    this.smsIcon.isDisplayed()
    this.takePhotosIcon.isDisplayed()
    this.returnToComputerIcon.isDisplayed()
  }

  async verifyMessages(copy) {
    const crossDeviceIntroStrings = copy.cross_device.intro
    verifyElementCopy(this.smsMessage, crossDeviceIntroStrings.description_li_1)
    verifyElementCopy(this.takePhotosMessage, crossDeviceIntroStrings.description_li_2)
    verifyElementCopy(this.returnToComputerMessage, crossDeviceIntroStrings.description_li_3)
  }
}

export default CrossDeviceIntro;
