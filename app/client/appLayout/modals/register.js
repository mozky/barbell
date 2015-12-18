if (Meteor.isClient) {
  Template.register.events({
    //TODO:
    //Confirmation - error message on submit
    //Validate password match and correct email and unique username
    //Redirect to profile form
    //Add validation by steps, do not let the user continue of a previous step is not validateData
    //Arrange the buttons, cancel on the left and previous/next on the right.
    "submit #registrationForm": function(event) {
      event.preventDefault();
      var usernameVar = event.target.registerUsername.value;
      var emailVar = event.target.registerEmail.value;
      var passwordVar = event.target.registerPassword.value;
      var passwordConfVar = event.target.registerPasswordConfirmation.value;
      var nameVar = event.target.registerName.value;
      var ageVar = event.target.registerAge.value;
      var sexVar = event.target.registerSex.value;
      var gymVar = event.target.registerGym.value;
      var sportVar = event.target.registerSport.value;
      //Call validation of data on the server.
      Meteor.call("validateData", usernameVar, passwordVar, passwordConfVar);
      //Create user
      Accounts.createUser({
        email: emailVar,
        password: passwordVar,
        username: usernameVar,
        profile: {
          name: nameVar,
          age: ageVar,
          sex: sexVar,
          gym: gymVar,
          sport: sportVar
        }
      });
    }
  });

  Template.register.onRendered(function() {
    /*
        Form validation
    */
    $('.registrationForm input[type="text"], .registrationForm textarea').on('focus', function() {
      $(this).removeClass('input-error');
    });

    $('.registrationForm').on('submit', function(e) {

      $(this).find('input[type="text"], textarea').each(function() {
        if ($(this).val() == "") {
          e.preventDefault();
          $(this).addClass('input-error');
        } else {
          $(this).removeClass('input-error');
        }
      });

    });


    /*
    		Form
    */
    $('.registrationForm fieldset:first-child').fadeIn('slow');

    $('.registrationForm input[type="text"], .registrationForm input[type="password"], .registrationForm textarea').on('focus', function() {
      $(this).removeClass('input-error');
    });

    // next step
    $('.registrationForm .btn-next').on('click', function() {
      var parent_fieldset = $(this).parents('fieldset');
      var next_step = true;

      parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function() {
        if ($(this).val() == "") {
          $(this).addClass('input-error');
          next_step = false;
        } else {
          $(this).removeClass('input-error');
        }
      });

      if (next_step) {
        parent_fieldset.fadeOut(400, function() {
          $(this).next().fadeIn();
        });
      }

    });

    // previous step
    $('.registrationForm .btn-previous').on('click', function() {
      $(this).parents('fieldset').fadeOut(400, function() {
        $(this).prev().fadeIn();
      });
    });

    // submit
    $('.registrationForm').on('submit', function(e) {

      $(this).find('input[type="text"], input[type="password"], textarea').each(function() {
        if ($(this).val() == "") {
          e.preventDefault();
          $(this).addClass('input-error');
        } else {
          $(this).removeClass('input-error');
        }
      });

    });
  });
}
