window.addEventListener("load", () => {
    
    
    let Reportsdata = window.localStorage.getItem('Reports');
    let rawReports = JSON.parse(Reportsdata);
    let table = document.getElementById('Emptable');
    let LoggedEmp=window.localStorage.getItem('LoggedEmp')
    let rawlogged=JSON.parse(LoggedEmp)

    for(let i=0;i<rawReports.length;i++)
    {
        
        if(rawReports[i].Name==rawlogged.Username)
        $('#Emptable').append('<tr> <td>'+rawReports[i].Name +'</td> <td>'+ rawReports[i].monthlyReport +'</td> <td>' +rawReports[i].dailyReport+'</td></tr>')


    }
























})