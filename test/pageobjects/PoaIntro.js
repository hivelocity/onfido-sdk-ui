import BasePage from './BasePage.js'
import { verifyElementCopy } from '../utils/mochaw'

class PoaIntro extends BasePage {
  get requirementsHeader() { return this.$('.velocity-sdk-ui-ProofOfAddress-PoAIntro-requirements')}
  get firstRequirement() { return this.$('.velocity-sdk-ui-ProofOfAddress-PoAIntro-requirement:nth-child(2) > span')}
  get secondRequirement() { return this.$('.velocity-sdk-ui-ProofOfAddress-PoAIntro-requirement:nth-child(3) > span')}
  get thirdRequirement() { return this.$('.velocity-sdk-ui-ProofOfAddress-PoAIntro-requirement:nth-child(4) > span')}
  get startVerificationButton() { return this.$('.velocity-sdk-ui-Button-button-text')}

  async verifyTitle(copy) {
    verifyElementCopy(this.title(), copy)
  }

  async verifyRequirementsHeader(copy) {
    const poaIntroStrings = copy.proof_of_address
    verifyElementCopy(this.requirementsHeader, poaIntroStrings.intro.requirements)
  }

  async verifyFirstRequirement(copy) {
    verifyElementCopy(this.firstRequirement, copy)
  }

  async verifySecondRequirement(copy) {
    verifyElementCopy(this.secondRequirement, copy)
  }

  async verifyThirdRequirement(copy) {
    verifyElementCopy(this.thirdRequirement, copy)
  }

  async verifyStartVerificationButton(copy) {
    const poaIntroStrings = copy.proof_of_address
    verifyElementCopy(this.startVerificationButton, poaIntroStrings.intro.start)
  }

  async clickStartVerificationButton() {
    this.startVerificationButton.click()
  }
}

export default PoaIntro;
