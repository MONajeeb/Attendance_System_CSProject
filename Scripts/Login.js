window.addEventListener("load", () => {

    const logform = document.getElementById('Login');
    const uname = document.getElementById('Username');
    const pass = document.getElementById('Password');


    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    logform.addEventListener('submit', e => {

        e.preventDefault();
        validateInputs();

    })

    const validateInputs = () => {

        let usernameValue = uname.value.trim();
        let passValue = pass.value.trim();
        let logdata = window.localStorage.getItem('Logs');
        let logrowdata = JSON.parse(logdata);
        for (let i =0; i < logrowdata.length; i++) {
            if (logrowdata[i].Username == usernameValue && logrowdata[i].Password == passValue) {
                switch (usernameValue) {

                    case "MoNajeeb25":
                        window.location.href = "../Interfaces/Admin_profile.html"
                       
                        break;
                    case "MoAlaa":
                        window.location.href = "../Interfaces/Attendance_profile.html"

                        break;
                    default:
                        window.location.href = "../Interfaces/Employee_profile.html"
                        window.localStorage.setItem('LoggedEmp',JSON.stringify(logrowdata[i]))
                }
                return;
            } 

        }
        
               setError(uname, 'User not registered');
               setError(pass, 'User not registered');               
               alert("Invalid Login information");
                return;
        







    }







})