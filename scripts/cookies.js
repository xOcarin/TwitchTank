
const usernameSpan = document.getElementById('username');
if (username != 'undefined') {
  // Use AJAX to retrieve the username from the server
  $.ajax({
    url: '../phphandlers/get_current_user.php',
    type: 'GET',
    success: function(response) {
      usernameSpan.textContent = response.username;
      console.log(response);
      const loginButton = document.getElementById('login-button');
      const signupButton = document.getElementById('signup-button');
      loginButton.getElementsByTagName('img')[0].src = 'assets/logoutbutton.png';
      const signupImg = signupButton.getElementsByTagName('img')[0];

      signupImg.alt = response;
    },
    error: function(xhr, status, error) {
      console.log('Error retrieving username:', error);
    }
  });





}
