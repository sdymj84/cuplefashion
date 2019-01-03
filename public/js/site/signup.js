function checkInput()
        {
            if(signUpForm.firstName.value=="")
            {
                alert("Please enter your first name.");
                return false;
            }
            else if(signUpForm.lastName.value=="")
            {
                alert("Please enter your last name.");
                return false;
            }
            else if(signUpForm.emailAddress.value=="")
            {
                alert("Please enter your email address.");
                return false;
            }
            else if(signUpForm.password.value=="")
            {
                alert("Please enter the new password for your new account.");
                return false;
            }
            else if(signUpForm.password.value.length < 8)
            {
                alert("Please enter the new password of at least 8 characters.");
                return false;
            }
            else if(signUpForm.password_re.value=="")
            {
                alert("Please enter the confirm password for your new account.");
                return false;
            }
            else if(signUpForm.password.value != signUpForm.password_re.value)
            {
                alert("The confirm passwords do not match. Please input again.");
                signUpForm.password.value="";
                signUpForm.password_re.value="";
                return false;
            } 
        
            else
            {
                return true;
            }
        }

        function signUp() {
            location.href="/test"; //login page
        }