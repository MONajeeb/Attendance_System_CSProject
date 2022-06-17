

window.addEventListener("load", () => {


    const form = document.getElementById('Reg');
    const firstname = document.getElementById('Firstname');
    const lastname = document.getElementById('Lastname');
    const adress = document.getElementById('Adress');
    const email = document.getElementById('Email');
    const age = document.getElementById('Age');

    
    let admin = { Firstname: "Mohamed", Lastname: "Najeeb", Adress: "Dekirnis", Email: "mohamednajeeb300@gmail.com", Age: "25" }
    let security = { Firstname: "Mohamed", Lastname: "Alaa", Adress: "tanta", Email: "Alaasebaaey30@gmail.com", Age: "35" }
    localStorage.setItem('Admin', JSON.stringify(admin));
    let users = [security];
    localStorage.setItem('users', JSON.stringify(users))
    let Adminlog={Username: "MoNajeeb25", Password: "015015"};
    let Seclog={Username: "MoAlaa", Password: "015020"}
    let Secreport={Name: "MoAlaa", monthlyReport:0,dailyReport:0,lateReport:0,excuseReport:0,attended:0}
    let Logins = [Adminlog,Seclog];
    let Reports=[Secreport];
   



    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();

    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };


    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateInputs = () => {
        const firstnameValue = firstname.value.trim();
        const lastnamevalue = lastname.value.trim();
        const adressValue = adress.value.trim();
        const emailValue = email.value.trim();
        const ageValue = age.value.trim();

        if (firstnameValue === '') {
            setError(firstname, 'First name is required');
        } else {
            setSuccess(firstname);

        }

        if (lastnamevalue === '') {
            setError(lastname, 'Last name is required');
        } else {
            setSuccess(lastname);
        }

        if (adressValue === '') {
            setError(adress, 'Adress is required');
        } else {
            setSuccess(adress);
        }

        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        }
        else {
            setSuccess(email);
        }

        if (ageValue === '') {
            setError(age, 'Age is required');
        } else {
            setSuccess(age);
        }
        if (firstnameValue != '' & lastnamevalue != '' & adressValue != '' & emailValue != '' & isValidEmail(emailValue) & ageValue != '') {
            let data = window.localStorage.getItem('users');
            let admindata = JSON.parse(window.localStorage.getItem('Admin'));
            let rowdata = JSON.parse(data);
            for (let i = 0; i < rowdata.length; i++) {
                if (rowdata[i].Email == emailValue || admin.Email == emailValue) {
                    alert("Already registered Email");
                    return;

                }}

                 

                    let regData = ($('#Reg').serializeArray());
                    let regFormObject = {};
                    $.each(regData, function (i, v) {
                        regFormObject[v.name] = v.value;
                    });

                    users.push(regFormObject);
                    localStorage.setItem('users', JSON.stringify(users));

                    let Username = firstnameValue + lastnamevalue + ageValue;
                    let Password = `015${ageValue}`
                    let Logobj = {}
                    let Reportobj={}
                    Object.assign(Logobj, {Username: Username, Password: Password})
                    Object.assign(Reportobj, {Name: Username, monthlyReport:0,dailyReport:0,lateReport:0,excuseReport:0,attended:0})
                    Reports.push(Reportobj)
                    Logins.push(Logobj)
                    localStorage.setItem('Logs', JSON.stringify(Logins));
                    localStorage.setItem('Reports', JSON.stringify(Reports));
                  


                    Email.send({
                        SecureToken: "4883ad01-cb4d-4e3a-9e88-63360866c90f",
                        To: 'mohamednajeeb300@gmail.com',
                        From: "mohamedmahfouz396@gmail.com",
                        Subject: "Username & Password",
                        Body: `Welcome to our Company your username is ${Username}  & your Password is ${Password}`
                    }).then(
                        message => alert("A mail has been sent to you with your login keys")
                    );

                

            



        }
    }
   
})
























