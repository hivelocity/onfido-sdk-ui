import BasePage from './BasePage.js'
import { verifyElementCopy } from '../utils/mochaw'

class PoaGuidance extends BasePage {
  get poaGuidanceSubtitle() { return this.$('.velocity-sdk-ui-ProofOfAddress-Guidance-subTitle')}
  get makeSure() { return this.$('.velocity-sdk-ui-ProofOfAddress-Guidance-makeSure')}
  get logoText() { return this.$('.velocity-sdk-ui-ProofOfAddress-Guidance-label:nth-child(7)')}
  get fullNameText() { return this.$('.velocity-sdk-ui-ProofOfAddress-Guidance-label:nth-child(1)')}
  get currentText() { return this.$('.velocity-sdk-ui-ProofOfAddress-Guidance-label:nth-child(2)')}
  get addressText() { return this.$('.velocity-sdk-ui-ProofOfAddress-Guidance-label:nth-child(3)')}
  get issueDateText() { return this.$('.velocity-sdk-ui-ProofOfAddress-Guidance-label:nth-child(4)')}
  get summaryPeriodText() { return this.$('.velocity-sdk-ui-ProofOfAddress-Guidance-label:nth-child(6')}
  get continueButton() { return this.$('.velocity-sdk-ui-Button-button-text')}
  get backButton() { return this.$('.velocity-sdk-ui-NavigationBar-iconBack')}
  get utilityBillIcon() { return this.$('.velocity-sdk-ui-DocumentSelector-icon-utility-bill')}
  get councilTaxLetterIcon() { return this.$('li:nth-child(3) .velocity-sdk-ui-DocumentSelector-icon')}
  get benefitsLetterIcon() { return this.$('li:nth-child(4) .velocity-sdk-ui-DocumentSelector-icon')}

  async verifyCopiesOnPoADocumentsGuidanceScreen(copy, docType) {
    const poaGudanceTitleStrings = copy['capture'][docType]['front']
    const poaGudanceStrings = copy.proof_of_address.guidance
    verifyElementCopy(this.title(), poaGudanceTitleStrings['title'])
    verifyElementCopy(this.makeSure, poaGudanceStrings.make_sure_it_shows)
    verifyElementCopy(this.logoText, poaGudanceStrings.logo)
    verifyElementCopy(this.continueButton, poaGudanceStrings.continue)
  }

  async verifyTextOfTheElementsForPoADocumentsGuidance(months) {
    verifyElementCopy(this.poaGuidanceSubtitle, `Must be issued in the last ${months} months`)
    verifyElementCopy(this.fullNameText, 'Full name')
    verifyElementCopy(this.currentText, 'Current')
    verifyElementCopy(this.addressText, 'Address')
    verifyElementCopy(this.issueDateText, 'Issue date or')
    verifyElementCopy(this.summaryPeriodText, 'Summary period')
  }

  async clickOnContinueButton() {
    this.continueButton.click()
  }
}

export default PoaGuidance;
