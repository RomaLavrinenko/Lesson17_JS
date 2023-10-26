setInterval(() => {
    let dd = new Date();
    let day = dd.getDate();
    let month = dd.getMonth()+1;
    let year = dd.getFullYear();
    let hh = dd.getHours();
    let mm = dd.getMinutes();
    let ss = dd.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    if (year < 10) year = '0' + year;
    document.querySelector('.date').innerHTML = `${day}.${month}.${year}`
    document.querySelector('.time').innerHTML = `${hh}:${mm}:${ss}`
})
let timmin = 25;
document.querySelector('.plus').addEventListener('click',()=>{
    timmin++;
    document.querySelector('.timer').textContent = timmin;
    if(timmin >= 60){
        timmin = 0;
    }
})
document.querySelector('.minus').addEventListener('click',()=>{
    timmin--;
    document.querySelector('.timer').textContent = timmin;
    if(timmin <= 0){
        timmin = 60;
    }
})
let oo = 0;
let intId;
document.querySelector('.start-2').addEventListener('click',()=>{
    document.querySelector('.start-2').disabled = true;
    document.querySelector('.minus').disabled = true;
    document.querySelector('.plus').disabled = true;
    intId = setInterval(()=>{
        if(timmin <= 0 && oo <= 0){
            clearInterval(intId);
        }
        if(oo<=0){
            timmin--;
            oo = 60;   
        }
        document.querySelector('.timer-window').textContent = `${timmin}:${oo}`;
        oo--;
    },1000)

});

document.querySelector('.reset-2').addEventListener('click',()=>{
    clearInterval(intId);
    document.querySelector('.timer-window').textContent = `00:00`;
    document.querySelector('.start-2').disabled = false;
    document.querySelector('.minus').disabled = false;
    document.querySelector('.plus').disabled = false;
    oo = 0;
    timmin = document.querySelector('.timer').textContent;
});
document.querySelector('.stop-2').addEventListener('click',()=>{
    clearInterval(intId);
    document.querySelector('.start-2').disabled = false;
    document.querySelector('.minus').disabled = false;
    document.querySelector('.plus').disabled = false;
});


let sec = 0;
let min = 0;
let hou = 0;
if (hou < 10) hou = '0' + hou;
if (min < 10) min = '0' + min;
if (sec < 10) sec = '0' + sec;
let secundamer;
document.querySelector('.start').addEventListener('click',()=>{
    document.querySelector('.start').disabled = true;
    document.querySelector('.stop').disabled = false;
    document.querySelector('.loop').disabled = true;
    document.querySelector('.reset').disabled = true;

    secundamer = setInterval(()=>{
            sec++;
            if(sec >= 60){
                sec = 0;
                min++;
                if(min>=60){
                    min = 0;
                    hou++;
                }
            }
            document.querySelector('.secmer').textContent = `${hou}:${min}:${sec}`;

    },1000)

});

document.querySelector('.stop').addEventListener('click',()=>{
    clearInterval(secundamer);
    document.querySelector('.start').disabled = false;
    document.querySelector('.loop').disabled = false;
    document.querySelector('.reset').disabled = false;
});
document.querySelector('.loop').addEventListener('click',()=>{
    // document.querySelector('.mid-window').innerHTML = `<h2>${document.querySelector('.secmer').textContent}</h2>`;
    let h2 = document.createElement('h2');
    h2.textContent = document.querySelector('.secmer').textContent;
    document.querySelector('.mid-window').append(h2);
});

document.querySelector('.reset').addEventListener('click',()=>{
    document.querySelector('.secmer').textContent = `00:00:00`;
    document.querySelector('.mid-window').textContent = '';
    sec = 0;
    min = 0;
    hou = 0;
    if (hou < 10) hou = '0' + hou;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
});