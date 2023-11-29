window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.UserControl = window.blockly.js.blockly.UserControl || {};

/**
 * @function singUp
 *
 *
 *
 * @param signupUsername
 * @param signupEmail
 * @param signupPassword
 * @param signupConfirmPassword
 *
 * @author Tccunip
 * @since 28/11/2023, 11:30:45
 *
 */
window.blockly.js.blockly.UserControl.singUpArgs = [{ description: 'signupUsername', id: 'fd9b614a' }, { description: 'signupEmail', id: 'c0c8b616' }, { description: 'signupPassword', id: 'f02ce619' }, { description: 'signupConfirmPassword', id: '4c9bb8d8' }];
window.blockly.js.blockly.UserControl.singUp = async function(signupUsername, signupEmail, signupPassword, signupConfirmPassword) {
 var singupUsername, singupPassword, singupConfirmPassword, singupEmail;
  //
  (await this.cronapi.client('cronapi.authentication.signup').run(singupUsername, singupEmail, singupPassword, singupConfirmPassword));
}

/**
 * @function resetPassword
 *
 *
 *
 * @param email
 *
 * @author Tccunip
 * @since 28/11/2023, 11:30:45
 *
 */
window.blockly.js.blockly.UserControl.resetPasswordArgs = [{ description: 'email', id: 'd3689b27' }];
window.blockly.js.blockly.UserControl.resetPassword = async function(email) {
 var signupUsername, signupEmail, signupPassword, signupConfirmPassword, singupUsername, singupPassword, singupConfirmPassword;
  //
  this.cronapi.authentication.resetPasswordWithOTP(email);
}

/**
 * @function isValidSignup
 *
 *
 *
 *
 * @author Tccunip
 * @since 28/11/2023, 11:30:45
 *
 */
window.blockly.js.blockly.UserControl.isValidSignupArgs = [];
window.blockly.js.blockly.UserControl.isValidSignup = async function() {
 var signupUsername, signupEmail, signupPassword, signupConfirmPassword, singupUsername, singupPassword, singupConfirmPassword, singupEmail;
  return this.cronapi.authentication.isValidSignup(singupUsername, singupEmail, singupPassword, singupConfirmPassword);
}
