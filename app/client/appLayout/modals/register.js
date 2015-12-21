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
      var user = {
        username : event.target.registerUsername.value,
        email : event.target.registerEmail.value,
        password : event.target.registerPassword.value,
        passwordConf : event.target.registerPasswordConfirmation.value,
        name : event.target.registerName.value,
        age : event.target.registerAge.value,
        sex : event.target.registerSex.value,
        gym : event.target.registerGym.value,
        sport : event.target.registerSport.value
      };
      //Call validation of data on the server.
      Meteor.call("validateData", user);
      //Create user
      //TODO: Maybe send the user object itself?
      Accounts.createUser({
        email: user.email,
        password: user.password,
        username: user.username,
        profile: {
          name: user.name,
          age: user.age,
          sex: user.sex,
          gym: user.gym,
          sport: user.sport
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

    //Close modal on submit and redirect to main
    $('#submitForm').on('click', function() {
      // Add a delay to show successfull registration message and then close the modal.
      $('#registerModal').on('success', function() {
        setTimeout(function() {
          //Show success message
        }, 1000);
      }).modal('hide')
      $('#registerModal').on('hidden.bs.modal', function() {
        Router.go('/');
      });
    });
  });
}
