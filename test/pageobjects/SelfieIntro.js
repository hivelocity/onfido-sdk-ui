import BasePage from './BasePage.js'
import { verifyElementCopy } from '../utils/mochaw'

class SelfieIntro extends BasePage {
  get selfieIcon() { return this.$('.velocity-sdk-ui-Photo-selfieIcon')}
  get glassesIcon() { return this.$('.velocity-sdk-ui-Photo-glassesIcon')}
  get continueButton() { return this.$('.velocity-sdk-ui-Button-button-text')}

  async verifyUIElementsOnTheSelfieIntroScreen(copy) {
    const introStrings = copy.capture.face.intro
    this.title().isDisplayed()
    verifyElementCopy(this.title(), introStrings.title)
    this.selfieIcon.isDisplayed()
    this.glassesIcon.isDisplayed()
    verifyElementCopy(this.continueButton, copy.continue)
  }
  async clickOnContinueButton() {
    this.continueButton.click()
  }
}

export default SelfieIntro;
