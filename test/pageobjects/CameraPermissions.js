import BasePage from './BasePage.js'
import { verifyElementCopy } from '../utils/mochaw'

class CameraPermissions extends BasePage {
  get instructions() { return this.$('.velocity-sdk-ui-CameraPermissions-Primer-instructions')}
  get graphic() { return this.$('.velocity-sdk-ui-CameraPermissions-Primer-graphic')}
  get enableCameraButton() { return this.$('.velocity-sdk-ui-Button-button-text')}

  async verifyUIElementsOnTheCameraPermissionsScreen(copy) {
    const cameraPermissionsStrings = copy.webcam_permissions
    this.driver.sleep(500)
    verifyElementCopy(this.title(), cameraPermissionsStrings.allow_access)
    verifyElementCopy(this.subtitle, cameraPermissionsStrings.enable_webcam_for_selfie)
    verifyElementCopy(this.instructions, cameraPermissionsStrings.click_allow)
    verifyElementCopy(this.enableCameraButton, cameraPermissionsStrings.enable_webcam)
    this.graphic.isDisplayed()
  }

  async clickOnEnableCameraButton() {
    this.enableCameraButton.click()
  }
}

export default CameraPermissions;
