import BasePage from './BasePage.js'

class Camera extends BasePage {
  async continueButton () { return this.waitAndFind('.velocity-sdk-ui-Button-button-primary')}
  async shutterButton() { return this.waitAndFind('.velocity-sdk-ui-Photo-btn')}
  async recordButton() { return this.waitAndFind('.velocity-sdk-ui-Video-startRecording')}
  async stopButton() { return this.waitAndFind('.velocity-sdk-ui-Video-stopRecording') }
  async warningMessage() { return this.waitAndFind('.velocity-sdk-ui-Error-container-warning') }
  get faceOverlay() { return this.$('[data-onfido-qa="faceOverlay"]') }

  async takeSelfie() {
    const btn = this.shutterButton()
    // give some time for the stream to have a face
    this.driver.sleep(1000)
    this.clickWhenClickable(btn)
  }

  async isOverlayPresent() {
    const cameraClasses = this.faceOverlay.getAttribute("class").split(" ")
    return cameraClasses.includes('velocity-sdk-ui-Overlay-isWithoutHole')
  }

  async recordVideo() {
    this.clickWhenClickable(this.continueButton())
    this.clickWhenClickable(this.recordButton())
  }

  async completeChallenges() {
    this.clickWhenClickable(this.continueButton())
    this.clickWhenClickable(this.stopButton())
  }
}

export default Camera
