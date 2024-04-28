// start settings
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let link = document.getElementById("cssTheme");

theme2.addEventListener('click', function(){
    link.href = "css/theme1.css"
    theme2.classList.add('active');
    theme1.classList.remove('active');
})

theme1.addEventListener('click', function(){
    link.href = "css/theme2.css"
    theme1.classList.add('active');
    theme2.classList.remove('active');
})

////

let changePfp = document.getElementById("upload");
let uploadBtn = document.getElementById("chose"); //input the file
let image = document.getElementById("profile"); //pfp pic
let remove = document.getElementById("remove");



window.addEventListener('load', function(){
    let displayImg = localStorage.getItem("newImg");
    if (displayImg) {
        image.src = displayImg;
    }
})

changePfp.addEventListener('click', function(){
    uploadBtn.click();
})

uploadBtn.onchange = function(){  //means when we change the image
    let newImg = URL.createObjectURL(uploadBtn.files[0])
    localStorage.setItem("newImg", newImg)
    image.src=newImg;
    remove.style.display = "block";
}


remove.onclick = function(){
    
    if(localStorage.getItem("newImg") == null){
        alert("Please choose an image first!");
    }
    else{
        localStorage.removeItem("newImg")
        image.src = "images/no-profile-picture-icon.png";
    }
}


// end settings

// start login
let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let iconClose = document.querySelector('.icon-close');
let forgot = document.querySelector('.forgot');



let registerUsername = document.getElementById('username');
let registerEmail = document.getElementById('email');
let registerPassword = document.getElementById('password');
let form = document.getElementById('form');
let button = document.getElementById('button');




let loginButton1 = document.getElementById('login-button1');
let loginForm = document.getElementById('login-form');
let loginEmail = document.getElementById('login-email');
let loginPassword = document.getElementById('login-password');



iconClose.addEventListener('click',function(){
    wrapper.style.display = 'none';
});

registerLink.addEventListener('click',function(){
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',function(){
    wrapper.classList.remove('active');
});

forgot.addEventListener('click',function(){
    wrapper.classList.add('active');
});
// ______________________________________________


let informationUser;
    if(localStorage.Data != null){
        informationUser = JSON.parse(localStorage.Data)
    }else{
        informationUser = [];
    }
    button.onclick = function() {
    const usernameValue = registerUsername.value.trim();
    const emailValue = registerEmail.value.trim();
    const passwordValue = registerPassword.value.trim();

    if(validateInputs(usernameValue, emailValue, passwordValue)){
        let object = {
            username:usernameValue,
            email:emailValue,
            password:passwordValue,
        }
        informationUser.push(object)
        localStorage.setItem('Data', JSON.stringify(informationUser))
        clearData()
    }}

    loginButton1.addEventListener('click',function() {
        const emailValue1 = loginEmail.value.trim();
        const passwordValue1 = loginPassword.value.trim();

        let userExists = false;
        for(let i=0; i<informationUser.length; i++){
            if(informationUser[i].email === emailValue1 && informationUser[i].password === passwordValue1){
                userExists = true;
                break;
            }
        }

        if(userExists){
            alert('success');
        } else {
            alert('error');
        }

        clearDataLogin();
    });

    function clearDataLogin() {
        loginEmail.value='';
        loginPassword.value='';
    }



    function clearData(){
        registerUsername.value='';
        registerEmail.value='';
        registerPassword.value='';
    }
        

// validation
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = message;
}

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = '';
};


const isValidEmail = registerEmail => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(registerEmail).toLowerCase());
}


const validateInputs = (usernameValue, emailValue, passwordValue) => {
    


    if(usernameValue === ''){
        setError(registerUsername, 'Username is required');
        return false;
    } else {
        setSuccess(registerUsername);
    }

    if(emailValue === ''){
        setError(registerEmail, 'Email is required');
        return false;
    } else if (!isValidEmail(emailValue)){
        setError(registerEmail, 'Provide a valid email address');
        return false;
    } else {
        setSuccess(registerEmail)
    }

    if(passwordValue === ''){
        setError(registerPassword, 'Password is required');
        return false;
    } else if (passwordValue.length < 8){
        setError(registerPassword, 'Password must be at least 8 character.');
        return false;
    } else {
        setSuccess(registerPassword);
    }

    return true;
};
// end login


// start gellary

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');

btn1.addEventListener('click',function(){
    location.assign('https://ar.wikipedia.org/wiki/%D8%AA%D9%85%D8%AB%D8%A7%D9%84_%D8%A7%D9%84%D8%AD%D8%B1%D9%8A%D8%A9')
})

btn2.addEventListener('click',function(){
    location.assign('https://www.ajnet.me/encyclopedia/2024/2/9/%D8%A8%D8%B1%D8%AC-%D8%A8%D9%8A%D8%B2%D8%A7-%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%84')
})

btn3.addEventListener('click',function(){
    location.assign('https://www.sis.gov.eg/Story/121619/%D8%A7%D9%84%D8%A3%D9%87%D8%B1%D8%A7%D9%85%D8%A7%D8%AA?lang=ar')
})

btn4.addEventListener('click',function(){
    location.assign('https://www.un.org/ungifts/ar/%D8%A7%D9%84%D8%B3%D9%88%D8%B1-%D8%A7%D9%84%D8%B9%D8%B8%D9%8A%D9%85')
})

btn5.addEventListener('click',function(){
    location.assign('https://www.japan.travel/ar/spot/1691/')
})

btn6.addEventListener('click',function(){
    location.assign('https://ar.wikipedia.org/wiki/%D8%A8%D8%B1%D8%AC_%D8%AE%D9%84%D9%8A%D9%81%D8%A9')
})

btn7.addEventListener('click',function(){
    location.assign('https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6')
})

btn8.addEventListener('click',function(){
    location.assign('https://ar.wikipedia.org/wiki/%D8%A5%D8%B3%D8%B7%D9%86%D8%A8%D9%88%D9%84')
})

btn9.addEventListener('click',function(){
    location.assign('https://mawdoo3.com/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA_%D8%AD%D9%88%D9%84_%D8%AC%D8%B2%D8%B1_%D8%A7%D9%84%D9%85%D8%A7%D9%84%D8%AF%D9%8A%D9%81')
})
// end gellary



















