window.addEventListener("load", () => {
    
    
    let Reportsdata = window.localStorage.getItem('Reports');
    let rawReports = JSON.parse(Reportsdata);
    let table = document.getElementById('Admintable');

    for(let i=0;i<rawReports.length;i++)
    {
        $('#Admintable').append('<tr><td>'+rawReports[i].Name +'</td> <td>'+(rawReports[i].dailyReport-rawReports[i].lateReport-rawReports[i].excuseReport) +'</td> <td>'+rawReports[i].lateReport+'</td><td>' +rawReports[i].excuseReport+'</td><td>'+(rawReports[i].monthlyReport*30)+'</td></tr>')


    }

})