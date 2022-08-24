const showTime = () =>{
    var day = new Date;
    var hr = day.getHours();
    var min = day.getMinutes();
    var sec = day.getSeconds();
    var session = document.getElementById('session');
    if(hr>=12){hr=hr-12}
    else if(hr>=12){session.innerText='PM'}
    else{session.innerText='AM'}

    hr=(hr<10)?"0"+hr:hr
    min=(min<10)?"0"+min:min
    sec=(sec<10)?"0"+sec:sec

    document.getElementById('hour').innerText=hr+" :";
    document.getElementById('min').innerText=min+" :";
    document.getElementById('sec').innerText=sec+" :";
}
setInterval(showTime,1000);