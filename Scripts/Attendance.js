window.addEventListener("load", () => {

    const Attform = document.getElementById('Attendance');
    const Empname = document.getElementById('Employee_username');

    Attform.addEventListener('submit', e => {

        e.preventDefault();
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let count_minutes = hours * 60 + minutes;
        let EmpnameValue = Empname.value.trim();
        let Reportsdata = window.localStorage.getItem('Reports');
        let rawReports = JSON.parse(Reportsdata);
                for (let j = 0; j < rawReports.length; j++) {
                    if (rawReports[j].Name == EmpnameValue) {
                        if (rawReports[j].attended == 0 && count_minutes <= 510) { rawReports[j].attended = 1; rawReports[j].monthlyReport += 0.33; rawReports[j].dailyReport += 10; break }
                        
                        else if (rawReports[j].attended == 0 && count_minutes >= 510) { rawReports[j].attended = 1; rawReports[j].monthlyReport -= 0.16; rawReports[j].dailyReport -= 5; rawReports[j].lateReport += 5;break }

                        else if (rawReports[j].attended == 1 && count_minutes >= 930) { rawReports[j].attended = 0; rawReports[j].monthlyReport += 0.16; rawReports[j].dailyReport += 5;break}

                        else if (rawReports[j].attended == 1 && count_minutes <= 930) { rawReports[j].attended = 0; rawReports[j].monthlyReport -= 0.16; rawReports[j].dailyReport -= 5; rawReports[j].excuseReport += 5;break}
                       
                        return;      
                    }
        
                    }
                    localStorage.setItem("Reports", JSON.stringify(rawReports));

})

})