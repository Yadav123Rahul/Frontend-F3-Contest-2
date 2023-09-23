const signupPage = document.getElementById('signup');
const profilePage = document.getElementById('profile');
const username = document.getElementById('username').value;

const errorElement = document.getElementById('error-first');
// errorElement.style.display = 'none';

function signup() {
    // Fetch input values
    const username = document.getElementById('username').value;
    const useremail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const conPassword = document.getElementById('con-password').value;
    
  
    // Reset error message
    
    errorElement.textContent = '';
    if (username.trim() === '' || useremail.trim() === '' || password.trim() === '' || conPassword.trim() === '') {
        errorElement.style.display = 'block';
        errorElement.textContent = 'Error: All fields are mandatory!';
        return false;
    }
    // Validate input values
    // Generate a random 16-byte access token

    const accessToken = generateAccessToken();

    // Store user details and access token in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('useremail', useremail);
    localStorage.setItem('password', password);
    localStorage.setItem('conPassword', conPassword);
    localStorage.setItem('accessToken', accessToken);
  
    // Display success message
    alert('Signup successful!');
  
    // Show profile page
    showProfilePage(accessToken);
}
  
    
   
    
    
function generateAccessToken() {
  // Generate a random 16-byte access token (for simplicity, we use a simple string)
  return Math.random().toString(36).substring(2, 18);
}

const profileUsername = document.getElementById('profile-username');
const profileUseremail = document.getElementById('profile-email');
const profileUserPassword = document.getElementById('profile-password');
const profileUserToken = document.getElementById('profile-token');

function showProfilePage(accessToken) {

    if(accessToken==""){
        signupPage.classList.add('active');
        return;
    }

  // Display username on the profile page

  profileUsername.textContent = localStorage.getItem('username');
  profileUseremail.textContent = localStorage.getItem('useremail');
  profileUserPassword.textContent = localStorage.getItem('password');
  profileUserToken.textContent = localStorage.getItem('accessToken');

  // Hide signup page and show profile page
  signupPage.classList.remove('active');
  profilePage.classList.add('active');
}

function logout() {
  // Clear local storage
  localStorage.removeItem('username');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('password');
  localStorage.removeItem('useremail');

  document.getElementById('username').value="";
  document.getElementById('email').value="";
  document.getElementById('password').value="";
  document.getElementById('con-password').value="";  

  // Show signup page
  signupPage.classList.add('active');
  profilePage.classList.remove('active');
}

window.onload = function() {
    signupPage.classList.add('active');
};


function reload(){
    window.open('./index.html', '_self');
    signupPage.classList.add('active');
}