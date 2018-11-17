const musicGuid =[
  {
    "mair": "nomal",
    "date": "",
    "musiconoroff" : false,
    "musicname": "",
    "musictime": "",
    "musicsetlist":`ShowGuest:`
  },
  {
    "mair": "nomal",
    "date": "Tuesday",
    "musiconoroff" : true,
    "musicname": "The Show",
    "musictime": "18:20KST",
    "musicsetlist":`ShowGuest:14U, fromis_9, H.U.B, IZ*ONE, JBJ95, Monsta X, MXM, Golden Child, Gugudan, Kim Dong Han, Dreamnote, D-Crunch, Mighty Mouse, Seo In Young, Ateez, Weki Meki, TST, Chaeyeon, K.Will`
  },
  {
    "mair": "nomal",
    "date": "Wednesday",
    "musiconoroff" : true,
    "musicname": "ShowChampion",
    "musictime": "18:00KST",
    "musicsetlist":`ShowGuest:TWICE / MONSTA X / K.Will / MXM / gugudan / Weki Meki / Golden Child/ Kim Dong Han / Stray Kids / fromis_9 / IZ*ONE / JBJ95 / Chaeyeon / Seo In Young/Mighty Mouth / 14U / H.U.B / TST / Park Seo Jin`
  },
  {
    "mair": "nomal",
    "date": "Thursday",
    "musiconoroff" : true,
    "musicname": "M!CountDown",
    "musictime": "18:00KST",
    "musicsetlist":`ShowGuest:Golden Child / gugudan / THE MAN BLK / Mighty Mouth / MONSTA X/ BTOB / Seo In Young / Stray Kids / IZ*ONE / ATEEZ / APRIL / MXM/Weki Meki / JBJ95 / Chaeyeon / K.Will / TWICE / fromis_9 / HOTSHOT /HEYGIRLS`
  },
  {
    "mair": "nomal",
    "date": "Friday",
    "musiconoroff" : true,
    "musicname": "Music Bank",
    "musictime": "17:00KST",
    "musicsetlist":`ShowGuest:ATEEZ / BTOB / EXO / MONSTA X / Stray Kids / TWICE / A train to autumn / Golden Child / gugudan / Kim Dong Han / DreamNote / Mighty Mouth / BLACK6IX / APRIL / Yeim / Weki Meki / Jei (Amor) / Chaeyeon / K.Will / fromis_9 / HOTSHOT`
  },
  {
    "mair": "nomal",
    "date": "Saturday",
    "musiconoroff" : true,
    "musicname": "Music Core",
    "musictime": "15:15KST",
    "musicsetlist":`ShowGuest:KEY / EXO / TWICE / K.Will / MONSTA X / gugudan / IZ*ONE / Stray Kids / MXM / Weki Meki / Golden Child / DreamNote / ATEEZ`
  },
  {
    "mair": "nomal",
    "date": "Sunday",
    "musiconoroff" : false,
    "musicname": "Inkigayo",
    "musictime": "15:36KST",
    "musicsetlist":`ShowGuest:`
  },
  ////SP_GUIDE/////
  {
    "date": "Saturday",
    "date_date": "12.01",
    "musicname": "2018 Melon Music Awards",
    "musictime": "19:00KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "date": "Monday",
    "date_date": "12.10",
    "musicname": "2018 Mnet Asian Music Awards IN KOREAN",
    "musictime": "19:00KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "date": "Wednesday",
    "date_date": "12.12",
    "musicname": "2018 Mnet Asian Music Awards IN JAPAN",
    "musictime": "19:00KST",
    "musicsetlist":`ShowGuest:`
  },
    {
    "date": "Friday",
    "date_date": "12.14",
    "musicname": "2018 Mnet Asian Music Awards IN HONG KONG",
    "musictime": "19:00KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "date": "Tuesday",
    "date_date": "12.25",
    "musicname": "2018 SBS Gayo Dajeon",
    "musictime": "--:--KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "date": "Monday",
    "date_date": "12.31",
    "musicname": "2018 MBC Gayo Dajeon",
    "musictime": "--:--KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "date": "Saturday",
    "date_date": "01.05" ,
    "musicname": "2019 33nd Golden Disc Awards(Digital)",
    "musictime": "--:--KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "date": "Sunday",
    "date_date": "01.06",
    "musicname": "2019 33nd Golden Disc Awards(Album)",
    "musictime": "--:--KST",
    "musicsetlist":`ShowGuest:`
  }
];

function guidmap(Guid){
  if( (Guid.musiconoroff && Guid.date==mTime(0)) || (Guid.date_date == mDaycheck(0)&& Guid.date==mTime(0))  ){

       return `<ui><li>${Guid.date}>> ${Guid.musicname}(${Guid.musictime})<BR /><font color="000000">${Guid.musicsetlist}</font></li><ui>`;
  }else
    if(!Guid.musiconoroff && Guid.date==mTime(0) && !Guid.date_date){

       return `<li>${Guid.date}>> <font color="000000">No ${Guid.musicname} music show</font></li>`;
  }

}

function guidtmrmap(Guidtmr){
  if((Guidtmr.musiconoroff && Guidtmr.date==mTime(1)) || (Guidtmr.date_date == mDaycheck(1)&& Guidtmr.date==mTime(1)) ){
       return `<ui><li>${Guidtmr.date}>> ${Guidtmr.musicname}(${Guidtmr.musictime})<BR /><font color="000000">${Guidtmr.musicsetlist}</font></li><ui>
       `;
  }else
    if(!Guidtmr.musiconoroff && Guidtmr.date==mTime(1) && !Guidtmr.date_date ){
       return `<li>${Guidtmr.date}>> <font color="000000">No ${Guidtmr.musicname} music show</font></li>`;
  }

}

function mDaycheck(nowtmr){
  let gmonth = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  let guDate= DateTimezone(9).getDate()+nowtmr;
  return( gmonth[DateTimezone(9).getMonth()]+'.'+guDate) ;
}

function DateTimezone(offset) {
  let d = new Date();
  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
   return new Date(utc + (3600000*offset));
}


function mTime(nowadd){
  let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday"];
  let mday = new Date();
  return weekday[DateTimezone(9).getDay()+nowadd];

  //return weekday[3];   //for test
}

function setup(){
    document.getElementById("app_guid").innerHTML =`${musicGuid.map(guidmap).join("")}Tomorrow<BR/> ${musicGuid.map(guidtmrmap).join("")}`;
    setTimeout(function(){document.getElementById("ad_info").innerHTML =``;},60000);
}
