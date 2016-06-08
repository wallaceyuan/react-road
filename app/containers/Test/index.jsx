/** @jsx React.DOM */
var React         = require('react');
var httpReq       = require('./httpRequest');
var formValidator = require('./formValidator');
var ERRORS        = {
  FIRST_NAME_BLANK:  'First name is required.',
  LAST_NAME_BLANK:   'Last name is required.',
  MAIL_BLANK:        'email is required.',
  MAIL_INVAILD:      'Invalid Email address',
  MAIL_USED:         'Email has been occupied',
  PASS_BLANK:        'Passowrd is required.',
  PASS_INVALID:      'Please check the password length (8 to 32).',
  PASS_DONTMATCH:    'Entered passwords difference.'
};

module.exports = React.createClass({
  getInitialState: function() {
    return {
      processing: false,
      formError: {
        firstName:       { isBlank: false },
        lastName:        { isBlank: false },
        mail:            { isBlank: false, isInvalidFormat: false, isUsed: false },
        password:        { isBlank: false, isInvalidFormat: false },
        confirmPassword: { dontMatch: false }
      },
      userInfo: {
        firstName:        '',
        lastName:         '',
        mail:             '',
        password:         '',
        confirmPassword:  ''
      }
    };
  },
  validator: function(fieldName, value){
    var formError = this.state.formError;
    switch(fieldName) {
      case 'firstName':
        formError.firstName.isBlank = formValidator.isEmpty(value);
        break;
      case 'lastName':
        formError.lastName.isBlank = formValidator.isEmpty(value);
        break;
      case 'mail':
        formError.mail.isBlank = formValidator.isEmpty(value);
        formError.mail.isInvalidFormat = formValidator.isInvalidMail(value);
        break;
      case 'password':
        formError.password.isBlank = formValidator.isEmpty(value);
        formError.password.isInvalidFormat = formValidator.isInvalidPassword(value);
        break;
      case 'confirmPassword':
        formError.confirmPassword.dontMatch = (value !== this.state.userInfo.password);
        break;
    }
    return formError;
  },
  render: function() {
    var ft = this.props.footer || (
        <div>
           I already have an accounts,  <a href="/accounts/login">Login</a>
        </div>
        );
    return (
     <div>
       <h2>{ this.props.title || 'Sigup' }</h2>
       <div className="form-sigup">
         <form onSubmit={this.handleSubmit}>
         <div className="field field-name">
           <input placeholder="First name" value={this.state.userInfo.firstName} onChange={this.handleInputFirstName} />
           <input placeholder="Last name" value={this.state.userInfo.lastName} onChange={this.handleInputLastName} />
         </div>
         <div className="field-error">
         { this.state.formError.firstName.isBlank ? ERRORS.FIRST_NAME_BLANK : ''}
         { this.state.formError.lastName.isBlank ? ERRORS.LAST_NAME_BLANK : ''}
         </div>
         <div className="field">
           <input placeholder="Email" value={this.state.userInfo.mail} onChange={this.handleInputMail} />
         </div>
         <div className="field-error">
         { this.state.formError.mail.isBlank ? ERRORS.MAIL_BLANK : ''}
         { this.state.formError.mail.isInvalidFormat ? ERRORS.MAIL_INVAILD : ''}
         { this.state.formError.mail.isUsed ? ERRORS.MAIL_USED : ''}
         </div>
         <div className="field">
           <input type="password" placeholder="Password (8 to 32 characters)" value={this.state.userInfo.password} onChange={this.handleInputPassword} />
         </div>
         <div className="field-error">
         { this.state.formError.password.isBlank ? ERRORS.PASS_BLANK : ''}
         { this.state.formError.password.isInvalidFormat ? ERRORS.PASS_INVALID : ''}
         </div>
         <div className="field">
           <input type="password" placeholder="Confirm password" value={this.state.userInfo.confirmPassword} onChange={this.handleInputConfirmPassword} />
         </div>
         <div className="field-error">
         { this.state.formError.confirmPassword.dontMatch ? ERRORS.PASS_DONTMATCH : ''}
         </div>
         <div className="field-submit">
           <input type="submit" value="Sigup" />
         </div>
         </form>
         <div className="form-ft">{ft}</div>
       </div>
     </div>
   );
  },
  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.processing) return;
    var userInfo = this.state.userInfo;
    var formError;
    for (var field in userInfo) {
      if (userInfo.hasOwnProperty(field)) {
        formError = this.validator(field, userInfo[field]);
      }
    }
    this.setState({
      formError: formError
    });
    var hasError = false;
    (function _check(o) {
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          if (typeof o[i] == 'object') {
            _check(o[i]);
          } else if (o[i]) {
            hasError = true;
            break;
          }
        }
      }
    })(formError);
    if (hasError) {
      return;
    }
    this.setState({
      processing: true
    });
    httpReq('/accounts/sigup', this.state.userInfo, { method: 'post' })
      .then(
          function(e) {
            if (e.error) {
              var formError = this.state.formError;
              formError[e.error.errorField][e.error.errorType] = true;
              this.setState({ formError: formError, processing: false });
              return;
            }
            self.location.href = '/accounts/login';
          }.bind(this),
          function(err) { console.log(err); }
        )
      .then(function() {
        this.setState({
          processing: false
        });
      }.bind(this));
  },
  handleInputFirstName: function(e) {
    var userInfo = this.state.userInfo;
    userInfo.firstName = e.target.value;
    this.setState({
      userInfo: userInfo
    });
  },
  handleInputLastName: function(e) {
    var userInfo = this.state.userInfo;
    userInfo.lastName = e.target.value;
    this.setState({
      userInfo: userInfo
    });
  },
  handleInputMail: function(e) {
    var userInfo = this.state.userInfo;
    var formError = this.state.formError;
    userInfo.mail = e.target.value;
    formError.mail.isUsed = false;
    this.setState({
      formError: formError,
      userInfo: userInfo
    });
  },
  handleInputPassword: function(e) {
    var userInfo = this.state.userInfo;
    userInfo.password = e.target.value;
    this.setState({
      userInfo: userInfo
    });
  },
  handleInputConfirmPassword: function(e) {
    var userInfo = this.state.userInfo;
    userInfo.confirmPassword = e.target.value;
    this.setState({
      userInfo: userInfo
    });
  }
});
