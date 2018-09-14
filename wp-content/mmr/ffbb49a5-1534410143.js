!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a(require("moment"),require("fullcalendar")):"function"==typeof define&&define.amd?define(["moment","fullcalendar"],a):"object"==typeof exports?a(require("moment"),require("fullcalendar")):a(e.moment,e.FullCalendar)}("undefined"!=typeof self?self:this,function(e,a){return function(e){function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}var t={};return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="",a(a.s=432)}([function(a,t){a.exports=e},function(e,t){e.exports=a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(66);var n=t(1);n.datepickerLocale("af","af",{closeText:"Selekteer",prevText:"Vorige",nextText:"Volgende",currentText:"Vandag",monthNames:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],monthNamesShort:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],dayNames:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],dayNamesShort:["Son","Maa","Din","Woe","Don","Vry","Sat"],dayNamesMin:["So","Ma","Di","Wo","Do","Vr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("af",{buttonText:{year:"Jaar",month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayHtml:"Heeldag",eventLimitText:"Addisionele",noEventsMessage:"Daar is geen gebeurtenisse nie"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"vm":"VM":t?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",ss:"%d sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(68);var n=t(1);n.datepickerLocale("ar-dz","ar-DZ",{closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesMin:["ح","ن","ث","ر","خ","ج","س"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:6,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ar-dz",{buttonText:{month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("ar-dz",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"أح_إث_ثلا_أر_خم_جم_سب".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(70);var n=t(1);n.datepickerLocale("ar-kw","ar",{closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],dayNamesMin:["ح","ن","ث","ر","خ","ج","س"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ar-kw",{buttonText:{month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("ar-kw",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:12}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(72);var n=t(1);n.datepickerLocale("ar-ly","ar",{closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],dayNamesMin:["ح","ن","ث","ر","خ","ج","س"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ar-ly",{buttonText:{month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},t=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},n={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},r=function(e){return function(a,r,s,d){var i=t(a),o=n[e][t(a)];return 2===i&&(o=o[r?0:1]),o.replace(/%d/i,a)}},s=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];return e.defineLocale("ar-ly",{months:s,monthsShort:s,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:r("s"),ss:r("s"),m:r("m"),mm:r("m"),h:r("h"),hh:r("h"),d:r("d"),dd:r("d"),M:r("M"),MM:r("M"),y:r("y"),yy:r("y")},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return a[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(74);var n=t(1);n.datepickerLocale("ar-ma","ar",{closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],dayNamesMin:["ح","ن","ث","ر","خ","ج","س"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ar-ma",{buttonText:{month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(76);var n=t(1);n.datepickerLocale("ar-sa","ar",{closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],dayNamesMin:["ح","ن","ث","ر","خ","ج","س"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ar-sa",{buttonText:{month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},t={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};return e.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return t[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return a[e]}).replace(/,/g,"،")},week:{dow:0,doy:6}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(78);var n=t(1);n.datepickerLocale("ar-tn","ar",{closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],dayNamesMin:["ح","ن","ث","ر","خ","ج","س"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ar-tn",{buttonText:{month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(80);var n=t(1);n.datepickerLocale("ar","ar",{closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],dayNamesMin:["ح","ن","ث","ر","خ","ج","س"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ar",{buttonText:{month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},t={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},n=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},r={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},s=function(e){return function(a,t,s,d){var i=n(a),o=r[e][n(a)];return 2===i&&(o=o[t?0:1]),o.replace(/%d/i,a)}},d=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];return e.defineLocale("ar",{months:d,monthsShort:d,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:s("s"),ss:s("s"),m:s("m"),mm:s("m"),h:s("h"),hh:s("h"),d:s("d"),dd:s("d"),M:s("M"),MM:s("M"),y:s("y"),yy:s("y")},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return t[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return a[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(82);var n=t(1);n.datepickerLocale("bg","bg",{closeText:"затвори",prevText:"&#x3C;назад",nextText:"напред&#x3E;",nextBigText:"&#x3E;&#x3E;",currentText:"днес",monthNames:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],monthNamesShort:["Яну","Фев","Мар","Апр","Май","Юни","Юли","Авг","Сеп","Окт","Нов","Дек"],dayNames:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],dayNamesShort:["Нед","Пон","Вто","Сря","Чет","Пет","Съб"],dayNamesMin:["Не","По","Вт","Ср","Че","Пе","Съ"],weekHeader:"Wk",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("bg",{buttonText:{month:"Месец",week:"Седмица",day:"Ден",list:"График"},allDayText:"Цял ден",eventLimitText:function(e){return"+още "+e},noEventsMessage:"Няма събития за показване"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-ев":0===t?e+"-ен":t>10&&t<20?e+"-ти":1===a?e+"-ви":2===a?e+"-ри":7===a||8===a?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(84);var n=t(1);n.datepickerLocale("bs","bs",{closeText:"Zatvori",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Danas",monthNames:["Januar","Februar","Mart","April","Maj","Juni","Juli","August","Septembar","Oktobar","Novmbar","Decembar"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNames:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],dayNamesShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayNamesMin:["Ne","Po","Ut","Sr","Če","Pe","Su"],weekHeader:"Sed",dateFormat:"dd.mm.yy.",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("bs",{buttonText:{prev:"Prošli",next:"Sljedeći",month:"Mjesec",week:"Sedmica",day:"Dan",list:"Raspored"},allDayText:"Cijeli dan",eventLimitText:function(e){return"+ još "+e},noEventsMessage:"Nema događaja za prikazivanje"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t){var n=e+" ";switch(t){case"ss":return n+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return a?"jedna minuta":"jedne minute";case"mm":return n+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return n+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return n+=1===e?"dan":"dana";case"MM":return n+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return n+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}return e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:a,m:a,mm:a,h:a,hh:a,d:"dan",dd:a,M:"mjesec",MM:a,y:"godinu",yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(86);var n=t(1);n.datepickerLocale("ca","ca",{closeText:"Tanca",prevText:"Anterior",nextText:"Següent",currentText:"Avui",monthNames:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"],monthNamesShort:["gen","feb","març","abr","maig","juny","jul","ag","set","oct","nov","des"],dayNames:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],dayNamesShort:["dg","dl","dt","dc","dj","dv","ds"],dayNamesMin:["dg","dl","dt","dc","dj","dv","ds"],weekHeader:"Set",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ca",{buttonText:{month:"Mes",week:"Setmana",day:"Dia",list:"Agenda"},allDayText:"Tot el dia",eventLimitText:"més",noEventsMessage:"No hi ha esdeveniments per mostrar"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("ca",{months:{standalone:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,a){var t=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==a&&"W"!==a||(t="a"),e+t},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(88);var n=t(1);n.datepickerLocale("cs","cs",{closeText:"Zavřít",prevText:"&#x3C;Dříve",nextText:"Později&#x3E;",currentText:"Nyní",monthNames:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],monthNamesShort:["led","úno","bře","dub","kvě","čer","čvc","srp","zář","říj","lis","pro"],dayNames:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],dayNamesShort:["ne","po","út","st","čt","pá","so"],dayNamesMin:["ne","po","út","st","čt","pá","so"],weekHeader:"Týd",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("cs",{buttonText:{month:"Měsíc",week:"Týden",day:"Den",list:"Agenda"},allDayText:"Celý den",eventLimitText:function(e){return"+další: "+e},noEventsMessage:"Žádné akce k zobrazení"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e){return e>1&&e<5&&1!=~~(e/10)}function t(e,t,n,r){var s=e+" ";switch(n){case"s":return t||r?"pár sekund":"pár sekundami";case"ss":return t||r?s+(a(e)?"sekundy":"sekund"):s+"sekundami";case"m":return t?"minuta":r?"minutu":"minutou";case"mm":return t||r?s+(a(e)?"minuty":"minut"):s+"minutami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?s+(a(e)?"hodiny":"hodin"):s+"hodinami";case"d":return t||r?"den":"dnem";case"dd":return t||r?s+(a(e)?"dny":"dní"):s+"dny";case"M":return t||r?"měsíc":"měsícem";case"MM":return t||r?s+(a(e)?"měsíce":"měsíců"):s+"měsíci";case"y":return t||r?"rok":"rokem";case"yy":return t||r?s+(a(e)?"roky":"let"):s+"lety"}}var n="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),r="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");return e.defineLocale("cs",{months:n,monthsShort:r,monthsParse:function(e,a){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$|^"+a[t]+"$","i");return n}(n,r),shortMonthsParse:function(e){var a,t=[];for(a=0;a<12;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(r),longMonthsParse:function(e){var a,t=[];for(a=0;a<12;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(n),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(90);var n=t(1);n.datepickerLocale("da","da",{closeText:"Luk",prevText:"&#x3C;Forrige",nextText:"Næste&#x3E;",currentText:"Idag",monthNames:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNames:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],dayNamesShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],dayNamesMin:["Sø","Ma","Ti","On","To","Fr","Lø"],weekHeader:"Uge",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("da",{buttonText:{month:"Måned",week:"Uge",day:"Dag",list:"Agenda"},allDayText:"Hele dagen",eventLimitText:"flere",noEventsMessage:"Ingen arrangementer at vise"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"på dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",ss:"%d sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(92);var n=t(1);n.datepickerLocale("de-at","de",{closeText:"Schließen",prevText:"&#x3C;Zurück",nextText:"Vor&#x3E;",currentText:"Heute",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("de-at",{buttonText:{month:"Monat",week:"Woche",day:"Tag",list:"Terminübersicht"},allDayText:"Ganztägig",eventLimitText:function(e){return"+ weitere "+e},noEventsMessage:"Keine Ereignisse anzuzeigen"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t,n){var r={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?r[t][0]:r[t][1]}return e.defineLocale("de-at",{
months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:a,mm:"%d Minuten",h:a,hh:"%d Stunden",d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(94);var n=t(1);n.datepickerLocale("de-ch","de",{closeText:"Schließen",prevText:"&#x3C;Zurück",nextText:"Vor&#x3E;",currentText:"Heute",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("de-ch",{buttonText:{month:"Monat",week:"Woche",day:"Tag",list:"Terminübersicht"},allDayText:"Ganztägig",eventLimitText:function(e){return"+ weitere "+e},noEventsMessage:"Keine Ereignisse anzuzeigen"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t,n){var r={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?r[t][0]:r[t][1]}return e.defineLocale("de-ch",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:a,mm:"%d Minuten",h:a,hh:"%d Stunden",d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(96);var n=t(1);n.datepickerLocale("de","de",{closeText:"Schließen",prevText:"&#x3C;Zurück",nextText:"Vor&#x3E;",currentText:"Heute",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("de",{buttonText:{month:"Monat",week:"Woche",day:"Tag",list:"Terminübersicht"},allDayText:"Ganztägig",eventLimitText:function(e){return"+ weitere "+e},noEventsMessage:"Keine Ereignisse anzuzeigen"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t,n){var r={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?r[t][0]:r[t][1]}return e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:a,mm:"%d Minuten",h:a,hh:"%d Stunden",d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(98);var n=t(1);n.datepickerLocale("el","el",{closeText:"Κλείσιμο",prevText:"Προηγούμενος",nextText:"Επόμενος",currentText:"Σήμερα",monthNames:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],monthNamesShort:["Ιαν","Φεβ","Μαρ","Απρ","Μαι","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],dayNames:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],dayNamesShort:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],dayNamesMin:["Κυ","Δε","Τρ","Τε","Πε","Πα","Σα"],weekHeader:"Εβδ",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("el",{buttonText:{month:"Μήνας",week:"Εβδομάδα",day:"Ημέρα",list:"Ατζέντα"},allDayText:"Ολοήμερο",eventLimitText:"περισσότερα",noEventsMessage:"Δεν υπάρχουν γεγονότα για να εμφανιστεί"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}return e.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,a){return e?"string"==typeof a&&/D/.test(a.substring(0,a.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]:this._monthsNominativeEl},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,a,t){return e>11?t?"μμ":"ΜΜ":t?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,t){var n=this._calendarEl[e],r=t&&t.hours();return a(n)&&(n=n.apply(t)),n.replace("{}",r%12==1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",ss:"%d δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},dayOfMonthOrdinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(100);var n=t(1);n.datepickerLocale("en-au","en-AU",{closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("en-au")},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(102),t(1).locale("en-ca")},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(104);var n=t(1);n.datepickerLocale("en-gb","en-GB",{closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("en-gb")},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(106),t(1).locale("en-ie")},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(108);var n=t(1);n.datepickerLocale("en-nz","en-NZ",{closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("en-nz")},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(110);var n=t(1);n.datepickerLocale("es-do","es",{closeText:"Cerrar",prevText:"&#x3C;Ant",nextText:"Sig&#x3E;",currentText:"Hoy",monthNames:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],monthNamesShort:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],dayNames:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],dayNamesShort:["dom","lun","mar","mié","jue","vie","sáb"],dayNamesMin:["D","L","M","X","J","V","S"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("es-do",{buttonText:{month:"Mes",week:"Semana",day:"Día",list:"Agenda"},allDayHtml:"Todo<br/>el día",eventLimitText:"más",noEventsMessage:"No hay eventos para mostrar"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),t="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),n=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],r=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;return e.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,n){return e?/-MMM-/.test(n)?t[e.month()]:a[e.month()]:a},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:n,longMonthsParse:n,shortMonthsParse:n,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(112);var n=t(1);n.datepickerLocale("es-us","es",{closeText:"Cerrar",prevText:"&#x3C;Ant",nextText:"Sig&#x3E;",currentText:"Hoy",monthNames:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],monthNamesShort:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],dayNames:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],dayNamesShort:["dom","lun","mar","mié","jue","vie","sáb"],dayNamesMin:["D","L","M","X","J","V","S"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("es-us",{buttonText:{month:"Mes",week:"Semana",day:"Día",list:"Agenda"},allDayHtml:"Todo<br/>el día",eventLimitText:"más",noEventsMessage:"No hay eventos para mostrar"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),t="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");return e.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,n){return e?/-MMM-/.test(n)?t[e.month()]:a[e.month()]:a},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"MMMM [de] D [de] YYYY",LLL:"MMMM [de] D [de] YYYY h:mm A",LLLL:"dddd, MMMM [de] D [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,doy:6}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(114);var n=t(1);n.datepickerLocale("es","es",{closeText:"Cerrar",prevText:"&#x3C;Ant",nextText:"Sig&#x3E;",currentText:"Hoy",monthNames:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],monthNamesShort:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],dayNames:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],dayNamesShort:["dom","lun","mar","mié","jue","vie","sáb"],dayNamesMin:["D","L","M","X","J","V","S"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("es",{buttonText:{month:"Mes",week:"Semana",day:"Día",list:"Agenda"},allDayHtml:"Todo<br/>el día",eventLimitText:"más",noEventsMessage:"No hay eventos para mostrar"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),t="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),n=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],r=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;return e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,n){return e?/-MMM-/.test(n)?t[e.month()]:a[e.month()]:a},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:n,longMonthsParse:n,shortMonthsParse:n,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(116);var n=t(1);n.datepickerLocale("et","et",{closeText:"Sulge",prevText:"Eelnev",nextText:"Järgnev",currentText:"Täna",monthNames:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],monthNamesShort:["Jaan","Veebr","Märts","Apr","Mai","Juuni","Juuli","Aug","Sept","Okt","Nov","Dets"],dayNames:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"],dayNamesShort:["Pühap","Esmasp","Teisip","Kolmap","Neljap","Reede","Laup"],dayNamesMin:["P","E","T","K","N","R","L"],weekHeader:"näd",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("et",{buttonText:{month:"Kuu",week:"Nädal",day:"Päev",list:"Päevakord"},allDayText:"Kogu päev",eventLimitText:function(e){return"+ veel "+e},noEventsMessage:"Kuvamiseks puuduvad sündmused"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t,n){var r={s:["mõne sekundi","mõni sekund","paar sekundit"],ss:[e+"sekundi",e+"sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return a?r[t][2]?r[t][2]:r[t][1]:n?r[t][0]:r[t][1]}return e.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:"%d päeva",M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(118);var n=t(1);n.datepickerLocale("eu","eu",{closeText:"Egina",prevText:"&#x3C;Aur",nextText:"Hur&#x3E;",currentText:"Gaur",monthNames:["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua"],monthNamesShort:["urt.","ots.","mar.","api.","mai.","eka.","uzt.","abu.","ira.","urr.","aza.","abe."],dayNames:["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"],dayNamesShort:["ig.","al.","ar.","az.","og.","ol.","lr."],dayNamesMin:["ig","al","ar","az","og","ol","lr"],weekHeader:"As",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("eu",{buttonText:{month:"Hilabetea",week:"Astea",day:"Eguna",list:"Agenda"},allDayHtml:"Egun<br/>osoa",eventLimitText:"gehiago",noEventsMessage:"Ez dago ekitaldirik erakusteko"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",ss:"%d segundo",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(120);var n=t(1);n.datepickerLocale("fa","fa",{closeText:"بستن",prevText:"&#x3C;قبلی",nextText:"بعدی&#x3E;",currentText:"امروز",monthNames:["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["يکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],dayNamesShort:["ی","د","س","چ","پ","ج","ش"],dayNamesMin:["ی","د","س","چ","پ","ج","ش"],weekHeader:"هف",dateFormat:"yy/mm/dd",firstDay:6,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""}),n.locale("fa",{buttonText:{month:"ماه",week:"هفته",day:"روز",list:"برنامه"},allDayText:"تمام روز",eventLimitText:function(e){return"بیش از "+e},noEventsMessage:"هیچ رویدادی به نمایش"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},t={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};return e.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,a,t){return e<12?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",ss:"ثانیه d%",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return t[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return a[e]}).replace(/,/g,"،")},dayOfMonthOrdinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(122);var n=t(1);n.datepickerLocale("fi","fi",{closeText:"Sulje",prevText:"&#xAB;Edellinen",nextText:"Seuraava&#xBB;",currentText:"Tänään",monthNames:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],monthNamesShort:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"],dayNamesShort:["Su","Ma","Ti","Ke","To","Pe","La"],dayNames:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],dayNamesMin:["Su","Ma","Ti","Ke","To","Pe","La"],weekHeader:"Vk",dateFormat:"d.m.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("fi",{buttonText:{month:"Kuukausi",week:"Viikko",day:"Päivä",list:"Tapahtumat"},allDayText:"Koko päivä",eventLimitText:"lisää",noEventsMessage:"Ei näytettäviä tapahtumia"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,n,r){var s="";switch(n){
case"s":return r?"muutaman sekunnin":"muutama sekunti";case"ss":return r?"sekunnin":"sekuntia";case"m":return r?"minuutin":"minuutti";case"mm":s=r?"minuutin":"minuuttia";break;case"h":return r?"tunnin":"tunti";case"hh":s=r?"tunnin":"tuntia";break;case"d":return r?"päivän":"päivä";case"dd":s=r?"päivän":"päivää";break;case"M":return r?"kuukauden":"kuukausi";case"MM":s=r?"kuukauden":"kuukautta";break;case"y":return r?"vuoden":"vuosi";case"yy":s=r?"vuoden":"vuotta"}return s=t(e,r)+" "+s}function t(e,a){return e<10?a?r[e]:n[e]:e}var n="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),r=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",n[7],n[8],n[9]];return e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(124);var n=t(1);n.datepickerLocale("fr-ca","fr-CA",{closeText:"Fermer",prevText:"Précédent",nextText:"Suivant",currentText:"Aujourd'hui",monthNames:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthNamesShort:["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dayNames:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],dayNamesShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dayNamesMin:["D","L","M","M","J","V","S"],weekHeader:"Sem.",dateFormat:"yy-mm-dd",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("fr-ca",{buttonText:{year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},allDayHtml:"Toute la<br/>journée",eventLimitText:"en plus",noEventsMessage:"Aucun événement à afficher"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(126);var n=t(1);n.datepickerLocale("fr-ch","fr-CH",{closeText:"Fermer",prevText:"&#x3C;Préc",nextText:"Suiv&#x3E;",currentText:"Courant",monthNames:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthNamesShort:["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dayNames:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],dayNamesShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dayNamesMin:["D","L","M","M","J","V","S"],weekHeader:"Sm",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("fr-ch",{buttonText:{year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},allDayHtml:"Toute la<br/>journée",eventLimitText:"en plus",noEventsMessage:"Aucun événement à afficher"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(128);var n=t(1);n.datepickerLocale("fr","fr",{closeText:"Fermer",prevText:"Précédent",nextText:"Suivant",currentText:"Aujourd'hui",monthNames:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthNamesShort:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dayNames:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],dayNamesShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dayNamesMin:["D","L","M","M","J","V","S"],weekHeader:"Sem.",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("fr",{buttonText:{year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},allDayHtml:"Toute la<br/>journée",eventLimitText:"en plus",noEventsMessage:"Aucun événement à afficher"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,a){switch(a){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(130);var n=t(1);n.datepickerLocale("gl","gl",{closeText:"Pechar",prevText:"&#x3C;Ant",nextText:"Seg&#x3E;",currentText:"Hoxe",monthNames:["Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro"],monthNamesShort:["Xan","Feb","Mar","Abr","Mai","Xuñ","Xul","Ago","Set","Out","Nov","Dec"],dayNames:["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"],dayNamesShort:["Dom","Lun","Mar","Mér","Xov","Ven","Sáb"],dayNamesMin:["Do","Lu","Ma","Mé","Xo","Ve","Sá"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("gl",{buttonText:{month:"Mes",week:"Semana",day:"Día",list:"Axenda"},allDayHtml:"Todo<br/>o día",eventLimitText:"máis",noEventsMessage:"Non hai eventos para amosar"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(132);var n=t(1);n.datepickerLocale("he","he",{closeText:"סגור",prevText:"&#x3C;הקודם",nextText:"הבא&#x3E;",currentText:"היום",monthNames:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],monthNamesShort:["ינו","פבר","מרץ","אפר","מאי","יוני","יולי","אוג","ספט","אוק","נוב","דצמ"],dayNames:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],dayNamesShort:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],dayNamesMin:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""}),n.locale("he",{buttonText:{month:"חודש",week:"שבוע",day:"יום",list:"סדר יום"},allDayText:"כל היום",eventLimitText:"אחר",noEventsMessage:"אין אירועים להצגה",weekNumberTitle:"שבוע"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10==0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)},meridiem:function(e,a,t){return e<5?"לפנות בוקר":e<10?"בבוקר":e<12?t?'לפנה"צ':"לפני הצהריים":e<18?t?'אחה"צ':"אחרי הצהריים":"בערב"}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(134);var n=t(1);n.datepickerLocale("hi","hi",{closeText:"बंद",prevText:"पिछला",nextText:"अगला",currentText:"आज",monthNames:["जनवरी ","फरवरी","मार्च","अप्रेल","मई","जून","जूलाई","अगस्त ","सितम्बर","अक्टूबर","नवम्बर","दिसम्बर"],monthNamesShort:["जन","फर","मार्च","अप्रेल","मई","जून","जूलाई","अग","सित","अक्ट","नव","दि"],dayNames:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],dayNamesShort:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],dayNamesMin:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],weekHeader:"हफ्ता",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("hi",{buttonText:{month:"महीना",week:"सप्ताह",day:"दिन",list:"कार्यसूची"},allDayText:"सभी दिन",eventLimitText:function(e){return"+अधिक "+e},noEventsMessage:"कोई घटनाओं को प्रदर्शित करने के लिए"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},t={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return e.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",ss:"%d सेकंड",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return t[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return a[e]})},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,a){return 12===e&&(e=0),"रात"===a?e<4?e:e+12:"सुबह"===a?e:"दोपहर"===a?e>=10?e:e+12:"शाम"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"रात":e<10?"सुबह":e<17?"दोपहर":e<20?"शाम":"रात"},week:{dow:0,doy:6}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(136);var n=t(1);n.datepickerLocale("hr","hr",{closeText:"Zatvori",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Danas",monthNames:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],monthNamesShort:["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],dayNames:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],dayNamesShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayNamesMin:["Ne","Po","Ut","Sr","Če","Pe","Su"],weekHeader:"Tje",dateFormat:"dd.mm.yy.",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("hr",{buttonText:{prev:"Prijašnji",next:"Sljedeći",month:"Mjesec",week:"Tjedan",day:"Dan",list:"Raspored"},allDayText:"Cijeli dan",eventLimitText:function(e){return"+ još "+e},noEventsMessage:"Nema događaja za prikaz"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t){var n=e+" ";switch(t){case"ss":return n+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return a?"jedna minuta":"jedne minute";case"mm":return n+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return n+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return n+=1===e?"dan":"dana";case"MM":return n+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return n+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}return e.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:a,m:a,mm:a,h:a,hh:a,d:"dan",dd:a,M:"mjesec",MM:a,y:"godinu",yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(138);var n=t(1);n.datepickerLocale("hu","hu",{closeText:"bezár",prevText:"vissza",nextText:"előre",currentText:"ma",monthNames:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],monthNamesShort:["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Szep","Okt","Nov","Dec"],dayNames:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"],dayNamesShort:["Vas","Hét","Ked","Sze","Csü","Pén","Szo"],dayNamesMin:["V","H","K","Sze","Cs","P","Szo"],weekHeader:"Hét",dateFormat:"yy.mm.dd.",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:""}),n.locale("hu",{buttonText:{month:"Hónap",week:"Hét",day:"Nap",list:"Napló"},allDayText:"Egész nap",eventLimitText:"további",noEventsMessage:"Nincs megjeleníthető események"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t,n){var r=e;switch(t){case"s":return n||a?"néhány másodperc":"néhány másodperce";case"ss":return r+(n||a)?" másodperc":" másodperce";case"m":return"egy"+(n||a?" perc":" perce");case"mm":return r+(n||a?" perc":" perce");case"h":return"egy"+(n||a?" óra":" órája");case"hh":return r+(n||a?" óra":" órája");case"d":return"egy"+(n||a?" nap":" napja");case"dd":return r+(n||a?" nap":" napja");case"M":return"egy"+(n||a?" hónap":" hónapja");case"MM":return r+(n||a?" hónap":" hónapja");case"y":return"egy"+(n||a?" év":" éve");case"yy":return r+(n||a?" év":" éve")}return""}function t(e){return(e?"":"[múlt] ")+"["+n[this.day()]+"] LT[-kor]"}var n="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");return e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,a,t){return e<12?!0===t?"de":"DE":!0===t?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return t.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return t.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(140);var n=t(1);n.datepickerLocale("id","id",{closeText:"Tutup",prevText:"&#x3C;mundur",nextText:"maju&#x3E;",currentText:"hari ini",monthNames:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agus","Sep","Okt","Nop","Des"],dayNames:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],dayNamesShort:["Min","Sen","Sel","Rab","kam","Jum","Sab"],dayNamesMin:["Mg","Sn","Sl","Rb","Km","jm","Sb"],weekHeader:"Mg",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("id",{buttonText:{month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},allDayHtml:"Sehari<br/>penuh",eventLimitText:"lebih",noEventsMessage:"Tidak ada acara untuk ditampilkan"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"siang"===a?e>=11?e:e+12:"sore"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(142);var n=t(1);n.datepickerLocale("is","is",{closeText:"Loka",prevText:"&#x3C; Fyrri",nextText:"Næsti &#x3E;",currentText:"Í dag",monthNames:["Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Maí","Jún","Júl","Ágú","Sep","Okt","Nóv","Des"],dayNames:["Sunnudagur","Mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur"],dayNamesShort:["Sun","Mán","Þri","Mið","Fim","Fös","Lau"],dayNamesMin:["Su","Má","Þr","Mi","Fi","Fö","La"],weekHeader:"Vika",dateFormat:"dd.mm.yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("is",{buttonText:{month:"Mánuður",week:"Vika",day:"Dagur",list:"Dagskrá"},allDayHtml:"Allan<br/>daginn",eventLimitText:"meira",noEventsMessage:"Engir viðburðir til að sýna"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e){return e%100==11||e%10!=1}function t(e,t,n,r){var s=e+" ";switch(n){case"s":return t||r?"nokkrar sekúndur":"nokkrum sekúndum";case"ss":return a(e)?s+(t||r?"sekúndur":"sekúndum"):s+"sekúnda";case"m":return t?"mínúta":"mínútu";case"mm":return a(e)?s+(t||r?"mínútur":"mínútum"):t?s+"mínúta":s+"mínútu";case"hh":return a(e)?s+(t||r?"klukkustundir":"klukkustundum"):s+"klukkustund";case"d":return t?"dagur":r?"dag":"degi";case"dd":return a(e)?t?s+"dagar":s+(r?"daga":"dögum"):t?s+"dagur":s+(r?"dag":"degi");case"M":return t?"mánuður":r?"mánuð":"mánuði";case"MM":return a(e)?t?s+"mánuðir":s+(r?"mánuði":"mánuðum"):t?s+"mánuður":s+(r?"mánuð":"mánuði");case"y":return t||r?"ár":"ári";case"yy":return a(e)?s+(t||r?"ár":"árum"):s+(t||r?"ár":"ári")}}return e.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:t,ss:t,m:t,mm:t,h:"klukkustund",hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(144);var n=t(1);n.datepickerLocale("it","it",{closeText:"Chiudi",prevText:"&#x3C;Prec",nextText:"Succ&#x3E;",currentText:"Oggi",monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],dayNamesShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayNamesMin:["Do","Lu","Ma","Me","Gi","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("it",{buttonText:{month:"Mese",week:"Settimana",day:"Giorno",list:"Agenda"},allDayHtml:"Tutto il<br/>giorno",eventLimitText:function(e){return"+altri "+e},noEventsMessage:"Non ci sono eventi da visualizzare"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(146);var n=t(1);n.datepickerLocale("ja","ja",{closeText:"閉じる",prevText:"&#x3C;前",nextText:"次&#x3E;",currentText:"今日",monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],monthNamesShort:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayNames:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],dayNamesShort:["日","月","火","水","木","金","土"],dayNamesMin:["日","月","火","水","木","金","土"],weekHeader:"週",dateFormat:"yy/mm/dd",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"}),n.locale("ja",{buttonText:{month:"月",week:"週",day:"日",list:"予定リスト"},allDayText:"終日",eventLimitText:function(e){return"他 "+e+" 件"},noEventsMessage:"イベントが表示されないように"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 HH:mm dddd",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日 HH:mm dddd"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,a,t){return e<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",ss:"%d秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(148);var n=t(1);n.datepickerLocale("ka","ka",{closeText:"დახურვა",prevText:"წინა",nextText:"შემდეგი",currentText:"დღეს",monthNames:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],monthNamesShort:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],dayNames:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],dayNamesShort:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],dayNamesMin:["კვ","ორ","სა","ოთ","ხუ","პა","შა"],weekHeader:"კვ",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ka",{buttonText:{month:"თვე",week:"კვირა",day:"დღე",list:"დღის წესრიგი"},allDayText:"მთელი დღე",eventLimitText:function(e){return"+ კიდევ "+e},noEventsMessage:"ღონისძიებები არ არის"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის უკან"):/წელი/.test(e)?e.replace(/წელი$/,"წლის უკან"):void 0},s:"რამდენიმე წამი",ss:"%d წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},dayOfMonthOrdinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":e<20||e<=100&&e%20==0||e%100==0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(150);var n=t(1);n.datepickerLocale("kk","kk",{closeText:"Жабу",prevText:"&#x3C;Алдыңғы",nextText:"Келесі&#x3E;",currentText:"Бүгін",monthNames:["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],
monthNamesShort:["Қаң","Ақп","Нау","Сәу","Мам","Мау","Шіл","Там","Қыр","Қаз","Қар","Жел"],dayNames:["Жексенбі","Дүйсенбі","Сейсенбі","Сәрсенбі","Бейсенбі","Жұма","Сенбі"],dayNamesShort:["жкс","дсн","ссн","срс","бсн","жма","снб"],dayNamesMin:["Жк","Дс","Сс","Ср","Бс","Жм","Сн"],weekHeader:"Не",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("kk",{buttonText:{month:"Ай",week:"Апта",day:"Күн",list:"Күн тәртібі"},allDayText:"Күні бойы",eventLimitText:function(e){return"+ тағы "+e},noEventsMessage:"Көрсету үшін оқиғалар жоқ"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"};return e.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",ss:"%d секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(e){var t=e%10,n=e>=100?100:null;return e+(a[e]||a[t]||a[n])},week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(152);var n=t(1);n.datepickerLocale("ko","ko",{closeText:"닫기",prevText:"이전달",nextText:"다음달",currentText:"오늘",monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayNames:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],dayNamesShort:["일","월","화","수","목","금","토"],dayNamesMin:["일","월","화","수","목","금","토"],weekHeader:"주",dateFormat:"yy. m. d.",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"년"}),n.locale("ko",{buttonText:{month:"월",week:"주",day:"일",list:"일정목록"},allDayText:"종일",eventLimitText:"개",noEventsMessage:"일정이 없습니다"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"일";case"M":return e+"월";case"w":case"W":return e+"주";default:return e}},meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,a,t){return e<12?"오전":"오후"}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(154);var n=t(1);n.datepickerLocale("lb","lb",{closeText:"Fäerdeg",prevText:"Zréck",nextText:"Weider",currentText:"Haut",monthNames:["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"],dayNamesShort:["Son","Méi","Dën","Mët","Don","Fre","Sam"],dayNamesMin:["So","Mé","Dë","Më","Do","Fr","Sa"],weekHeader:"W",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("lb",{buttonText:{month:"Mount",week:"Woch",day:"Dag",list:"Terminiwwersiicht"},allDayText:"Ganzen Dag",eventLimitText:"méi",noEventsMessage:"Nee Evenementer ze affichéieren"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t,n){var r={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return a?r[t][0]:r[t][1]}function t(e){return r(e.substr(0,e.indexOf(" ")))?"a "+e:"an "+e}function n(e){return r(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e}function r(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var a=e%10,t=e/10;return r(0===a?t:a)}if(e<1e4){for(;e>=10;)e/=10;return r(e)}return e/=1e3,r(e)}return e.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:t,past:n,s:"e puer Sekonnen",ss:"%d Sekonnen",m:a,mm:"%d Minutten",h:a,hh:"%d Stonnen",d:a,dd:"%d Deeg",M:a,MM:"%d Méint",y:a,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(156);var n=t(1);n.datepickerLocale("lt","lt",{closeText:"Uždaryti",prevText:"&#x3C;Atgal",nextText:"Pirmyn&#x3E;",currentText:"Šiandien",monthNames:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],monthNamesShort:["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rugp","Rugs","Spa","Lap","Gru"],dayNames:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],dayNamesShort:["sek","pir","ant","tre","ket","pen","šeš"],dayNamesMin:["Se","Pr","An","Tr","Ke","Pe","Še"],weekHeader:"SAV",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:""}),n.locale("lt",{buttonText:{month:"Mėnuo",week:"Savaitė",day:"Diena",list:"Darbotvarkė"},allDayText:"Visą dieną",eventLimitText:"daugiau",noEventsMessage:"Nėra įvykių rodyti"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t,n){return a?"kelios sekundės":n?"kelių sekundžių":"kelias sekundes"}function t(e,a,t,n){return a?r(t)[0]:n?r(t)[1]:r(t)[2]}function n(e){return e%10==0||e>10&&e<20}function r(e){return d[e].split("_")}function s(e,a,s,d){var i=e+" ";return 1===e?i+t(e,a,s[0],d):a?i+(n(e)?r(s)[1]:r(s)[0]):d?i+r(s)[1]:i+(n(e)?r(s)[1]:r(s)[2])}var d={ss:"sekundė_sekundžių_sekundes",m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};return e.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:a,ss:s,m:t,mm:s,h:t,hh:s,d:t,dd:s,M:t,MM:s,y:t,yy:s},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(158);var n=t(1);n.datepickerLocale("lv","lv",{closeText:"Aizvērt",prevText:"Iepr.",nextText:"Nāk.",currentText:"Šodien",monthNames:["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],monthNamesShort:["Jan","Feb","Mar","Apr","Mai","Jūn","Jūl","Aug","Sep","Okt","Nov","Dec"],dayNames:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],dayNamesShort:["svt","prm","otr","tre","ctr","pkt","sst"],dayNamesMin:["Sv","Pr","Ot","Tr","Ct","Pk","Ss"],weekHeader:"Ned.",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("lv",{buttonText:{month:"Mēnesis",week:"Nedēļa",day:"Diena",list:"Dienas kārtība"},allDayText:"Visu dienu",eventLimitText:function(e){return"+vēl "+e},noEventsMessage:"Nav notikumu"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t){return t?a%10==1&&a%100!=11?e[2]:e[3]:a%10==1&&a%100!=11?e[0]:e[1]}function t(e,t,n){return e+" "+a(s[n],e,t)}function n(e,t,n){return a(s[n],e,t)}function r(e,a){return a?"dažas sekundes":"dažām sekundēm"}var s={ss:"sekundes_sekundēm_sekunde_sekundes".split("_"),m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};return e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:r,ss:t,m:n,mm:t,h:n,hh:t,d:n,dd:t,M:n,MM:t,y:n,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(160);var n=t(1);n.datepickerLocale("mk","mk",{closeText:"Затвори",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Денес",monthNames:["Јануари","Февруари","Март","Април","Мај","Јуни","Јули","Август","Септември","Октомври","Ноември","Декември"],monthNamesShort:["Јан","Фев","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Ное","Дек"],dayNames:["Недела","Понеделник","Вторник","Среда","Четврток","Петок","Сабота"],dayNamesShort:["Нед","Пон","Вто","Сре","Чет","Пет","Саб"],dayNamesMin:["Не","По","Вт","Ср","Че","Пе","Са"],weekHeader:"Сед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("mk",{buttonText:{month:"Месец",week:"Недела",day:"Ден",list:"График"},allDayText:"Цел ден",eventLimitText:function(e){return"+повеќе "+e},noEventsMessage:"Нема настани за прикажување"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-ев":0===t?e+"-ен":t>10&&t<20?e+"-ти":1===a?e+"-ви":2===a?e+"-ри":7===a||8===a?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(162);var n=t(1);n.datepickerLocale("ms-my","ms",{closeText:"Tutup",prevText:"&#x3C;Sebelum",nextText:"Selepas&#x3E;",currentText:"hari ini",monthNames:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],monthNamesShort:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],dayNames:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],dayNamesShort:["Aha","Isn","Sel","Rab","kha","Jum","Sab"],dayNamesMin:["Ah","Is","Se","Ra","Kh","Ju","Sa"],weekHeader:"Mg",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ms-my",{buttonText:{month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},allDayText:"Sepanjang hari",eventLimitText:function(e){return"masih ada "+e+" acara"},noEventsMessage:"Tiada peristiwa untuk dipaparkan"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?e>=11?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(164);var n=t(1);n.datepickerLocale("ms","ms",{closeText:"Tutup",prevText:"&#x3C;Sebelum",nextText:"Selepas&#x3E;",currentText:"hari ini",monthNames:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],monthNamesShort:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],dayNames:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],dayNamesShort:["Aha","Isn","Sel","Rab","kha","Jum","Sab"],dayNamesMin:["Ah","Is","Se","Ra","Kh","Ju","Sa"],weekHeader:"Mg",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ms",{buttonText:{month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},allDayText:"Sepanjang hari",eventLimitText:function(e){return"masih ada "+e+" acara"},noEventsMessage:"Tiada peristiwa untuk dipaparkan"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?e>=11?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(166);var n=t(1);n.datepickerLocale("nb","nb",{closeText:"Lukk",prevText:"&#xAB;Forrige",nextText:"Neste&#xBB;",currentText:"I dag",monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],monthNamesShort:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],dayNamesShort:["søn","man","tir","ons","tor","fre","lør"],dayNames:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],dayNamesMin:["sø","ma","ti","on","to","fr","lø"],weekHeader:"Uke",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("nb",{buttonText:{month:"Måned",week:"Uke",day:"Dag",list:"Agenda"},allDayText:"Hele dagen",eventLimitText:"til",noEventsMessage:"Ingen hendelser å vise"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(168);var n=t(1);n.datepickerLocale("nl-be","nl-BE",{closeText:"Sluiten",prevText:"←",nextText:"→",currentText:"Vandaag",monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],monthNamesShort:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesShort:["zon","maa","din","woe","don","vri","zat"],dayNamesMin:["zo","ma","di","wo","do","vr","za"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("nl-be",{buttonText:{month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayText:"Hele dag",eventLimitText:"extra",noEventsMessage:"Geen evenementen om te laten zien"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),t="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),n=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],r=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return e.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,n){return e?/-MMM-/.test(n)?t[e.month()]:a[e.month()]:a},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:n,longMonthsParse:n,shortMonthsParse:n,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(170);var n=t(1);n.datepickerLocale("nl","nl",{closeText:"Sluiten",prevText:"←",nextText:"→",currentText:"Vandaag",monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],monthNamesShort:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesShort:["zon","maa","din","woe","don","vri","zat"],dayNamesMin:["zo","ma","di","wo","do","vr","za"],weekHeader:"Wk",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("nl",{buttonText:{month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayText:"Hele dag",eventLimitText:"extra",noEventsMessage:"Geen evenementen om te laten zien"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),t="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),n=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],r=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,n){return e?/-MMM-/.test(n)?t[e.month()]:a[e.month()]:a},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:n,longMonthsParse:n,shortMonthsParse:n,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(172);var n=t(1);n.datepickerLocale("nn","nn",{closeText:"Lukk",prevText:"&#xAB;Førre",nextText:"Neste&#xBB;",currentText:"I dag",monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],monthNamesShort:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],dayNamesShort:["sun","mån","tys","ons","tor","fre","lau"],dayNames:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],dayNamesMin:["su","må","ty","on","to","fr","la"],weekHeader:"Veke",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("nn",{buttonText:{month:"Månad",week:"Veke",day:"Dag",list:"Agenda"},allDayText:"Heile dagen",eventLimitText:"til",noEventsMessage:"Ingen hendelser å vise"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",ss:"%d sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(174);var n=t(1);n.datepickerLocale("pl","pl",{closeText:"Zamknij",prevText:"&#x3C;Poprzedni",nextText:"Następny&#x3E;",currentText:"Dziś",monthNames:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],monthNamesShort:["Sty","Lu","Mar","Kw","Maj","Cze","Lip","Sie","Wrz","Pa","Lis","Gru"],dayNames:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],dayNamesShort:["Nie","Pn","Wt","Śr","Czw","Pt","So"],dayNamesMin:["N","Pn","Wt","Śr","Cz","Pt","So"],weekHeader:"Tydz",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("pl",{buttonText:{month:"Miesiąc",week:"Tydzień",day:"Dzień",list:"Plan dnia"},allDayText:"Cały dzień",eventLimitText:"więcej",noEventsMessage:"Brak wydarzeń do wyświetlenia"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function t(e,t,n){var r=e+" ";switch(n){case"ss":return r+(a(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return r+(a(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return r+(a(e)?"godziny":"godzin");case"MM":return r+(a(e)?"miesiące":"miesięcy");case"yy":return r+(a(e)?"lata":"lat")}}var n="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),r="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return e.defineLocale("pl",{months:function(e,a){return e?""===a?"("+r[e.month()]+"|"+n[e.month()]+")":/D MMMM/.test(a)?r[e.month()]:n[e.month()]:n},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:t,m:t,mm:t,h:t,hh:t,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:t,y:"rok",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(176);var n=t(1);n.datepickerLocale("pt-br","pt-BR",{closeText:"Fechar",prevText:"&#x3C;Anterior",nextText:"Próximo&#x3E;",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("pt-br",{buttonText:{month:"Mês",week:"Semana",day:"Dia",list:"Compromissos"},allDayText:"dia inteiro",eventLimitText:function(e){return"mais +"+e},noEventsMessage:"Não há eventos para mostrar"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},
calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº"})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(178);var n=t(1);n.datepickerLocale("pt","pt",{closeText:"Fechar",prevText:"Anterior",nextText:"Seguinte",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],weekHeader:"Sem",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("pt",{buttonText:{month:"Mês",week:"Semana",day:"Dia",list:"Agenda"},allDayText:"Todo o dia",eventLimitText:"mais",noEventsMessage:"Não há eventos para mostrar"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(180);var n=t(1);n.datepickerLocale("ro","ro",{closeText:"Închide",prevText:"&#xAB; Luna precedentă",nextText:"Luna următoare &#xBB;",currentText:"Azi",monthNames:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],monthNamesShort:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"],dayNamesShort:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],dayNamesMin:["Du","Lu","Ma","Mi","Jo","Vi","Sâ"],weekHeader:"Săpt",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ro",{buttonText:{prev:"precedentă",next:"următoare",month:"Lună",week:"Săptămână",day:"Zi",list:"Agendă"},allDayText:"Toată ziua",eventLimitText:function(e){return"+alte "+e},noEventsMessage:"Nu există evenimente de afișat"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t){var n={ss:"secunde",mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},r=" ";return(e%100>=20||e>=100&&e%100==0)&&(r=" de "),e+r+n[t]}return e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",ss:a,m:"un minut",mm:a,h:"o oră",hh:a,d:"o zi",dd:a,M:"o lună",MM:a,y:"un an",yy:a},week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(182);var n=t(1);n.datepickerLocale("ru","ru",{closeText:"Закрыть",prevText:"&#x3C;Пред",nextText:"След&#x3E;",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Нед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("ru",{buttonText:{month:"Месяц",week:"Неделя",day:"День",list:"Повестка дня"},allDayText:"Весь день",eventLimitText:function(e){return"+ ещё "+e},noEventsMessage:"Нет событий для отображения"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a){var t=e.split("_");return a%10==1&&a%100!=11?t[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]:t[2]}function t(e,t,n){var r={ss:t?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===n?t?"минута":"минуту":e+" "+a(r[n],+e)}var n=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];return e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:n,longMonthsParse:n,shortMonthsParse:n,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В следующее] dddd [в] LT";case 1:case 2:case 4:return"[В следующий] dddd [в] LT";case 3:case 5:case 6:return"[В следующую] dddd [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:t,m:t,mm:t,h:"час",hh:t,d:"день",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,a,t){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(184);var n=t(1);n.datepickerLocale("sk","sk",{closeText:"Zavrieť",prevText:"&#x3C;Predchádzajúci",nextText:"Nasledujúci&#x3E;",currentText:"Dnes",monthNames:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"],monthNamesShort:["Jan","Feb","Mar","Apr","Máj","Jún","Júl","Aug","Sep","Okt","Nov","Dec"],dayNames:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],dayNamesShort:["Ned","Pon","Uto","Str","Štv","Pia","Sob"],dayNamesMin:["Ne","Po","Ut","St","Št","Pia","So"],weekHeader:"Ty",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("sk",{buttonText:{month:"Mesiac",week:"Týždeň",day:"Deň",list:"Rozvrh"},allDayText:"Celý deň",eventLimitText:function(e){return"+ďalšie: "+e},noEventsMessage:"Žiadne akcie na zobrazenie"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e){return e>1&&e<5}function t(e,t,n,r){var s=e+" ";switch(n){case"s":return t||r?"pár sekúnd":"pár sekundami";case"ss":return t||r?s+(a(e)?"sekundy":"sekúnd"):s+"sekundami";case"m":return t?"minúta":r?"minútu":"minútou";case"mm":return t||r?s+(a(e)?"minúty":"minút"):s+"minútami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?s+(a(e)?"hodiny":"hodín"):s+"hodinami";case"d":return t||r?"deň":"dňom";case"dd":return t||r?s+(a(e)?"dni":"dní"):s+"dňami";case"M":return t||r?"mesiac":"mesiacom";case"MM":return t||r?s+(a(e)?"mesiace":"mesiacov"):s+"mesiacmi";case"y":return t||r?"rok":"rokom";case"yy":return t||r?s+(a(e)?"roky":"rokov"):s+"rokmi"}}var n="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),r="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");return e.defineLocale("sk",{months:n,monthsShort:r,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(186);var n=t(1);n.datepickerLocale("sl","sl",{closeText:"Zapri",prevText:"&#x3C;Prejšnji",nextText:"Naslednji&#x3E;",currentText:"Trenutni",monthNames:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],dayNames:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"],dayNamesShort:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],dayNamesMin:["Ne","Po","To","Sr","Če","Pe","So"],weekHeader:"Teden",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("sl",{buttonText:{month:"Mesec",week:"Teden",day:"Dan",list:"Dnevni red"},allDayText:"Ves dan",eventLimitText:"več",noEventsMessage:"Ni dogodkov za prikaz"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a,t,n){var r=e+" ";switch(t){case"s":return a||n?"nekaj sekund":"nekaj sekundami";case"ss":return r+=1===e?a?"sekundo":"sekundi":2===e?a||n?"sekundi":"sekundah":e<5?a||n?"sekunde":"sekundah":"sekund";case"m":return a?"ena minuta":"eno minuto";case"mm":return r+=1===e?a?"minuta":"minuto":2===e?a||n?"minuti":"minutama":e<5?a||n?"minute":"minutami":a||n?"minut":"minutami";case"h":return a?"ena ura":"eno uro";case"hh":return r+=1===e?a?"ura":"uro":2===e?a||n?"uri":"urama":e<5?a||n?"ure":"urami":a||n?"ur":"urami";case"d":return a||n?"en dan":"enim dnem";case"dd":return r+=1===e?a||n?"dan":"dnem":2===e?a||n?"dni":"dnevoma":a||n?"dni":"dnevi";case"M":return a||n?"en mesec":"enim mesecem";case"MM":return r+=1===e?a||n?"mesec":"mesecem":2===e?a||n?"meseca":"mesecema":e<5?a||n?"mesece":"meseci":a||n?"mesecev":"meseci";case"y":return a||n?"eno leto":"enim letom";case"yy":return r+=1===e?a||n?"leto":"letom":2===e?a||n?"leti":"letoma":e<5?a||n?"leta":"leti":a||n?"let":"leti"}}return e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(188);var n=t(1);n.datepickerLocale("sq","sq",{closeText:"mbylle",prevText:"&#x3C;mbrapa",nextText:"Përpara&#x3E;",currentText:"sot",monthNames:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],monthNamesShort:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],dayNames:["E Diel","E Hënë","E Martë","E Mërkurë","E Enjte","E Premte","E Shtune"],dayNamesShort:["Di","Hë","Ma","Më","En","Pr","Sh"],dayNamesMin:["Di","Hë","Ma","Më","En","Pr","Sh"],weekHeader:"Ja",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("sq",{buttonText:{month:"Muaj",week:"Javë",day:"Ditë",list:"Listë"},allDayHtml:"Gjithë<br/>ditën",eventLimitText:function(e){return"+më tepër "+e},noEventsMessage:"Nuk ka evente për të shfaqur"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,a,t){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",ss:"%d sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(190);var n=t(1);n.datepickerLocale("sr-cyrl","sr",{closeText:"Затвори",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Данас",monthNames:["Јануар","Фебруар","Март","Април","Мај","Јун","Јул","Август","Септембар","Октобар","Новембар","Децембар"],monthNamesShort:["Јан","Феб","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Нов","Дец"],dayNames:["Недеља","Понедељак","Уторак","Среда","Четвртак","Петак","Субота"],dayNamesShort:["Нед","Пон","Уто","Сре","Чет","Пет","Суб"],dayNamesMin:["Не","По","Ут","Ср","Че","Пе","Су"],weekHeader:"Сед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("sr-cyrl",{buttonText:{prev:"Претходна",next:"следећи",month:"Месец",week:"Недеља",day:"Дан",list:"Планер"},allDayText:"Цео дан",eventLimitText:function(e){return"+ још "+e},noEventsMessage:"Нема догађаја за приказ"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a={words:{ss:["секунда","секунде","секунди"],m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&e<=4?a[1]:a[2]},translate:function(e,t,n){var r=a.words[n];return 1===n.length?t?r[0]:r[1]:e+" "+a.correctGrammaticalCase(e,r)}};return e.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){return["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",ss:a.translate,m:a.translate,mm:a.translate,h:a.translate,hh:a.translate,d:"дан",dd:a.translate,M:"месец",MM:a.translate,y:"годину",yy:a.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(192);var n=t(1);n.datepickerLocale("sr","sr-SR",{closeText:"Zatvori",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Danas",monthNames:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],dayNames:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],dayNamesShort:["Ned","Pon","Uto","Sre","Čet","Pet","Sub"],dayNamesMin:["Ne","Po","Ut","Sr","Če","Pe","Su"],weekHeader:"Sed",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("sr",{buttonText:{prev:"Prethodna",next:"Sledeći",month:"Mеsеc",week:"Nеdеlja",day:"Dan",list:"Planеr"},allDayText:"Cеo dan",eventLimitText:function(e){return"+ još "+e},noEventsMessage:"Nеma događaja za prikaz"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a={words:{ss:["sekunda","sekunde","sekundi"],m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&e<=4?a[1]:a[2]},translate:function(e,t,n){var r=a.words[n];return 1===n.length?t?r[0]:r[1]:e+" "+a.correctGrammaticalCase(e,r)}};return e.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",ss:a.translate,m:a.translate,mm:a.translate,h:a.translate,hh:a.translate,d:"dan",dd:a.translate,M:"mesec",MM:a.translate,y:"godinu",yy:a.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(194);var n=t(1);n.datepickerLocale("sv","sv",{closeText:"Stäng",prevText:"&#xAB;Förra",nextText:"Nästa&#xBB;",currentText:"Idag",monthNames:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNamesShort:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],dayNames:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],dayNamesMin:["Sö","Må","Ti","On","To","Fr","Lö"],weekHeader:"Ve",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("sv",{buttonText:{month:"Månad",week:"Vecka",day:"Dag",list:"Program"},allDayText:"Heldag",eventLimitText:"till",noEventsMessage:"Inga händelser att visa"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"e":1===a?"a":2===a?"a":"e")},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(196);var n=t(1);n.datepickerLocale("th","th",{closeText:"ปิด",prevText:"&#xAB;&#xA0;ย้อน",nextText:"ถัดไป&#xA0;&#xBB;",currentText:"วันนี้",monthNames:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],monthNamesShort:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],dayNames:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],dayNamesShort:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],dayNamesMin:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("th",{buttonText:{month:"เดือน",week:"สัปดาห์",day:"วัน",list:"แผนงาน"},allDayText:"ตลอดวัน",eventLimitText:"เพิ่มเติม",noEventsMessage:"ไม่มีกิจกรรมที่จะแสดง"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,a,t){return e<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",ss:"%d วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(198);var n=t(1);n.datepickerLocale("tr","tr",{closeText:"kapat",prevText:"&#x3C;geri",nextText:"ileri&#x3e",currentText:"bugün",monthNames:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],monthNamesShort:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],dayNames:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],dayNamesShort:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],dayNamesMin:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],weekHeader:"Hf",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("tr",{buttonText:{next:"ileri",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},allDayText:"Tüm gün",eventLimitText:"daha fazla",noEventsMessage:"Herhangi bir etkinlik görüntülemek için"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){var a={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};return e.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},dayOfMonthOrdinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(e){if(0===e)return e+"'ıncı";var t=e%10,n=e%100-t,r=e>=100?100:null;return e+(a[t]||a[n]||a[r])},week:{dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(200);var n=t(1);n.datepickerLocale("uk","uk",{closeText:"Закрити",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Сьогодні",monthNames:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],monthNamesShort:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],dayNames:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"],dayNamesShort:["нед","пнд","вів","срд","чтв","птн","сбт"],dayNamesMin:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Тиж",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("uk",{buttonText:{month:"Місяць",week:"Тиждень",day:"День",list:"Порядок денний"},allDayText:"Увесь день",eventLimitText:function(e){return"+ще "+e+"..."},noEventsMessage:"Немає подій для відображення"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){function a(e,a){var t=e.split("_");return a%10==1&&a%100!=11?t[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]:t[2]}function t(e,t,n){var r={ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===n?t?"хвилина":"хвилину":"h"===n?t?"година":"годину":e+" "+a(r[n],+e)}function n(e,a){var t={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return e?t[/(\[[ВвУу]\]) ?dddd/.test(a)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(a)?"genitive":"nominative"][e.day()]:t.nominative}function r(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}return e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:n,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:r("[Сьогодні "),nextDay:r("[Завтра "),lastDay:r("[Вчора "),nextWeek:r("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return r("[Минулої] dddd [").call(this);case 1:case 2:case 4:return r("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:t,m:t,mm:t,h:"годину",hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,a,t){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{
dow:1,doy:7}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(202);var n=t(1);n.datepickerLocale("vi","vi",{closeText:"Đóng",prevText:"&#x3C;Trước",nextText:"Tiếp&#x3E;",currentText:"Hôm nay",monthNames:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"],monthNamesShort:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayNames:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],dayNamesShort:["CN","T2","T3","T4","T5","T6","T7"],dayNamesMin:["CN","T2","T3","T4","T5","T6","T7"],weekHeader:"Tu",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.locale("vi",{buttonText:{month:"Tháng",week:"Tuần",day:"Ngày",list:"Lịch biểu"},allDayText:"Cả ngày",eventLimitText:function(e){return"+ thêm "+e},noEventsMessage:"Không có sự kiện để hiển thị"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"sa":"SA":t?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",ss:"%d giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(204);var n=t(1);n.datepickerLocale("zh-cn","zh-CN",{closeText:"关闭",prevText:"&#x3C;上月",nextText:"下月&#x3E;",currentText:"今天",monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesShort:["周日","周一","周二","周三","周四","周五","周六"],dayNamesMin:["日","一","二","三","四","五","六"],weekHeader:"周",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"}),n.locale("zh-cn",{buttonText:{month:"月",week:"周",day:"日",list:"日程"},allDayText:"全天",eventLimitText:function(e){return"另外 "+e+" 个"},noEventsMessage:"没有事件显示"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"下午"===a||"晚上"===a?e+12:e>=11?e:e+12},meridiem:function(e,a,t){var n=100*e+a;return n<600?"凌晨":n<900?"早上":n<1130?"上午":n<1230?"中午":n<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",ss:"%d 秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}})})},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),t(206);var n=t(1);n.datepickerLocale("zh-tw","zh-TW",{closeText:"關閉",prevText:"&#x3C;上月",nextText:"下月&#x3E;",currentText:"今天",monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesShort:["周日","周一","周二","周三","周四","周五","周六"],dayNamesMin:["日","一","二","三","四","五","六"],weekHeader:"周",dateFormat:"yy/mm/dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"}),n.locale("zh-tw",{buttonText:{month:"月",week:"週",day:"天",list:"活動列表"},allDayText:"整天",eventLimitText:"顯示更多",noEventsMessage:"没有任何活動"})},function(e,a,t){!function(e,a){a(t(0))}(0,function(e){return e.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"中午"===a?e>=11?e:e+12:"下午"===a||"晚上"===a?e+12:void 0},meridiem:function(e,a,t){var n=100*e+a;return n<600?"凌晨":n<900?"早上":n<1130?"上午":n<1230?"中午":n<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){t(65),t(67),t(69),t(71),t(73),t(75),t(77),t(79),t(81),t(83),t(85),t(87),t(89),t(91),t(93),t(95),t(97),t(99),t(101),t(103),t(105),t(107),t(109),t(111),t(113),t(115),t(117),t(119),t(121),t(123),t(125),t(127),t(129),t(131),t(133),t(135),t(137),t(139),t(141),t(143),t(145),t(147),t(149),t(151),t(153),t(155),t(157),t(159),t(161),t(163),t(165),t(167),t(169),t(171),t(173),t(175),t(177),t(179),t(181),t(183),t(185),t(187),t(189),t(191),t(193),t(195),t(197),t(199),t(201),t(203),t(205),e.exports=t(433)},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t(1);n.locale("en"),r.locale("en"),window.jQuery.datepicker&&window.jQuery.datepicker.setDefaults(window.jQuery.datepicker.regional[""])}])});;
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.element=t,this.$element=e(t)}var e=window.Zepto,i=window.Waypoint;e.each(["off","on","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),t.prototype.offset=function(){return this.element!==this.element.window?this.$element.offset():void 0},e.each(["width","height"],function(i,o){function n(t,i){return function(t){var n=this.$element,r=n[o](),s={width:["left","right"],height:["top","bottom"]};return e.each(s[o],function(e,o){r+=parseInt(n.css("padding-"+o),10),i&&(r+=parseInt(n.css("border-"+o+"-width"),10)),t&&(r+=parseInt(n.css("margin-"+o),10))}),r}}var r=e.camelCase("inner-"+o),s=e.camelCase("outer-"+o);t.prototype[r]=n(!1),t.prototype[s]=n(!0)}),e.each(["extend","inArray"],function(i,o){t[o]=e[o]}),t.isEmptyObject=function(t){for(var e in t)return!1;return!0},i.adapters.push({name:"zepto",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();;
/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.10
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
!function(l,e){"function"==typeof define&&define.amd?define(["jquery"],e):e(l.jQuery)}(this,function(l){"use strict";function e(e){if(t.webkit&&!e)return{height:0,width:0};if(!t.data.outer){var o={border:"none","box-sizing":"content-box",height:"200px",margin:"0",padding:"0",width:"200px"};t.data.inner=l("<div>").css(l.extend({},o)),t.data.outer=l("<div>").css(l.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},o)).append(t.data.inner).appendTo("body")}return t.data.outer.scrollLeft(1e3).scrollTop(1e3),{height:Math.ceil(t.data.outer.offset().top-t.data.inner.offset().top||0),width:Math.ceil(t.data.outer.offset().left-t.data.inner.offset().left||0)}}function o(){var l=e(!0);return!(l.height||l.width)}function s(l){var e=l.originalEvent;return e.axis&&e.axis===e.HORIZONTAL_AXIS?!1:e.wheelDeltaX?!1:!0}var r=!1,t={data:{index:0,name:"scrollbar"},macosx:/mac/i.test(navigator.platform),mobile:/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),overlay:null,scroll:null,scrolls:[],webkit:/webkit/i.test(navigator.userAgent)&&!/edge\/\d+/i.test(navigator.userAgent)};t.scrolls.add=function(l){this.remove(l).push(l)},t.scrolls.remove=function(e){for(;l.inArray(e,this)>=0;)this.splice(l.inArray(e,this),1);return this};var i={autoScrollSize:!0,autoUpdate:!0,debug:!1,disableBodyScroll:!1,duration:200,ignoreMobile:!1,ignoreOverlay:!1,scrollStep:30,showArrows:!1,stepScrolling:!0,scrollx:null,scrolly:null,onDestroy:null,onInit:null,onScroll:null,onUpdate:null},n=function(s){t.scroll||(t.overlay=o(),t.scroll=e(),a(),l(window).resize(function(){var l=!1;if(t.scroll&&(t.scroll.height||t.scroll.width)){var o=e();(o.height!==t.scroll.height||o.width!==t.scroll.width)&&(t.scroll=o,l=!0)}a(l)})),this.container=s,this.namespace=".scrollbar_"+t.data.index++,this.options=l.extend({},i,window.jQueryScrollbarOptions||{}),this.scrollTo=null,this.scrollx={},this.scrolly={},s.data(t.data.name,this),t.scrolls.add(this)};n.prototype={destroy:function(){if(this.wrapper){this.container.removeData(t.data.name),t.scrolls.remove(this);var e=this.container.scrollLeft(),o=this.container.scrollTop();this.container.insertBefore(this.wrapper).css({height:"",margin:"","max-height":""}).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(o),this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),this.wrapper.remove(),l(document).add("body").off(this.namespace),l.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container])}},init:function(e){var o=this,r=this.container,i=this.containerWrapper||r,n=this.namespace,c=l.extend(this.options,e||{}),a={x:this.scrollx,y:this.scrolly},d=this.wrapper,h={scrollLeft:r.scrollLeft(),scrollTop:r.scrollTop()};if(t.mobile&&c.ignoreMobile||t.overlay&&c.ignoreOverlay||t.macosx&&!t.webkit)return!1;if(d)i.css({height:"auto","margin-bottom":-1*t.scroll.height+"px","margin-right":-1*t.scroll.width+"px","max-height":""});else{if(this.wrapper=d=l("<div>").addClass("scroll-wrapper").addClass(r.attr("class")).css("position","absolute"==r.css("position")?"absolute":"relative").insertBefore(r).append(r),r.is("textarea")&&(this.containerWrapper=i=l("<div>").insertBefore(r).append(r),d.addClass("scroll-textarea")),i.addClass("scroll-content").css({height:"auto","margin-bottom":-1*t.scroll.height+"px","margin-right":-1*t.scroll.width+"px","max-height":""}),r.on("scroll"+n,function(e){l.isFunction(c.onScroll)&&c.onScroll.call(o,{maxScroll:a.y.maxScrollOffset,scroll:r.scrollTop(),size:a.y.size,visible:a.y.visible},{maxScroll:a.x.maxScrollOffset,scroll:r.scrollLeft(),size:a.x.size,visible:a.x.visible}),a.x.isVisible&&a.x.scroll.bar.css("left",r.scrollLeft()*a.x.kx+"px"),a.y.isVisible&&a.y.scroll.bar.css("top",r.scrollTop()*a.y.kx+"px")}),d.on("scroll"+n,function(){d.scrollTop(0).scrollLeft(0)}),c.disableBodyScroll){var p=function(l){s(l)?a.y.isVisible&&a.y.mousewheel(l):a.x.isVisible&&a.x.mousewheel(l)};d.on("MozMousePixelScroll"+n,p),d.on("mousewheel"+n,p),t.mobile&&d.on("touchstart"+n,function(e){var o=e.originalEvent.touches&&e.originalEvent.touches[0]||e,s={pageX:o.pageX,pageY:o.pageY},t={left:r.scrollLeft(),top:r.scrollTop()};l(document).on("touchmove"+n,function(l){var e=l.originalEvent.targetTouches&&l.originalEvent.targetTouches[0]||l;r.scrollLeft(t.left+s.pageX-e.pageX),r.scrollTop(t.top+s.pageY-e.pageY),l.preventDefault()}),l(document).on("touchend"+n,function(){l(document).off(n)})})}l.isFunction(c.onInit)&&c.onInit.apply(this,[r])}l.each(a,function(e,t){var i=null,d=1,h="x"===e?"scrollLeft":"scrollTop",p=c.scrollStep,u=function(){var l=r[h]();r[h](l+p),1==d&&l+p>=f&&(l=r[h]()),-1==d&&f>=l+p&&(l=r[h]()),r[h]()==l&&i&&i()},f=0;t.scroll||(t.scroll=o._getScroll(c["scroll"+e]).addClass("scroll-"+e),c.showArrows&&t.scroll.addClass("scroll-element_arrows_visible"),t.mousewheel=function(l){if(!t.isVisible||"x"===e&&s(l))return!0;if("y"===e&&!s(l))return a.x.mousewheel(l),!0;var i=-1*l.originalEvent.wheelDelta||l.originalEvent.detail,n=t.size-t.visible-t.offset;return(i>0&&n>f||0>i&&f>0)&&(f+=i,0>f&&(f=0),f>n&&(f=n),o.scrollTo=o.scrollTo||{},o.scrollTo[h]=f,setTimeout(function(){o.scrollTo&&(r.stop().animate(o.scrollTo,240,"linear",function(){f=r[h]()}),o.scrollTo=null)},1)),l.preventDefault(),!1},t.scroll.on("MozMousePixelScroll"+n,t.mousewheel).on("mousewheel"+n,t.mousewheel).on("mouseenter"+n,function(){f=r[h]()}),t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown"+n,function(s){if(1!=s.which)return!0;d=1;var n={eventOffset:s["x"===e?"pageX":"pageY"],maxScrollValue:t.size-t.visible-t.offset,scrollbarOffset:t.scroll.bar.offset()["x"===e?"left":"top"],scrollbarSize:t.scroll.bar["x"===e?"outerWidth":"outerHeight"]()},a=0,v=0;return l(this).hasClass("scroll-arrow")?(d=l(this).hasClass("scroll-arrow_more")?1:-1,p=c.scrollStep*d,f=d>0?n.maxScrollValue:0):(d=n.eventOffset>n.scrollbarOffset+n.scrollbarSize?1:n.eventOffset<n.scrollbarOffset?-1:0,p=Math.round(.75*t.visible)*d,f=n.eventOffset-n.scrollbarOffset-(c.stepScrolling?1==d?n.scrollbarSize:0:Math.round(n.scrollbarSize/2)),f=r[h]()+f/t.kx),o.scrollTo=o.scrollTo||{},o.scrollTo[h]=c.stepScrolling?r[h]()+p:f,c.stepScrolling&&(i=function(){f=r[h](),clearInterval(v),clearTimeout(a),a=0,v=0},a=setTimeout(function(){v=setInterval(u,40)},c.duration+100)),setTimeout(function(){o.scrollTo&&(r.animate(o.scrollTo,c.duration),o.scrollTo=null)},1),o._handleMouseDown(i,s)}),t.scroll.bar.on("mousedown"+n,function(s){if(1!=s.which)return!0;var i=s["x"===e?"pageX":"pageY"],c=r[h]();return t.scroll.addClass("scroll-draggable"),l(document).on("mousemove"+n,function(l){var o=parseInt((l["x"===e?"pageX":"pageY"]-i)/t.kx,10);r[h](c+o)}),o._handleMouseDown(function(){t.scroll.removeClass("scroll-draggable"),f=r[h]()},s)}))}),l.each(a,function(l,e){var o="scroll-scroll"+l+"_visible",s="x"==l?a.y:a.x;e.scroll.removeClass(o),s.scroll.removeClass(o),i.removeClass(o)}),l.each(a,function(e,o){l.extend(o,"x"==e?{offset:parseInt(r.css("left"),10)||0,size:r.prop("scrollWidth"),visible:d.width()}:{offset:parseInt(r.css("top"),10)||0,size:r.prop("scrollHeight"),visible:d.height()})}),this._updateScroll("x",this.scrollx),this._updateScroll("y",this.scrolly),l.isFunction(c.onUpdate)&&c.onUpdate.apply(this,[r]),l.each(a,function(l,e){var o="x"===l?"left":"top",s="x"===l?"outerWidth":"outerHeight",t="x"===l?"width":"height",i=parseInt(r.css(o),10)||0,n=e.size,a=e.visible+i,d=e.scroll.size[s]()+(parseInt(e.scroll.size.css(o),10)||0);c.autoScrollSize&&(e.scrollbarSize=parseInt(d*a/n,10),e.scroll.bar.css(t,e.scrollbarSize+"px")),e.scrollbarSize=e.scroll.bar[s](),e.kx=(d-e.scrollbarSize)/(n-a)||1,e.maxScrollOffset=n-a}),r.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll")},_getScroll:function(e){var o={advanced:['<div class="scroll-element">','<div class="scroll-element_corner"></div>','<div class="scroll-arrow scroll-arrow_less"></div>','<div class="scroll-arrow scroll-arrow_more"></div>','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_inner-wrapper">','<div class="scroll-element_inner scroll-element_track">','<div class="scroll-element_inner-bottom"></div>',"</div>","</div>",'<div class="scroll-bar">','<div class="scroll-bar_body">','<div class="scroll-bar_body-inner"></div>',"</div>",'<div class="scroll-bar_bottom"></div>','<div class="scroll-bar_center"></div>',"</div>","</div>","</div>"].join(""),simple:['<div class="scroll-element">','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_track"></div>','<div class="scroll-bar"></div>',"</div>","</div>"].join("")};return o[e]&&(e=o[e]),e||(e=o.simple),e="string"==typeof e?l(e).appendTo(this.wrapper):l(e),l.extend(e,{bar:e.find(".scroll-bar"),size:e.find(".scroll-element_size"),track:e.find(".scroll-element_track")}),e},_handleMouseDown:function(e,o){var s=this.namespace;return l(document).on("blur"+s,function(){l(document).add("body").off(s),e&&e()}),l(document).on("dragstart"+s,function(l){return l.preventDefault(),!1}),l(document).on("mouseup"+s,function(){l(document).add("body").off(s),e&&e()}),l("body").on("selectstart"+s,function(l){return l.preventDefault(),!1}),o&&o.preventDefault(),!1},_updateScroll:function(e,o){var s=this.container,r=this.containerWrapper||s,i="scroll-scroll"+e+"_visible",n="x"===e?this.scrolly:this.scrollx,c=parseInt(this.container.css("x"===e?"left":"top"),10)||0,a=this.wrapper,d=o.size,h=o.visible+c;o.isVisible=d-h>1,o.isVisible?(o.scroll.addClass(i),n.scroll.addClass(i),r.addClass(i)):(o.scroll.removeClass(i),n.scroll.removeClass(i),r.removeClass(i)),"y"===e&&(s.is("textarea")||h>d?r.css({height:h+t.scroll.height+"px","max-height":"none"}):r.css({"max-height":h+t.scroll.height+"px"})),(o.size!=s.prop("scrollWidth")||n.size!=s.prop("scrollHeight")||o.visible!=a.width()||n.visible!=a.height()||o.offset!=(parseInt(s.css("left"),10)||0)||n.offset!=(parseInt(s.css("top"),10)||0))&&(l.extend(this.scrollx,{offset:parseInt(s.css("left"),10)||0,size:s.prop("scrollWidth"),visible:a.width()}),l.extend(this.scrolly,{offset:parseInt(s.css("top"),10)||0,size:this.container.prop("scrollHeight"),visible:a.height()}),this._updateScroll("x"===e?"y":"x",n))}};var c=n;l.fn.scrollbar=function(e,o){return"string"!=typeof e&&(o=e,e="init"),"undefined"==typeof o&&(o=[]),l.isArray(o)||(o=[o]),this.not("body, .scroll-wrapper").each(function(){var s=l(this),r=s.data(t.data.name);(r||"init"===e)&&(r||(r=new c(s)),r[e]&&r[e].apply(r,o))}),this},l.fn.scrollbar.options=i;var a=function(){var l=0,e=0;return function(o){var s,i,n,c,d,h,p;for(s=0;s<t.scrolls.length;s++)c=t.scrolls[s],i=c.container,n=c.options,d=c.wrapper,h=c.scrollx,p=c.scrolly,(o||n.autoUpdate&&d&&d.is(":visible")&&(i.prop("scrollWidth")!=h.size||i.prop("scrollHeight")!=p.size||d.width()!=h.visible||d.height()!=p.visible))&&(c.init(),n.debug&&(window.console&&console.log({scrollHeight:i.prop("scrollHeight")+":"+c.scrolly.size,scrollWidth:i.prop("scrollWidth")+":"+c.scrollx.size,visibleHeight:d.height()+":"+c.scrolly.visible,visibleWidth:d.width()+":"+c.scrollx.visible},!0),e++));r&&e>10?(window.console&&console.log("Scroll updates exceed 10"),a=function(){}):(clearTimeout(l),l=setTimeout(a,300))}}();window.angular&&!function(l){l.module("jQueryScrollbar",[]).provider("jQueryScrollbar",function(){var e=i;return{setOptions:function(o){l.extend(e,o)},$get:function(){return{options:l.copy(e)}}}}).directive("jqueryScrollbar",["jQueryScrollbar","$parse",function(l,e){return{restrict:"AC",link:function(o,s,r){var t=e(r.jqueryScrollbar),i=t(o);s.scrollbar(i||l.options).on("$destroy",function(){s.scrollbar("destroy")})}}}])}(window.angular)});;
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function( $ ){
  "use strict";

  $.fn.counterUp = function( options ) {

    // Defaults
    var settings = $.extend({
        'time': 400,
        'delay': 10
    }, options);

    return this.each(function(){

        // Store the object
        var $this = $(this);
        var $settings = settings;

        var counterUpper = function() {
            var nums = [];
            var divisions = $settings.time / $settings.delay;
            var num = $this.text();
            var isComma = /[0-9]+,[0-9]+/.test(num);
            num = num.replace(/,/g, '');
            var isInt = /^[0-9]+$/.test(num);
            var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
            var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

            // Generate list of incremental numbers to display
            for (var i = divisions; i >= 1; i--) {

                // Preserve as int if input was int
                var newNum = parseInt(num / divisions * i);

                // Preserve float if input was float
                if (isFloat) {
                    newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                }

                // Preserve commas if input had commas
                if (isComma) {
                    while (/(\d+)(\d{3})/.test(newNum.toString())) {
                        newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                    }
                }

                nums.unshift(newNum);
            }

            $this.data('counterup-nums', nums);
            $this.text('0');

            // Updates the number until we're done
            var f = function() {
                $this.text($this.data('counterup-nums').shift());
                if ($this.data('counterup-nums').length) {
                    setTimeout($this.data('counterup-func'), $settings.delay);
                } else {
                    delete $this.data('counterup-nums');
                    $this.data('counterup-nums', null);
                    $this.data('counterup-func', null);
                }
            };
            $this.data('counterup-func', f);

            // Start the count up
            setTimeout($this.data('counterup-func'), $settings.delay);
        };

        // Perform counts when the element gets into view
        $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
    });

  };

})( jQuery );;
/*	jQuery.flexMenu 1.5
	https://github.com/352Media/flexMenu
	Description: If a list is too long for all items to fit on one line, display a popup menu instead.
	Dependencies: jQuery, Modernizr (optional). Without Modernizr, the menu can only be shown on click (not hover). */

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function i(){e(window).width()===o&&e(window).height()===t||(e(f).each(function(){e(this).flexMenu({undo:!0}).flexMenu(this.options)}),o=e(window).width(),t=e(window).height())}function n(i){var n,l;n=e("li.flexMenu-viewMore.active"),l=n.not(i),l.removeClass("active").find("> ul").hide()}var l,o=e(window).width(),t=e(window).height(),f=[];e(window).resize(function(){clearTimeout(l),l=setTimeout(function(){i()},200)}),e.fn.flexMenu=function(i){var l,o=e.extend({threshold:2,cutoff:2,linkText:"More",linkTitle:"View More",linkTextAll:"Menu",linkTitleAll:"Open/Close Menu",shouldApply:function(){return!0},showOnHover:!0,popupAbsolute:!0,popupClass:"",undo:!1},i);return this.options=o,l=e.inArray(this,f),l>=0?f.splice(l,1):f.push(this),this.each(function(){function i(e){return Math.ceil(e.offset().top)>=w+v}var l,t,f,u,s,d,p,r=e(this),a=r.find("> li"),h=a.first(),c=a.last(),M=r.find("li").length,w=Math.floor(h.offset().top),v=Math.floor(h.outerHeight(!0)),x=!1;if(i(c)&&M>o.threshold&&!o.undo&&r.is(":visible")&&o.shouldApply()){var T=e('<ul class="flexMenu-popup" style="display:none;'+(o.popupAbsolute?" position: absolute;":"")+'"></ul>');for(T.addClass(o.popupClass),p=M;p>1;p--){if(l=r.find("> li:last-child"),t=i(l),p-1<=o.cutoff){e(r.children().get().reverse()).appendTo(T),x=!0;break}if(!t)break;l.appendTo(T)}x?r.append('<li class="flexMenu-viewMore flexMenu-allInPopup"><a href="#" title="'+o.linkTitleAll+'">'+o.linkTextAll+"</a></li>"):r.append('<li class="flexMenu-viewMore"><a href="#" title="'+o.linkTitle+'">'+o.linkText+"</a></li>"),f=r.find("> li.flexMenu-viewMore"),i(f)&&r.find("> li:nth-last-child(2)").appendTo(T),T.children().each(function(e,i){T.prepend(i)}),f.append(T),u=r.find("> li.flexMenu-viewMore > a"),u.click(function(e){n(f),T.toggle(),f.toggleClass("active"),e.preventDefault()}),o.showOnHover&&"undefined"!=typeof Modernizr&&!Modernizr.touch&&f.hover(function(){T.show(),e(this).addClass("active")},function(){T.hide(),e(this).removeClass("active")})}else if(o.undo&&r.find("ul.flexMenu-popup")){for(d=r.find("ul.flexMenu-popup"),s=d.find("li").length,p=1;p<=s;p++)d.find("> li:first-child").appendTo(r);d.remove(),r.find("> li.flexMenu-viewMore").remove()}})}});
;
// ==========================================================================
// Plyr
// plyr.js v2.0.18
// https://github.com/sampotts/plyr
// License: The MIT License (MIT)
// ==========================================================================
// Credits: http://paypal.github.io/accessible-html5-video-player/
// ==========================================================================

(function(root, factory) {
    'use strict';
    /*global define,module*/

    if (typeof module === 'object' && typeof module.exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(root, document);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define([], function() {
            return factory(root, document);
        });
    } else {
        // Browser globals (root is window)
        root.plyr = factory(root, document);
    }
})(typeof window !== 'undefined' ? window : this, function(window, document) {
    'use strict';

    // Globals
    var fullscreen,
        scroll = { x: 0, y: 0 },
        // Default config
        defaults = {
            enabled: true,
            debug: false,
            autoplay: false,
            loop: false,
            seekTime: 10,
            volume: 10,
            volumeMin: 0,
            volumeMax: 10,
            volumeStep: 1,
            duration: null,
            displayDuration: true,
            loadSprite: true,
            iconPrefix: 'plyr',
            iconUrl: 'https://cdn.plyr.io/2.0.18/plyr.svg',
            blankUrl: 'https://cdn.plyr.io/static/blank.mp4',
            clickToPlay: true,
            hideControls: true,
            showPosterOnEnd: false,
            disableContextMenu: true,
            keyboardShorcuts: {
                focused: true,
                global: false,
            },
            tooltips: {
                controls: false,
                seek: true,
            },
            selectors: {
                html5: 'video, audio',
                embed: '[data-type]',
                editable: 'input, textarea, select, [contenteditable]',
                container: '.plyr',
                controls: {
                    container: null,
                    wrapper: '.plyr__controls',
                },
                labels: '[data-plyr]',
                buttons: {
                    seek: '[data-plyr="seek"]',
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    forward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                },
                volume: {
                    input: '[data-plyr="volume"]',
                    display: '.plyr__volume--display',
                },
                progress: {
                    container: '.plyr__progress',
                    buffer: '.plyr__progress--buffer',
                    played: '.plyr__progress--played',
                },
                captions: '.plyr__captions',
                currentTime: '.plyr__time--current',
                duration: '.plyr__time--duration',
            },
            classes: {
                setup: 'plyr--setup',
                ready: 'plyr--ready',
                videoWrapper: 'plyr__video-wrapper',
                embedWrapper: 'plyr__video-embed',
                type: 'plyr--{0}',
                stopped: 'plyr--stopped',
                playing: 'plyr--playing',
                muted: 'plyr--muted',
                loading: 'plyr--loading',
                hover: 'plyr--hover',
                tooltip: 'plyr__tooltip',
                hidden: 'plyr__sr-only',
                hideControls: 'plyr--hide-controls',
                isIos: 'plyr--is-ios',
                isTouch: 'plyr--is-touch',
                captions: {
                    enabled: 'plyr--captions-enabled',
                    active: 'plyr--captions-active',
                },
                fullscreen: {
                    enabled: 'plyr--fullscreen-enabled',
                    fallback: 'plyr--fullscreen-fallback',
                    active: 'plyr--fullscreen-active',
                },
                tabFocus: 'tab-focus',
            },
            captions: {
                defaultActive: false,
            },
            fullscreen: {
                enabled: true,
                fallback: true,
                allowAudio: false,
            },
            storage: {
                enabled: true,
                key: 'plyr',
            },
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
            i18n: {
                restart: 'Restart',
                rewind: 'Rewind {seektime} secs',
                play: 'Play',
                pause: 'Pause',
                forward: 'Forward {seektime} secs',
                played: 'played',
                buffered: 'buffered',
                currentTime: 'Current time',
                duration: 'Duration',
                volume: 'Volume',
                toggleMute: 'Toggle Mute',
                toggleCaptions: 'Toggle Captions',
                toggleFullscreen: 'Toggle Fullscreen',
                frameTitle: 'Player for {title}',
            },
            types: {
                embed: ['youtube', 'vimeo', 'soundcloud'],
                html5: ['video', 'audio'],
            },
            // URLs
            urls: {
                vimeo: {
                    api: 'https://player.vimeo.com/api/player.js',
                },
                youtube: {
                    api: 'https://www.youtube.com/iframe_api',
                },
                soundcloud: {
                    api: 'https://w.soundcloud.com/player/api.js',
                },
            },
            // Custom control listeners
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                forward: null,
                mute: null,
                volume: null,
                captions: null,
                fullscreen: null,
            },
            // Events to watch on HTML5 media elements
            events: [
                'ready',
                'ended',
                'progress',
                'stalled',
                'playing',
                'waiting',
                'canplay',
                'canplaythrough',
                'loadstart',
                'loadeddata',
                'loadedmetadata',
                'timeupdate',
                'volumechange',
                'play',
                'pause',
                'error',
                'seeking',
                'seeked',
                'emptied',
            ],
            // Logging
            logPrefix: '[Plyr]',
        };

    // Credits: http://paypal.github.io/accessible-html5-video-player/
    // Unfortunately, due to mixed support, UA sniffing is required
    function _browserSniff() {
        var ua = navigator.userAgent,
            name = navigator.appName,
            fullVersion = '' + parseFloat(navigator.appVersion),
            majorVersion = parseInt(navigator.appVersion, 10),
            nameOffset,
            verOffset,
            ix,
            isIE = false,
            isFirefox = false,
            isChrome = false,
            isSafari = false;

        if (navigator.appVersion.indexOf('Windows NT') !== -1 && navigator.appVersion.indexOf('rv:11') !== -1) {
            // MSIE 11
            isIE = true;
            name = 'IE';
            fullVersion = '11';
        } else if ((verOffset = ua.indexOf('MSIE')) !== -1) {
            // MSIE
            isIE = true;
            name = 'IE';
            fullVersion = ua.substring(verOffset + 5);
        } else if ((verOffset = ua.indexOf('Chrome')) !== -1) {
            // Chrome
            isChrome = true;
            name = 'Chrome';
            fullVersion = ua.substring(verOffset + 7);
        } else if ((verOffset = ua.indexOf('Safari')) !== -1) {
            // Safari
            isSafari = true;
            name = 'Safari';
            fullVersion = ua.substring(verOffset + 7);
            if ((verOffset = ua.indexOf('Version')) !== -1) {
                fullVersion = ua.substring(verOffset + 8);
            }
        } else if ((verOffset = ua.indexOf('Firefox')) !== -1) {
            // Firefox
            isFirefox = true;
            name = 'Firefox';
            fullVersion = ua.substring(verOffset + 8);
        } else if ((nameOffset = ua.lastIndexOf(' ') + 1) < (verOffset = ua.lastIndexOf('/'))) {
            // In most other browsers, 'name/version' is at the end of userAgent
            name = ua.substring(nameOffset, verOffset);
            fullVersion = ua.substring(verOffset + 1);

            if (name.toLowerCase() === name.toUpperCase()) {
                name = navigator.appName;
            }
        }

        // Trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(';')) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }
        if ((ix = fullVersion.indexOf(' ')) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }

        // Get major version
        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // Return data
        return {
            name: name,
            version: majorVersion,
            isIE: isIE,
            isFirefox: isFirefox,
            isChrome: isChrome,
            isSafari: isSafari,
            isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
            isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
            isTouch: 'ontouchstart' in document.documentElement,
        };
    }

    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html
    // Related: http://www.leanbackplyr.com/test/h5mt.html
    function _supportMime(plyr, mimeType) {
        var media = plyr.media;

        if (plyr.type === 'video') {
            // Check type
            switch (mimeType) {
                case 'video/webm':
                    return !!(media.canPlayType && media.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ''));
                case 'video/mp4':
                    return !!(media.canPlayType && media.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ''));
                case 'video/ogg':
                    return !!(media.canPlayType && media.canPlayType('video/ogg; codecs="theora"').replace(/no/, ''));
            }
        } else if (plyr.type === 'audio') {
            // Check type
            switch (mimeType) {
                case 'audio/mpeg':
                    return !!(media.canPlayType && media.canPlayType('audio/mpeg;').replace(/no/, ''));
                case 'audio/ogg':
                    return !!(media.canPlayType && media.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
                case 'audio/wav':
                    return !!(media.canPlayType && media.canPlayType('audio/wav; codecs="1"').replace(/no/, ''));
            }
        }

        // If we got this far, we're stuffed
        return false;
    }

    // Inject a script
    function _injectScript(source) {
        if (document.querySelectorAll('script[src="' + source + '"]').length) {
            return;
        }

        var tag = document.createElement('script');
        tag.src = source;
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Element exists in an array
    function _inArray(haystack, needle) {
        return Array.prototype.indexOf && haystack.indexOf(needle) !== -1;
    }

    // Replace all
    function _replaceAll(string, find, replace) {
        return string.replace(new RegExp(find.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), replace);
    }

    // Wrap an element
    function _wrap(elements, wrapper) {
        // Convert `elements` to an array, if necessary.
        if (!elements.length) {
            elements = [elements];
        }

        // Loops backwards to prevent having to clone the wrapper on the
        // first element (see `child` below).
        for (var i = elements.length - 1; i >= 0; i--) {
            var child = i > 0 ? wrapper.cloneNode(true) : wrapper;
            var element = elements[i];

            // Cache the current parent and sibling.
            var parent = element.parentNode;
            var sibling = element.nextSibling;

            // Wrap the element (is automatically removed from its current
            // parent).
            child.appendChild(element);

            // If the element had a sibling, insert the wrapper before
            // the sibling to maintain the HTML structure; otherwise, just
            // append it to the parent.
            if (sibling) {
                parent.insertBefore(child, sibling);
            } else {
                parent.appendChild(child);
            }

            return child;
        }
    }

    // Unwrap an element
    // http://plainjs.com/javascript/manipulation/unwrap-a-dom-element-35/
    /*function _unwrap(wrapper) {
        // Get the element's parent node
        var parent = wrapper.parentNode;

        // Move all children out of the element
        while (wrapper.firstChild) {
            parent.insertBefore(wrapper.firstChild, wrapper);
        }

        // Remove the empty element
        parent.removeChild(wrapper);
    }*/

    // Remove an element
    function _remove(element) {
        if (!element) {
            return;
        }
        element.parentNode.removeChild(element);
    }

    // Prepend child
    function _prependChild(parent, element) {
        parent.insertBefore(element, parent.firstChild);
    }

    // Set attributes
    function _setAttributes(element, attributes) {
        for (var key in attributes) {
            element.setAttribute(key, _is.boolean(attributes[key]) && attributes[key] ? '' : attributes[key]);
        }
    }

    // Insert a HTML element
    function _insertElement(type, parent, attributes) {
        // Create a new <element>
        var element = document.createElement(type);

        // Set all passed attributes
        _setAttributes(element, attributes);

        // Inject the new element
        _prependChild(parent, element);
    }

    // Get a classname from selector
    function _getClassname(selector) {
        return selector.replace('.', '');
    }

    // Toggle class on an element
    function _toggleClass(element, className, state) {
        if (element) {
            if (element.classList) {
                element.classList[state ? 'add' : 'remove'](className);
            } else {
                var name = (' ' + element.className + ' ').replace(/\s+/g, ' ').replace(' ' + className + ' ', '');
                element.className = name + (state ? ' ' + className : '');
            }
        }
    }

    // Has class name
    function _hasClass(element, className) {
        if (element) {
            if (element.classList) {
                return element.classList.contains(className);
            } else {
                return new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className);
            }
        }
        return false;
    }

    // Element matches selector
    function _matches(element, selector) {
        var p = Element.prototype;

        var f =
            p.matches ||
            p.webkitMatchesSelector ||
            p.mozMatchesSelector ||
            p.msMatchesSelector ||
            function(s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            };

        return f.call(element, selector);
    }

    // Bind along with custom handler
    function _proxyListener(element, eventName, userListener, defaultListener, useCapture) {
        if (userListener) {
            // Register this before defaultListener
            _on(
                element,
                eventName,
                function(event) {
                    userListener.apply(element, [event]);
                },
                useCapture
            );
        }
        _on(
            element,
            eventName,
            function(event) {
                defaultListener.apply(element, [event]);
            },
            useCapture
        );
    }

    // Toggle event listener
    function _toggleListener(element, events, callback, toggle, useCapture) {
        var eventList = events.split(' ');

        // Whether the listener is a capturing listener or not
        // Default to false
        if (!_is.boolean(useCapture)) {
            useCapture = false;
        }

        // If a nodelist is passed, call itself on each node
        if (element instanceof NodeList) {
            for (var x = 0; x < element.length; x++) {
                if (element[x] instanceof Node) {
                    _toggleListener(element[x], arguments[1], arguments[2], arguments[3]);
                }
            }
            return;
        }

        // If a single node is passed, bind the event listener
        for (var i = 0; i < eventList.length; i++) {
            element[toggle ? 'addEventListener' : 'removeEventListener'](eventList[i], callback, useCapture);
        }
    }

    // Bind event
    function _on(element, events, callback, useCapture) {
        if (element) {
            _toggleListener(element, events, callback, true, useCapture);
        }
    }

    // Unbind event
    function _off(element, events, callback, useCapture) {
        if (element) {
            _toggleListener(element, events, callback, false, useCapture);
        }
    }

    // Trigger event
    function _event(element, type, bubbles, properties) {
        // Bail if no element
        if (!element || !type) {
            return;
        }

        // Default bubbles to false
        if (!_is.boolean(bubbles)) {
            bubbles = false;
        }

        // Create and dispatch the event
        var event = new CustomEvent(type, {
            bubbles: bubbles,
            detail: properties,
        });

        // Dispatch the event
        element.dispatchEvent(event);
    }

    // Toggle aria-pressed state on a toggle button
    // http://www.ssbbartgroup.com/blog/how-not-to-misuse-aria-states-properties-and-roles
    function _toggleState(target, state) {
        // Bail if no target
        if (!target) {
            return;
        }

        // Get state
        state = _is.boolean(state) ? state : !target.getAttribute('aria-pressed');

        // Set the attribute on target
        target.setAttribute('aria-pressed', state);

        return state;
    }

    // Get percentage
    function _getPercentage(current, max) {
        if (current === 0 || max === 0 || isNaN(current) || isNaN(max)) {
            return 0;
        }
        return (current / max * 100).toFixed(2);
    }

    // Deep extend/merge destination object with N more objects
    // http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    // Removed call to arguments.callee (used explicit function name instead)
    function _extend() {
        // Get arguments
        var objects = arguments;

        // Bail if nothing to merge
        if (!objects.length) {
            return;
        }

        // Return first if specified but nothing to merge
        if (objects.length === 1) {
            return objects[0];
        }

        // First object is the destination
        var destination = Array.prototype.shift.call(objects),
            length = objects.length;

        // Loop through all objects to merge
        for (var i = 0; i < length; i++) {
            var source = objects[i];

            for (var property in source) {
                if (source[property] && source[property].constructor && source[property].constructor === Object) {
                    destination[property] = destination[property] || {};
                    _extend(destination[property], source[property]);
                } else {
                    destination[property] = source[property];
                }
            }
        }

        return destination;
    }

    // Check variable types
    var _is = {
        object: function(input) {
            return input !== null && typeof input === 'object';
        },
        array: function(input) {
            return input !== null && (typeof input === 'object' && input.constructor === Array);
        },
        number: function(input) {
            return input !== null && ((typeof input === 'number' && !isNaN(input - 0)) || (typeof input === 'object' && input.constructor === Number));
        },
        string: function(input) {
            return input !== null && (typeof input === 'string' || (typeof input === 'object' && input.constructor === String));
        },
        boolean: function(input) {
            return input !== null && typeof input === 'boolean';
        },
        nodeList: function(input) {
            return input !== null && input instanceof NodeList;
        },
        htmlElement: function(input) {
            return input !== null && input instanceof HTMLElement;
        },
        function: function(input) {
            return input !== null && typeof input === 'function';
        },
        undefined: function(input) {
            return input !== null && typeof input === 'undefined';
        },
    };

    // Parse YouTube ID from url
    function _parseYouTubeId(url) {
        var regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        return url.match(regex) ? RegExp.$2 : url;
    }

    // Parse Vimeo ID from url
    function _parseVimeoId(url) {
        var regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
        return url.match(regex) ? RegExp.$2 : url;
    }

    // Fullscreen API
    function _fullscreen() {
        var fullscreen = {
                supportsFullScreen: false,
                isFullScreen: function() {
                    return false;
                },
                requestFullScreen: function() {},
                cancelFullScreen: function() {},
                fullScreenEventName: '',
                element: null,
                prefix: '',
            },
            browserPrefixes = 'webkit o moz ms khtml'.split(' ');

        // Check for native support
        if (!_is.undefined(document.cancelFullScreen)) {
            fullscreen.supportsFullScreen = true;
        } else {
            // Check for fullscreen support by vendor prefix
            for (var i = 0, il = browserPrefixes.length; i < il; i++) {
                fullscreen.prefix = browserPrefixes[i];

                if (!_is.undefined(document[fullscreen.prefix + 'CancelFullScreen'])) {
                    fullscreen.supportsFullScreen = true;
                    break;
                } else if (!_is.undefined(document.msExitFullscreen) && document.msFullscreenEnabled) {
                    // Special case for MS (when isn't it?)
                    fullscreen.prefix = 'ms';
                    fullscreen.supportsFullScreen = true;
                    break;
                }
            }
        }

        // Update methods to do something useful
        if (fullscreen.supportsFullScreen) {
            // Yet again Microsoft awesomeness,
            // Sometimes the prefix is 'ms', sometimes 'MS' to keep you on your toes
            fullscreen.fullScreenEventName = fullscreen.prefix === 'ms' ? 'MSFullscreenChange' : fullscreen.prefix + 'fullscreenchange';

            fullscreen.isFullScreen = function(element) {
                if (_is.undefined(element)) {
                    element = document.body;
                }
                switch (this.prefix) {
                    case '':
                        return document.fullscreenElement === element;
                    case 'moz':
                        return document.mozFullScreenElement === element;
                    default:
                        return document[this.prefix + 'FullscreenElement'] === element;
                }
            };
            fullscreen.requestFullScreen = function(element) {
                if (_is.undefined(element)) {
                    element = document.body;
                }
                return this.prefix === ''
                    ? element.requestFullScreen()
                    : element[this.prefix + (this.prefix === 'ms' ? 'RequestFullscreen' : 'RequestFullScreen')]();
            };
            fullscreen.cancelFullScreen = function() {
                return this.prefix === ''
                    ? document.cancelFullScreen()
                    : document[this.prefix + (this.prefix === 'ms' ? 'ExitFullscreen' : 'CancelFullScreen')]();
            };
            fullscreen.element = function() {
                return this.prefix === '' ? document.fullscreenElement : document[this.prefix + 'FullscreenElement'];
            };
        }

        return fullscreen;
    }

    // Local storage
    var _storage = {
        supported: (function() {
            // Try to use it (it might be disabled, e.g. user is in private/porn mode)
            // see: https://github.com/sampotts/plyr/issues/131
            try {
                // Add test item
                window.localStorage.setItem('___test', 'OK');

                // Get the test item
                var result = window.localStorage.getItem('___test');

                // Clean up
                window.localStorage.removeItem('___test');

                // Check if value matches
                return result === 'OK';
            } catch (e) {
                return false;
            }

            return false;
        })(),
    };

    // Player instance
    function Plyr(media, config) {
        var plyr = this,
            timers = {},
            api;

        // Set media
        plyr.media = media;
        var original = media.cloneNode(true);

        // Trigger events, with plyr instance passed
        function _triggerEvent(element, type, bubbles, properties) {
            _event(
                element,
                type,
                bubbles,
                _extend({}, properties, {
                    plyr: api,
                })
            );
        }

        // Debugging
        function _console(type, args) {
            if (config.debug && window.console) {
                args = Array.prototype.slice.call(args);

                if (_is.string(config.logPrefix) && config.logPrefix.length) {
                    args.unshift(config.logPrefix);
                }

                console[type].apply(console, args);
            }
        }
        var _log = function() {
                _console('log', arguments);
            },
            _warn = function() {
                _console('warn', arguments);
            };

        // Log config options
        _log('Config', config);

        // Get icon URL
        function _getIconUrl() {
            return {
                url: config.iconUrl,
                // If you're using svg4everybody you don't need absolute paths
                absolute: config.iconUrl.indexOf('http') === 0 || (plyr.browser.isIE && !window.svg4everybody),
            };
        }

        // Build the default HTML
        function _buildControls() {
            // Create html array
            var html = [],
                iconUrl = _getIconUrl(),
                iconPath = (!iconUrl.absolute ? iconUrl.url : '') + '#' + config.iconPrefix;

            // Larger overlaid play button
            if (_inArray(config.controls, 'play-large')) {
                html.push(
                    '<button type="button" data-plyr="play" class="plyr__play-large">',
                    '<svg><use xlink:href="' + iconPath + '-play" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.play + '</span>',
                    '</button>'
                );
            }

            html.push('<div class="plyr__controls">');

            // Restart button
            if (_inArray(config.controls, 'restart')) {
                html.push(
                    '<button type="button" data-plyr="restart">',
                    '<svg><use xlink:href="' + iconPath + '-restart" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.restart + '</span>',
                    '</button>'
                );
            }

            // Rewind button
            if (_inArray(config.controls, 'rewind')) {
                html.push(
                    '<button type="button" data-plyr="rewind">',
                    '<svg><use xlink:href="' + iconPath + '-rewind" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.rewind + '</span>',
                    '</button>'
                );
            }

            // Play Pause button
            // TODO: This should be a toggle button really?
            if (_inArray(config.controls, 'play')) {
                html.push(
                    '<button type="button" data-plyr="play">',
                    '<svg><use xlink:href="' + iconPath + '-play" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.play + '</span>',
                    '</button>',
                    '<button type="button" data-plyr="pause">',
                    '<svg><use xlink:href="' + iconPath + '-pause" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.pause + '</span>',
                    '</button>'
                );
            }

            // Fast forward button
            if (_inArray(config.controls, 'fast-forward')) {
                html.push(
                    '<button type="button" data-plyr="fast-forward">',
                    '<svg><use xlink:href="' + iconPath + '-fast-forward" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.forward + '</span>',
                    '</button>'
                );
            }

            // Progress
            if (_inArray(config.controls, 'progress')) {
                // Create progress
                html.push(
                    '<span class="plyr__progress">',
                    '<label for="seek{id}" class="plyr__sr-only">Seek</label>',
                    '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">',
                    '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>',
                    '<progress class="plyr__progress--buffer" max="100" value="0">',
                    '<span>0</span>% ' + config.i18n.buffered,
                    '</progress>'
                );

                // Seek tooltip
                if (config.tooltips.seek) {
                    html.push('<span class="plyr__tooltip">00:00</span>');
                }

                // Close
                html.push('</span>');
            }

            // Media current time display
            if (_inArray(config.controls, 'current-time')) {
                html.push(
                    '<span class="plyr__time">',
                    '<span class="plyr__sr-only">' + config.i18n.currentTime + '</span>',
                    '<span class="plyr__time--current">00:00</span>',
                    '</span>'
                );
            }

            // Media duration display
            if (_inArray(config.controls, 'duration')) {
                html.push(
                    '<span class="plyr__time">',
                    '<span class="plyr__sr-only">' + config.i18n.duration + '</span>',
                    '<span class="plyr__time--duration">00:00</span>',
                    '</span>'
                );
            }

            // Toggle mute button
            if (_inArray(config.controls, 'mute')) {
                html.push(
                    '<button type="button" data-plyr="mute">',
                    '<svg class="icon--muted"><use xlink:href="' + iconPath + '-muted" /></svg>',
                    '<svg><use xlink:href="' + iconPath + '-volume" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.toggleMute + '</span>',
                    '</button>'
                );
            }

            // Volume range control
            if (_inArray(config.controls, 'volume')) {
                html.push(
                    '<span class="plyr__volume">',
                    '<label for="volume{id}" class="plyr__sr-only">' + config.i18n.volume + '</label>',
                    '<input id="volume{id}" class="plyr__volume--input" type="range" min="' +
                        config.volumeMin +
                        '" max="' +
                        config.volumeMax +
                        '" value="' +
                        config.volume +
                        '" data-plyr="volume">',
                    '<progress class="plyr__volume--display" max="' + config.volumeMax + '" value="' + config.volumeMin + '" role="presentation"></progress>',
                    '</span>'
                );
            }

            // Toggle captions button
            if (_inArray(config.controls, 'captions')) {
                html.push(
                    '<button type="button" data-plyr="captions">',
                    '<svg class="icon--captions-on"><use xlink:href="' + iconPath + '-captions-on" /></svg>',
                    '<svg><use xlink:href="' + iconPath + '-captions-off" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.toggleCaptions + '</span>',
                    '</button>'
                );
            }

            // Toggle fullscreen button
            if (_inArray(config.controls, 'fullscreen')) {
                html.push(
                    '<button type="button" data-plyr="fullscreen">',
                    '<svg class="icon--exit-fullscreen"><use xlink:href="' + iconPath + '-exit-fullscreen" /></svg>',
                    '<svg><use xlink:href="' + iconPath + '-enter-fullscreen" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.toggleFullscreen + '</span>',
                    '</button>'
                );
            }

            // Close everything
            html.push('</div>');

            return html.join('');
        }

        // Setup fullscreen
        function _setupFullscreen() {
            if (!plyr.supported.full) {
                return;
            }

            if ((plyr.type !== 'audio' || config.fullscreen.allowAudio) && config.fullscreen.enabled) {
                // Check for native support
                var nativeSupport = fullscreen.supportsFullScreen;

                if (nativeSupport || (config.fullscreen.fallback && !_inFrame())) {
                    _log((nativeSupport ? 'Native' : 'Fallback') + ' fullscreen enabled');

                    // Add styling hook
                    if (!nativeSupport) {
                        _toggleClass(plyr.container, config.classes.fullscreen.fallback, true);
                    }

                    // Add styling hook
                    _toggleClass(plyr.container, config.classes.fullscreen.enabled, true);
                } else {
                    _log('Fullscreen not supported and fallback disabled');
                }

                // Toggle state
                if (plyr.buttons && plyr.buttons.fullscreen) {
                    _toggleState(plyr.buttons.fullscreen, false);
                }

                // Setup focus trap
                _focusTrap();
            }
        }

        // Setup captions
        function _setupCaptions() {
            // Bail if not HTML5 video
            if (plyr.type !== 'video') {
                return;
            }

            // Inject the container
            if (!_getElement(config.selectors.captions)) {
                plyr.videoContainer.insertAdjacentHTML('afterbegin', '<div class="' + _getClassname(config.selectors.captions) + '"></div>');
            }

            // Determine if HTML5 textTracks is supported
            plyr.usingTextTracks = false;
            if (plyr.media.textTracks) {
                plyr.usingTextTracks = true;
            }

            // Get URL of caption file if exists
            var captionSrc = '',
                kind,
                children = plyr.media.childNodes;

            for (var i = 0; i < children.length; i++) {
                if (children[i].nodeName.toLowerCase() === 'track') {
                    kind = children[i].kind;
                    if (kind === 'captions' || kind === 'subtitles') {
                        captionSrc = children[i].getAttribute('src');
                    }
                }
            }

            // Record if caption file exists or not
            plyr.captionExists = true;
            if (captionSrc === '') {
                plyr.captionExists = false;
                _log('No caption track found');
            } else {
                _log('Caption track found; URI: ' + captionSrc);
            }

            // If no caption file exists, hide container for caption text
            if (!plyr.captionExists) {
                _toggleClass(plyr.container, config.classes.captions.enabled);
            } else {
                // Turn off native caption rendering to avoid double captions
                // This doesn't seem to work in Safari 7+, so the <track> elements are removed from the dom below
                var tracks = plyr.media.textTracks;
                for (var x = 0; x < tracks.length; x++) {
                    tracks[x].mode = 'hidden';
                }

                // Enable UI
                _showCaptions(plyr);

                // Disable unsupported browsers than report false positive
                // Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1033144
                if ((plyr.browser.isIE && plyr.browser.version >= 10) || (plyr.browser.isFirefox && plyr.browser.version >= 31)) {
                    // Debugging
                    _log('Detected browser with known TextTrack issues - using manual fallback');

                    // Set to false so skips to 'manual' captioning
                    plyr.usingTextTracks = false;
                }

                // Rendering caption tracks
                // Native support required - http://caniuse.com/webvtt
                if (plyr.usingTextTracks) {
                    _log('TextTracks supported');

                    for (var y = 0; y < tracks.length; y++) {
                        var track = tracks[y];

                        if (track.kind === 'captions' || track.kind === 'subtitles') {
                            _on(track, 'cuechange', function() {
                                // Display a cue, if there is one
                                if (this.activeCues[0] && 'text' in this.activeCues[0]) {
                                    _setCaption(this.activeCues[0].getCueAsHTML());
                                } else {
                                    _setCaption();
                                }
                            });
                        }
                    }
                } else {
                    // Caption tracks not natively supported
                    _log('TextTracks not supported so rendering captions manually');

                    // Render captions from array at appropriate time
                    plyr.currentCaption = '';
                    plyr.captions = [];

                    if (captionSrc !== '') {
                        // Create XMLHttpRequest Object
                        var xhr = new XMLHttpRequest();

                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    var captions = [],
                                        caption,
                                        req = xhr.responseText;

                                    //According to webvtt spec, line terminator consists of one of the following
                                    // CRLF (U+000D U+000A), LF (U+000A) or CR (U+000D)
                                    var lineSeparator = '\r\n';
                                    if (req.indexOf(lineSeparator + lineSeparator) === -1) {
                                        if (req.indexOf('\r\r') !== -1) {
                                            lineSeparator = '\r';
                                        } else {
                                            lineSeparator = '\n';
                                        }
                                    }

                                    captions = req.split(lineSeparator + lineSeparator);

                                    for (var r = 0; r < captions.length; r++) {
                                        caption = captions[r];
                                        plyr.captions[r] = [];

                                        // Get the parts of the captions
                                        var parts = caption.split(lineSeparator),
                                            index = 0;

                                        // Incase caption numbers are added
                                        if (parts[index].indexOf(':') === -1) {
                                            index = 1;
                                        }

                                        plyr.captions[r] = [parts[index], parts[index + 1]];
                                    }

                                    // Remove first element ('VTT')
                                    plyr.captions.shift();

                                    _log('Successfully loaded the caption file via AJAX');
                                } else {
                                    _warn(config.logPrefix + 'There was a problem loading the caption file via AJAX');
                                }
                            }
                        };

                        xhr.open('get', captionSrc, true);

                        xhr.send();
                    }
                }
            }
        }

        // Set the current caption
        function _setCaption(caption) {
            /* jshint unused:false */
            var container = _getElement(config.selectors.captions),
                content = document.createElement('span');

            // Empty the container
            container.innerHTML = '';

            // Default to empty
            if (_is.undefined(caption)) {
                caption = '';
            }

            // Set the span content
            if (_is.string(caption)) {
                content.innerHTML = caption.trim();
            } else {
                content.appendChild(caption);
            }

            // Set new caption text
            container.appendChild(content);

            // Force redraw (for Safari)
            var redraw = container.offsetHeight;
        }

        // Captions functions
        // Seek the manual caption time and update UI
        function _seekManualCaptions(time) {
            // Utilities for caption time codes
            function _timecodeCommon(tc, pos) {
                var tcpair = [];
                tcpair = tc.split(' --> ');
                for (var i = 0; i < tcpair.length; i++) {
                    // WebVTT allows for extra meta data after the timestamp line
                    // So get rid of this if it exists
                    tcpair[i] = tcpair[i].replace(/(\d+:\d+:\d+\.\d+).*/, '$1');
                }
                return _subTcSecs(tcpair[pos]);
            }
            function _timecodeMin(tc) {
                return _timecodeCommon(tc, 0);
            }
            function _timecodeMax(tc) {
                return _timecodeCommon(tc, 1);
            }
            function _subTcSecs(tc) {
                if (tc === null || tc === undefined) {
                    return 0;
                } else {
                    var tc1 = [],
                        tc2 = [],
                        seconds;
                    tc1 = tc.split(',');
                    tc2 = tc1[0].split(':');
                    seconds = Math.floor(tc2[0] * 60 * 60) + Math.floor(tc2[1] * 60) + Math.floor(tc2[2]);
                    return seconds;
                }
            }

            // If it's not video, or we're using textTracks, bail.
            if (plyr.usingTextTracks || plyr.type !== 'video' || !plyr.supported.full) {
                return;
            }

            // Reset subcount
            plyr.subcount = 0;

            // Check time is a number, if not use currentTime
            // IE has a bug where currentTime doesn't go to 0
            // https://twitter.com/Sam_Potts/status/573715746506731521
            time = _is.number(time) ? time : plyr.media.currentTime;

            // If there's no subs available, bail
            if (!plyr.captions[plyr.subcount]) {
                return;
            }

            while (_timecodeMax(plyr.captions[plyr.subcount][0]) < time.toFixed(1)) {
                plyr.subcount++;
                if (plyr.subcount > plyr.captions.length - 1) {
                    plyr.subcount = plyr.captions.length - 1;
                    break;
                }
            }

            // Check if the next caption is in the current time range
            if (
                plyr.media.currentTime.toFixed(1) >= _timecodeMin(plyr.captions[plyr.subcount][0]) &&
                plyr.media.currentTime.toFixed(1) <= _timecodeMax(plyr.captions[plyr.subcount][0])
            ) {
                plyr.currentCaption = plyr.captions[plyr.subcount][1];

                // Render the caption
                _setCaption(plyr.currentCaption);
            } else {
                _setCaption();
            }
        }

        // Display captions container and button (for initialization)
        function _showCaptions() {
            // If there's no caption toggle, bail
            if (!plyr.buttons.captions) {
                return;
            }

            _toggleClass(plyr.container, config.classes.captions.enabled, true);

            // Try to load the value from storage
            var active = plyr.storage.captionsEnabled;

            // Otherwise fall back to the default config
            if (!_is.boolean(active)) {
                active = config.captions.defaultActive;
            }

            if (active) {
                _toggleClass(plyr.container, config.classes.captions.active, true);
                _toggleState(plyr.buttons.captions, true);
            }
        }

        // Find all elements
        function _getElements(selector) {
            return plyr.container.querySelectorAll(selector);
        }

        // Find a single element
        function _getElement(selector) {
            return _getElements(selector)[0];
        }

        // Determine if we're in an iframe
        function _inFrame() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        }

        // Trap focus inside container
        function _focusTrap() {
            var tabbables = _getElements('input:not([disabled]), button:not([disabled])'),
                first = tabbables[0],
                last = tabbables[tabbables.length - 1];

            function _checkFocus(event) {
                // If it is TAB
                if (event.which === 9 && plyr.isFullscreen) {
                    if (event.target === last && !event.shiftKey) {
                        // Move focus to first element that can be tabbed if Shift isn't used
                        event.preventDefault();
                        first.focus();
                    } else if (event.target === first && event.shiftKey) {
                        // Move focus to last element that can be tabbed if Shift is used
                        event.preventDefault();
                        last.focus();
                    }
                }
            }

            // Bind the handler
            _on(plyr.container, 'keydown', _checkFocus);
        }

        // Add elements to HTML5 media (source, tracks, etc)
        function _insertChildElements(type, attributes) {
            if (_is.string(attributes)) {
                _insertElement(type, plyr.media, { src: attributes });
            } else if (attributes.constructor === Array) {
                for (var i = attributes.length - 1; i >= 0; i--) {
                    _insertElement(type, plyr.media, attributes[i]);
                }
            }
        }

        // Insert controls
        function _injectControls() {
            // Sprite
            if (config.loadSprite) {
                var iconUrl = _getIconUrl();

                // Only load external sprite using AJAX
                if (iconUrl.absolute) {
                    _log('AJAX loading absolute SVG sprite' + (plyr.browser.isIE ? ' (due to IE)' : ''));
                    loadSprite(iconUrl.url, 'sprite-plyr');
                } else {
                    _log('Sprite will be used as external resource directly');
                }
            }

            // Make a copy of the html
            var html = config.html;

            // Insert custom video controls
            _log('Injecting custom controls');

            // If no controls are specified, create default
            if (!html) {
                html = _buildControls();
            }

            // Replace seek time instances
            html = _replaceAll(html, '{seektime}', config.seekTime);

            // Replace all id references with random numbers
            html = _replaceAll(html, '{id}', Math.floor(Math.random() * 10000));

            // Replace Title, if it exists
            if (config.title) {
                html = _replaceAll(html, '{title}', config.title);
            }

            // Controls container
            var target;

            // Inject to custom location
            if (_is.string(config.selectors.controls.container)) {
                target = document.querySelector(config.selectors.controls.container);
            }

            // Inject into the container by default
            if (!_is.htmlElement(target)) {
                target = plyr.container;
            }

            // Inject controls HTML
            target.insertAdjacentHTML('beforeend', html);

            // Setup tooltips
            if (config.tooltips.controls) {
                var labels = _getElements([config.selectors.controls.wrapper, ' ', config.selectors.labels, ' .', config.classes.hidden].join(''));

                for (var i = labels.length - 1; i >= 0; i--) {
                    var label = labels[i];

                    _toggleClass(label, config.classes.hidden, false);
                    _toggleClass(label, config.classes.tooltip, true);
                }
            }
        }

        // Find the UI controls and store references
        function _findElements() {
            try {
                plyr.controls = _getElement(config.selectors.controls.wrapper);

                // Buttons
                plyr.buttons = {};
                plyr.buttons.seek = _getElement(config.selectors.buttons.seek);
                plyr.buttons.play = _getElements(config.selectors.buttons.play);
                plyr.buttons.pause = _getElement(config.selectors.buttons.pause);
                plyr.buttons.restart = _getElement(config.selectors.buttons.restart);
                plyr.buttons.rewind = _getElement(config.selectors.buttons.rewind);
                plyr.buttons.forward = _getElement(config.selectors.buttons.forward);
                plyr.buttons.fullscreen = _getElement(config.selectors.buttons.fullscreen);

                // Inputs
                plyr.buttons.mute = _getElement(config.selectors.buttons.mute);
                plyr.buttons.captions = _getElement(config.selectors.buttons.captions);

                // Progress
                plyr.progress = {};
                plyr.progress.container = _getElement(config.selectors.progress.container);

                // Progress - Buffering
                plyr.progress.buffer = {};
                plyr.progress.buffer.bar = _getElement(config.selectors.progress.buffer);
                plyr.progress.buffer.text = plyr.progress.buffer.bar && plyr.progress.buffer.bar.getElementsByTagName('span')[0];

                // Progress - Played
                plyr.progress.played = _getElement(config.selectors.progress.played);

                // Seek tooltip
                plyr.progress.tooltip = plyr.progress.container && plyr.progress.container.querySelector('.' + config.classes.tooltip);

                // Volume
                plyr.volume = {};
                plyr.volume.input = _getElement(config.selectors.volume.input);
                plyr.volume.display = _getElement(config.selectors.volume.display);

                // Timing
                plyr.duration = _getElement(config.selectors.duration);
                plyr.currentTime = _getElement(config.selectors.currentTime);
                plyr.seekTime = _getElements(config.selectors.seekTime);

                return true;
            } catch (e) {
                _warn('It looks like there is a problem with your controls HTML');

                // Restore native video controls
                _toggleNativeControls(true);

                return false;
            }
        }

        // Toggle style hook
        function _toggleStyleHook() {
            _toggleClass(plyr.container, config.selectors.container.replace('.', ''), plyr.supported.full);
        }

        // Toggle native controls
        function _toggleNativeControls(toggle) {
            if (toggle && _inArray(config.types.html5, plyr.type)) {
                plyr.media.setAttribute('controls', '');
            } else {
                plyr.media.removeAttribute('controls');
            }
        }

        // Setup aria attribute for play and iframe title
        function _setTitle(iframe) {
            // Find the current text
            var label = config.i18n.play;

            // If there's a media title set, use that for the label
            if (_is.string(config.title) && config.title.length) {
                label += ', ' + config.title;

                // Set container label
                plyr.container.setAttribute('aria-label', config.title);
            }

            // If there's a play button, set label
            if (plyr.supported.full && plyr.buttons.play) {
                for (var i = plyr.buttons.play.length - 1; i >= 0; i--) {
                    plyr.buttons.play[i].setAttribute('aria-label', label);
                }
            }

            // Set iframe title
            // https://github.com/sampotts/plyr/issues/124
            if (_is.htmlElement(iframe)) {
                iframe.setAttribute('title', config.i18n.frameTitle.replace('{title}', config.title));
            }
        }

        // Setup localStorage
        function _setupStorage() {
            var value = null;
            plyr.storage = {};

            // Bail if we don't have localStorage support or it's disabled
            if (!_storage.supported || !config.storage.enabled) {
                return;
            }

            // Clean up old volume
            // https://github.com/sampotts/plyr/issues/171
            window.localStorage.removeItem('plyr-volume');

            // load value from the current key
            value = window.localStorage.getItem(config.storage.key);

            if (!value) {
                // Key wasn't set (or had been cleared), move along
                return;
            } else if (/^\d+(\.\d+)?$/.test(value)) {
                // If value is a number, it's probably volume from an older
                // version of plyr. See: https://github.com/sampotts/plyr/pull/313
                // Update the key to be JSON
                _updateStorage({ volume: parseFloat(value) });
            } else {
                // Assume it's JSON from this or a later version of plyr
                plyr.storage = JSON.parse(value);
            }
        }

        // Save a value back to local storage
        function _updateStorage(value) {
            // Bail if we don't have localStorage support or it's disabled
            if (!_storage.supported || !config.storage.enabled) {
                return;
            }

            // Update the working copy of the values
            _extend(plyr.storage, value);

            // Update storage
            window.localStorage.setItem(config.storage.key, JSON.stringify(plyr.storage));
        }

        // Setup media
        function _setupMedia() {
            // If there's no media, bail
            if (!plyr.media) {
                _warn('No media element found!');
                return;
            }

            if (plyr.supported.full) {
                // Add type class
                _toggleClass(plyr.container, config.classes.type.replace('{0}', plyr.type), true);

                // Add video class for embeds
                // This will require changes if audio embeds are added
                if (_inArray(config.types.embed, plyr.type)) {
                    _toggleClass(plyr.container, config.classes.type.replace('{0}', 'video'), true);
                }

                // If there's no autoplay attribute, assume the video is stopped and add state class
                _toggleClass(plyr.container, config.classes.stopped, config.autoplay);

                // Add iOS class
                _toggleClass(plyr.container, config.classes.isIos, plyr.browser.isIos);

                // Add touch class
                _toggleClass(plyr.container, config.classes.isTouch, plyr.browser.isTouch);

                // Inject the player wrapper
                if (plyr.type === 'video') {
                    // Create the wrapper div
                    var wrapper = document.createElement('div');
                    wrapper.setAttribute('class', config.classes.videoWrapper);

                    // Wrap the video in a container
                    _wrap(plyr.media, wrapper);

                    // Cache the container
                    plyr.videoContainer = wrapper;
                }
            }

            // Embeds
            if (_inArray(config.types.embed, plyr.type)) {
                _setupEmbed();
            }
        }

        // Setup YouTube/Vimeo
        function _setupEmbed() {
            var container = document.createElement('div'),
                mediaId,
                mediaUrl,
                id = plyr.type + '-' + Math.floor(Math.random() * 10000);

            // Parse IDs from URLs if supplied
            switch (plyr.type) {
                case 'youtube':
                    mediaId = _parseYouTubeId(plyr.embedId);
                    break;

                case 'vimeo':
                    mediaId = _parseVimeoId(plyr.embedId);
                    break;

                default:
                    mediaId = plyr.embedId;
            }

            // Remove old containers
            var containers = _getElements('[id^="' + plyr.type + '-"]');
            for (var i = containers.length - 1; i >= 0; i--) {
                _remove(containers[i]);
            }

            // Add embed class for responsive
            _toggleClass(plyr.media, config.classes.videoWrapper, true);
            _toggleClass(plyr.media, config.classes.embedWrapper, true);

            if (plyr.type === 'youtube') {
                // Create the YouTube container
                plyr.media.appendChild(container);

                // Set ID
                container.setAttribute('id', id);

                // Setup API
                if (_is.object(window.YT)) {
                    _youTubeReady(mediaId, container);
                } else {
                    // Load the API
                    _injectScript(config.urls.youtube.api);

                    // Setup callback for the API
                    window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [];

                    // Add to queue
                    window.onYouTubeReadyCallbacks.push(function() {
                        _youTubeReady(mediaId, container);
                    });

                    // Set callback to process queue
                    window.onYouTubeIframeAPIReady = function() {
                        window.onYouTubeReadyCallbacks.forEach(function(callback) {
                            callback();
                        });
                    };
                }
            } else if (plyr.type === 'vimeo') {
                // Vimeo needs an extra div to hide controls on desktop (which has full support)
                if (plyr.supported.full) {
                    plyr.media.appendChild(container);
                } else {
                    container = plyr.media;
                }

                // Set ID
                container.setAttribute('id', id);

                // Load the API if not already
                if (!_is.object(window.Vimeo)) {
                    _injectScript(config.urls.vimeo.api);

                    // Wait for fragaloop load
                    var vimeoTimer = window.setInterval(function() {
                        if (_is.object(window.Vimeo)) {
                            window.clearInterval(vimeoTimer);
                            _vimeoReady(mediaId, container);
                        }
                    }, 50);
                } else {
                    _vimeoReady(mediaId, container);
                }
            } else if (plyr.type === 'soundcloud') {
                // TODO: Currently unsupported and undocumented
                // Inject the iframe
                var soundCloud = document.createElement('iframe');

                // Watch for iframe load
                soundCloud.loaded = false;
                _on(soundCloud, 'load', function() {
                    soundCloud.loaded = true;
                });

                _setAttributes(soundCloud, {
                    src: 'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/' + mediaId,
                    id: id,
                });

                container.appendChild(soundCloud);
                plyr.media.appendChild(container);

                // Load the API if not already
                if (!window.SC) {
                    _injectScript(config.urls.soundcloud.api);
                }

                // Wait for SC load
                var soundCloudTimer = window.setInterval(function() {
                    if (window.SC && soundCloud.loaded) {
                        window.clearInterval(soundCloudTimer);
                        _soundcloudReady.call(soundCloud);
                    }
                }, 50);
            }
        }

        // When embeds are ready
        function _embedReady() {
            // Setup the UI and call ready if full support
            if (plyr.supported.full) {
                _setupInterface();
                _ready();
            }

            // Set title
            _setTitle(_getElement('iframe'));
        }

        // Handle YouTube API ready
        function _youTubeReady(videoId, container) {
            // Setup instance
            // https://developers.google.com/youtube/iframe_api_reference
            plyr.embed = new window.YT.Player(container.id, {
                videoId: videoId,
                playerVars: {
                    autoplay: config.autoplay ? 1 : 0,
                    controls: plyr.supported.full ? 0 : 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: config.captions.defaultActive ? 1 : 0,
                    cc_lang_pref: 'en',
                    wmode: 'transparent',
                    modestbranding: 1,
                    disablekb: 1,
                    origin: '*', // https://code.google.com/p/gdata-issues/issues/detail?id=5788#c45
                },
                events: {
                    onError: function(event) {
                        _triggerEvent(plyr.container, 'error', true, {
                            code: event.data,
                            embed: event.target,
                        });
                    },
                    onReady: function(event) {
                        // Get the instance
                        var instance = event.target;

                        // Create a faux HTML5 API using the YouTube API
                        plyr.media.play = function() {
                            instance.playVideo();
                            plyr.media.paused = false;
                        };
                        plyr.media.pause = function() {
                            instance.pauseVideo();
                            plyr.media.paused = true;
                        };
                        plyr.media.stop = function() {
                            instance.stopVideo();
                            plyr.media.paused = true;
                        };
                        plyr.media.duration = instance.getDuration();
                        plyr.media.paused = true;
                        plyr.media.currentTime = 0;
                        plyr.media.muted = instance.isMuted();

                        // Set title if possible
                        if (typeof instance.getVideoData === 'function') {
                            config.title = instance.getVideoData().title;
                        }

                        // Set the tabindex
                        if (plyr.supported.full) {
                            plyr.media.querySelector('iframe').setAttribute('tabindex', '-1');
                        }

                        // Update UI
                        _embedReady();

                        // Trigger timeupdate
                        _triggerEvent(plyr.media, 'timeupdate');

                        // Trigger timeupdate
                        _triggerEvent(plyr.media, 'durationchange');

                        // Reset timer
                        window.clearInterval(timers.buffering);

                        // Setup buffering
                        timers.buffering = window.setInterval(function() {
                            // Get loaded % from YouTube
                            plyr.media.buffered = instance.getVideoLoadedFraction();

                            // Trigger progress only when we actually buffer something
                            if (plyr.media.lastBuffered === null || plyr.media.lastBuffered < plyr.media.buffered) {
                                _triggerEvent(plyr.media, 'progress');
                            }

                            // Set last buffer point
                            plyr.media.lastBuffered = plyr.media.buffered;

                            // Bail if we're at 100%
                            if (plyr.media.buffered === 1) {
                                window.clearInterval(timers.buffering);

                                // Trigger event
                                _triggerEvent(plyr.media, 'canplaythrough');
                            }
                        }, 200);
                    },
                    onStateChange: function(event) {
                        // Get the instance
                        var instance = event.target;

                        // Reset timer
                        window.clearInterval(timers.playing);

                        // Handle events
                        // -1   Unstarted
                        // 0    Ended
                        // 1    Playing
                        // 2    Paused
                        // 3    Buffering
                        // 5    Video cued
                        switch (event.data) {
                            case 0:
                                plyr.media.paused = true;
                                _triggerEvent(plyr.media, 'ended');
                                break;

                            case 1:
                                plyr.media.paused = false;

                                // If we were seeking, fire seeked event
                                if (plyr.media.seeking) {
                                    _triggerEvent(plyr.media, 'seeked');
                                }

                                plyr.media.seeking = false;
                                _triggerEvent(plyr.media, 'play');
                                _triggerEvent(plyr.media, 'playing');

                                // Poll to get playback progress
                                timers.playing = window.setInterval(function() {
                                    // Set the current time
                                    plyr.media.currentTime = instance.getCurrentTime();

                                    // Trigger timeupdate
                                    _triggerEvent(plyr.media, 'timeupdate');
                                }, 100);

                                // Check duration again due to YouTube bug
                                // https://github.com/sampotts/plyr/issues/374
                                // https://code.google.com/p/gdata-issues/issues/detail?id=8690
                                if (plyr.media.duration !== instance.getDuration()) {
                                    plyr.media.duration = instance.getDuration();
                                    _triggerEvent(plyr.media, 'durationchange');
                                }

                                break;

                            case 2:
                                plyr.media.paused = true;
                                _triggerEvent(plyr.media, 'pause');
                                break;
                        }

                        _triggerEvent(plyr.container, 'statechange', false, {
                            code: event.data,
                        });
                    },
                },
            });
        }

        // Vimeo ready
        function _vimeoReady(mediaId, container) {
            // Setup instance
            // https://github.com/vimeo/player.js

            var options = {
                loop: config.loop,
                autoplay: config.autoplay,
                byline: false,
                portrait: false,
                title: false,
                speed: true,
                transparent: 0,
            };

            // Convert options into URL params for iframe
            function buildUrlParameters(options) {
                return Object.keys(options)
                    .map(function(key) {
                        return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
                    })
                    .join('&');
            }

            // Get Vimeo params for the iframe
            var params = buildUrlParameters(options);

            // Build an iframe
            var iframe = document.createElement('iframe');
            var src = 'https://player.vimeo.com/video/' + mediaId + '?' + params;
            iframe.setAttribute('src', src);
            iframe.setAttribute('allowfullscreen', '');
            container.appendChild(iframe);

            plyr.embed = new window.Vimeo.Player(iframe);

            // Create a faux HTML5 API using the Vimeo API
            plyr.media.play = function() {
                plyr.embed.play();
                plyr.media.paused = false;
            };
            plyr.media.pause = function() {
                plyr.embed.pause();
                plyr.media.paused = true;
            };
            plyr.media.stop = function() {
                plyr.embed.stop();
                plyr.media.paused = true;
            };

            plyr.media.paused = true;
            plyr.media.currentTime = 0;

            // Update UI
            _embedReady();

            plyr.embed.getCurrentTime().then(function(value) {
                plyr.media.currentTime = value;

                // Trigger timeupdate
                _triggerEvent(plyr.media, 'timeupdate');
            });

            plyr.embed.getDuration().then(function(value) {
                plyr.media.duration = value;

                // Trigger timeupdate
                _triggerEvent(plyr.media, 'durationchange');
            });

            // TODO: Captions
            /*if (config.captions.defaultActive) {
                plyr.embed.enableTextTrack('en');
            }*/

            plyr.embed.on('loaded', function() {
                // Fix keyboard focus issues
                // https://github.com/sampotts/plyr/issues/317
                if (_is.htmlElement(plyr.embed.element) && plyr.supported.full) {
                    plyr.embed.element.setAttribute('tabindex', '-1');
                }
            });

            plyr.embed.on('play', function() {
                plyr.media.paused = false;
                _triggerEvent(plyr.media, 'play');
                _triggerEvent(plyr.media, 'playing');
            });

            plyr.embed.on('pause', function() {
                plyr.media.paused = true;
                _triggerEvent(plyr.media, 'pause');
            });

            plyr.embed.on('timeupdate', function(data) {
                plyr.media.seeking = false;
                plyr.media.currentTime = data.seconds;
                _triggerEvent(plyr.media, 'timeupdate');
            });

            plyr.embed.on('progress', function(data) {
                plyr.media.buffered = data.percent;
                _triggerEvent(plyr.media, 'progress');

                if (parseInt(data.percent) === 1) {
                    // Trigger event
                    _triggerEvent(plyr.media, 'canplaythrough');
                }
            });

            plyr.embed.on('seeked', function() {
                plyr.media.seeking = false;
                _triggerEvent(plyr.media, 'seeked');
                _triggerEvent(plyr.media, 'play');
            });

            plyr.embed.on('ended', function() {
                plyr.media.paused = true;
                _triggerEvent(plyr.media, 'ended');
            });
        }

        // Soundcloud ready
        function _soundcloudReady() {
            /* jshint validthis: true */
            plyr.embed = window.SC.Widget(this);

            // Setup on ready
            plyr.embed.bind(window.SC.Widget.Events.READY, function() {
                // Create a faux HTML5 API using the Soundcloud API
                plyr.media.play = function() {
                    plyr.embed.play();
                    plyr.media.paused = false;
                };
                plyr.media.pause = function() {
                    plyr.embed.pause();
                    plyr.media.paused = true;
                };
                plyr.media.stop = function() {
                    plyr.embed.seekTo(0);
                    plyr.embed.pause();
                    plyr.media.paused = true;
                };

                plyr.media.paused = true;
                plyr.media.currentTime = 0;

                plyr.embed.getDuration(function(value) {
                    plyr.media.duration = value / 1000;

                    // Update UI
                    _embedReady();
                });

                plyr.embed.getPosition(function(value) {
                    plyr.media.currentTime = value;

                    // Trigger timeupdate
                    _triggerEvent(plyr.media, 'timeupdate');
                });

                plyr.embed.bind(window.SC.Widget.Events.PLAY, function() {
                    plyr.media.paused = false;
                    _triggerEvent(plyr.media, 'play');
                    _triggerEvent(plyr.media, 'playing');
                });

                plyr.embed.bind(window.SC.Widget.Events.PAUSE, function() {
                    plyr.media.paused = true;
                    _triggerEvent(plyr.media, 'pause');
                });

                plyr.embed.bind(window.SC.Widget.Events.PLAY_PROGRESS, function(data) {
                    plyr.media.seeking = false;
                    plyr.media.currentTime = data.currentPosition / 1000;
                    _triggerEvent(plyr.media, 'timeupdate');
                });

                plyr.embed.bind(window.SC.Widget.Events.LOAD_PROGRESS, function(data) {
                    plyr.media.buffered = data.loadProgress;
                    _triggerEvent(plyr.media, 'progress');

                    if (parseInt(data.loadProgress) === 1) {
                        // Trigger event
                        _triggerEvent(plyr.media, 'canplaythrough');
                    }
                });

                plyr.embed.bind(window.SC.Widget.Events.FINISH, function() {
                    plyr.media.paused = true;
                    _triggerEvent(plyr.media, 'ended');
                });
            });
        }

        // Play media
        function _play() {
            if ('play' in plyr.media) {
                plyr.media.play();
            }
        }

        // Pause media
        function _pause() {
            if ('pause' in plyr.media) {
                plyr.media.pause();
            }
        }

        // Toggle playback
        function _togglePlay(toggle) {
            // True toggle
            if (!_is.boolean(toggle)) {
                toggle = plyr.media.paused;
            }

            if (toggle) {
                _play();
            } else {
                _pause();
            }

            return toggle;
        }

        // Rewind
        function _rewind(seekTime) {
            // Use default if needed
            if (!_is.number(seekTime)) {
                seekTime = config.seekTime;
            }
            _seek(plyr.media.currentTime - seekTime);
        }

        // Fast forward
        function _forward(seekTime) {
            // Use default if needed
            if (!_is.number(seekTime)) {
                seekTime = config.seekTime;
            }
            _seek(plyr.media.currentTime + seekTime);
        }

        // Seek to time
        // The input parameter can be an event or a number
        function _seek(input) {
            var targetTime = 0,
                paused = plyr.media.paused,
                duration = _getDuration();

            if (_is.number(input)) {
                targetTime = input;
            } else if (_is.object(input) && _inArray(['input', 'change'], input.type)) {
                // It's the seek slider
                // Seek to the selected time
                targetTime = input.target.value / input.target.max * duration;
            }

            // Normalise targetTime
            if (targetTime < 0) {
                targetTime = 0;
            } else if (targetTime > duration) {
                targetTime = duration;
            }

            // Update seek range and progress
            _updateSeekDisplay(targetTime);

            // Set the current time
            // Try/catch incase the media isn't set and we're calling seek() from source() and IE moans
            try {
                plyr.media.currentTime = targetTime.toFixed(4);
            } catch (e) {}

            // Embeds
            if (_inArray(config.types.embed, plyr.type)) {
                switch (plyr.type) {
                    case 'youtube':
                        plyr.embed.seekTo(targetTime);
                        break;

                    case 'vimeo':
                        // Round to nearest second for vimeo
                        plyr.embed.setCurrentTime(targetTime.toFixed(0));
                        break;

                    case 'soundcloud':
                        plyr.embed.seekTo(targetTime * 1000);
                        break;
                }

                if (paused) {
                    _pause();
                }

                // Trigger timeupdate
                _triggerEvent(plyr.media, 'timeupdate');

                // Set seeking flag
                plyr.media.seeking = true;

                // Trigger seeking
                _triggerEvent(plyr.media, 'seeking');
            }

            // Logging
            _log('Seeking to ' + plyr.media.currentTime + ' seconds');

            // Special handling for 'manual' captions
            _seekManualCaptions(targetTime);
        }

        // Get the duration (or custom if set)
        function _getDuration() {
            // It should be a number, but parse it just incase
            var duration = parseInt(config.duration),
                // True duration
                mediaDuration = 0;

            // Only if duration available
            if (plyr.media.duration !== null && !isNaN(plyr.media.duration)) {
                mediaDuration = plyr.media.duration;
            }

            // If custom duration is funky, use regular duration
            return isNaN(duration) ? mediaDuration : duration;
        }

        // Check playing state
        function _checkPlaying() {
            _toggleClass(plyr.container, config.classes.playing, !plyr.media.paused);

            _toggleClass(plyr.container, config.classes.stopped, plyr.media.paused);

            _toggleControls(plyr.media.paused);
        }

        // Save scroll position
        function _saveScrollPosition() {
            scroll = {
                x: window.pageXOffset || 0,
                y: window.pageYOffset || 0,
            };
        }

        // Restore scroll position
        function _restoreScrollPosition() {
            window.scrollTo(scroll.x, scroll.y);
        }

        // Toggle fullscreen
        function _toggleFullscreen(event) {
            // We don't allow fullscreen on audio player
            if (plyr.type === 'audio') {
              return
            }

            // Check for native support
            var nativeSupport = fullscreen.supportsFullScreen;

            if (nativeSupport) {
                // If it's a fullscreen change event, update the UI
                if (event && event.type === fullscreen.fullScreenEventName) {
                    plyr.isFullscreen = fullscreen.isFullScreen(plyr.container);
                } else {
                    // Else it's a user request to enter or exit
                    if (!fullscreen.isFullScreen(plyr.container)) {
                        // Save scroll position
                        _saveScrollPosition();

                        // Request full screen
                        fullscreen.requestFullScreen(plyr.container);
                    } else {
                        // Bail from fullscreen
                        fullscreen.cancelFullScreen();
                    }

                    // Check if we're actually full screen (it could fail)
                    plyr.isFullscreen = fullscreen.isFullScreen(plyr.container);

                    return;
                }
            } else {
                // Otherwise, it's a simple toggle
                plyr.isFullscreen = !plyr.isFullscreen;

                // Bind/unbind escape key
                document.body.style.overflow = plyr.isFullscreen ? 'hidden' : '';
            }

            // Set class hook
            _toggleClass(plyr.container, config.classes.fullscreen.active, plyr.isFullscreen);

            // Trap focus
            _focusTrap(plyr.isFullscreen);

            // Set button state
            if (plyr.buttons && plyr.buttons.fullscreen) {
                _toggleState(plyr.buttons.fullscreen, plyr.isFullscreen);
            }

            // Trigger an event
            _triggerEvent(plyr.container, plyr.isFullscreen ? 'enterfullscreen' : 'exitfullscreen', true);

            // Restore scroll position
            if (!plyr.isFullscreen && nativeSupport) {
                _restoreScrollPosition();
            }
        }

        // Mute
        function _toggleMute(muted) {
            // If the method is called without parameter, toggle based on current value
            if (!_is.boolean(muted)) {
                muted = !plyr.media.muted;
            }

            // Set button state
            _toggleState(plyr.buttons.mute, muted);

            // Set mute on the player
            plyr.media.muted = muted;

            // If volume is 0 after unmuting, set to default
            if (plyr.media.volume === 0) {
                _setVolume(config.volume);
            }

            // Embeds
            if (_inArray(config.types.embed, plyr.type)) {
                // YouTube
                switch (plyr.type) {
                    case 'youtube':
                        plyr.embed[plyr.media.muted ? 'mute' : 'unMute']();
                        break;

                    case 'vimeo':
                    case 'soundcloud':
                        plyr.embed.setVolume(plyr.media.muted ? 0 : parseFloat(config.volume / config.volumeMax));
                        break;
                }

                // Trigger volumechange for embeds
                _triggerEvent(plyr.media, 'volumechange');
            }
        }

        // Set volume
        function _setVolume(volume) {
            var max = config.volumeMax,
                min = config.volumeMin;

            // Load volume from storage if no value specified
            if (_is.undefined(volume)) {
                volume = plyr.storage.volume;
            }

            // Use config if all else fails
            if (volume === null || isNaN(volume)) {
                volume = config.volume;
            }

            // Maximum is volumeMax
            if (volume > max) {
                volume = max;
            }
            // Minimum is volumeMin
            if (volume < min) {
                volume = min;
            }

            // Set the player volume
            plyr.media.volume = parseFloat(volume / max);

            // Set the display
            if (plyr.volume.display) {
                plyr.volume.display.value = volume;
            }

            // Embeds
            if (_inArray(config.types.embed, plyr.type)) {
                switch (plyr.type) {
                    case 'youtube':
                        plyr.embed.setVolume(plyr.media.volume * 100);
                        break;

                    case 'vimeo':
                    case 'soundcloud':
                        plyr.embed.setVolume(plyr.media.volume);
                        break;
                }

                // Trigger volumechange for embeds
                _triggerEvent(plyr.media, 'volumechange');
            }

            // Toggle muted state
            if (volume === 0) {
                plyr.media.muted = true;
            } else if (plyr.media.muted && volume > 0) {
                _toggleMute();
            }
        }

        // Increase volume
        function _increaseVolume(step) {
            var volume = plyr.media.muted ? 0 : plyr.media.volume * config.volumeMax;

            if (!_is.number(step)) {
                step = config.volumeStep;
            }

            _setVolume(volume + step);
        }

        // Decrease volume
        function _decreaseVolume(step) {
            var volume = plyr.media.muted ? 0 : plyr.media.volume * config.volumeMax;

            if (!_is.number(step)) {
                step = config.volumeStep;
            }

            _setVolume(volume - step);
        }

        // Update volume UI and storage
        function _updateVolume() {
            // Get the current volume
            var volume = plyr.media.muted ? 0 : plyr.media.volume * config.volumeMax;

            // Update the <input type="range"> if present
            if (plyr.supported.full) {
                if (plyr.volume.input) {
                    plyr.volume.input.value = volume;
                }
                if (plyr.volume.display) {
                    plyr.volume.display.value = volume;
                }
            }

            // Update the volume in storage
            _updateStorage({ volume: volume });

            // Toggle class if muted
            _toggleClass(plyr.container, config.classes.muted, volume === 0);

            // Update checkbox for mute state
            if (plyr.supported.full && plyr.buttons.mute) {
                _toggleState(plyr.buttons.mute, volume === 0);
            }
        }

        // Toggle captions
        function _toggleCaptions(show) {
            // If there's no full support, or there's no caption toggle
            if (!plyr.supported.full || !plyr.buttons.captions) {
                return;
            }

            // If the method is called without parameter, toggle based on current value
            if (!_is.boolean(show)) {
                show = plyr.container.className.indexOf(config.classes.captions.active) === -1;
            }

            // Set global
            plyr.captionsEnabled = show;

            // Toggle state
            _toggleState(plyr.buttons.captions, plyr.captionsEnabled);

            // Add class hook
            _toggleClass(plyr.container, config.classes.captions.active, plyr.captionsEnabled);

            // Trigger an event
            _triggerEvent(plyr.container, plyr.captionsEnabled ? 'captionsenabled' : 'captionsdisabled', true);

            // Save captions state to localStorage
            _updateStorage({ captionsEnabled: plyr.captionsEnabled });
        }

        // Check if media is loading
        function _checkLoading(event) {
            var loading = event.type === 'waiting';

            // Clear timer
            clearTimeout(timers.loading);

            // Timer to prevent flicker when seeking
            timers.loading = setTimeout(function() {
                // Toggle container class hook
                _toggleClass(plyr.container, config.classes.loading, loading);

                // Show controls if loading, hide if done
                _toggleControls(loading);
            }, loading ? 250 : 0);
        }

        // Update <progress> elements
        function _updateProgress(event) {
            if (!plyr.supported.full) {
                return;
            }

            var progress = plyr.progress.played,
                value = 0,
                duration = _getDuration();

            if (event) {
                switch (event.type) {
                    // Video playing
                    case 'timeupdate':
                    case 'seeking':
                        if (plyr.controls.pressed) {
                            return;
                        }

                        value = _getPercentage(plyr.media.currentTime, duration);

                        // Set seek range value only if it's a 'natural' time event
                        if (event.type === 'timeupdate' && plyr.buttons.seek) {
                            plyr.buttons.seek.value = value;
                        }

                        break;

                    // Check buffer status
                    case 'playing':
                    case 'progress':
                        progress = plyr.progress.buffer;
                        value = (function() {
                            var buffered = plyr.media.buffered;

                            if (buffered && buffered.length) {
                                // HTML5
                                return _getPercentage(buffered.end(0), duration);
                            } else if (_is.number(buffered)) {
                                // YouTube returns between 0 and 1
                                return buffered * 100;
                            }

                            return 0;
                        })();

                        break;
                }
            }

            // Set values
            _setProgress(progress, value);
        }

        // Set <progress> value
        function _setProgress(progress, value) {
            if (!plyr.supported.full) {
                return;
            }

            // Default to 0
            if (_is.undefined(value)) {
                value = 0;
            }
            // Default to buffer or bail
            if (_is.undefined(progress)) {
                if (plyr.progress && plyr.progress.buffer) {
                    progress = plyr.progress.buffer;
                } else {
                    return;
                }
            }

            // One progress element passed
            if (_is.htmlElement(progress)) {
                progress.value = value;
            } else if (progress) {
                // Object of progress + text element
                if (progress.bar) {
                    progress.bar.value = value;
                }
                if (progress.text) {
                    progress.text.innerHTML = value;
                }
            }
        }

        // Update the displayed time
        function _updateTimeDisplay(time, element) {
            // Bail if there's no duration display
            if (!element) {
                return;
            }

            // Fallback to 0
            if (isNaN(time)) {
                time = 0;
            }

            plyr.secs = parseInt(time % 60);
            plyr.mins = parseInt((time / 60) % 60);
            plyr.hours = parseInt((time / 60 / 60) % 60);

            // Do we need to display hours?
            var displayHours = parseInt((_getDuration() / 60 / 60) % 60) > 0;

            // Ensure it's two digits. For example, 03 rather than 3.
            plyr.secs = ('0' + plyr.secs).slice(-2);
            plyr.mins = ('0' + plyr.mins).slice(-2);

            // Render
            element.innerHTML = (displayHours ? plyr.hours + ':' : '') + plyr.mins + ':' + plyr.secs;
        }

        // Show the duration on metadataloaded
        function _displayDuration() {
            if (!plyr.supported.full) {
                return;
            }

            // Determine duration
            var duration = _getDuration() || 0;

            // If there's only one time display, display duration there
            if (!plyr.duration && config.displayDuration && plyr.media.paused) {
                _updateTimeDisplay(duration, plyr.currentTime);
            }

            // If there's a duration element, update content
            if (plyr.duration) {
                _updateTimeDisplay(duration, plyr.duration);
            }

            // Update the tooltip (if visible)
            _updateSeekTooltip();
        }

        // Handle time change event
        function _timeUpdate(event) {
            // Duration
            _updateTimeDisplay(plyr.media.currentTime, plyr.currentTime);

            // Ignore updates while seeking
            if (event && event.type === 'timeupdate' && plyr.media.seeking) {
                return;
            }

            // Playing progress
            _updateProgress(event);
        }

        // Update seek range and progress
        function _updateSeekDisplay(time) {
            // Default to 0
            if (!_is.number(time)) {
                time = 0;
            }

            var duration = _getDuration(),
                value = _getPercentage(time, duration);

            // Update progress
            if (plyr.progress && plyr.progress.played) {
                plyr.progress.played.value = value;
            }

            // Update seek range input
            if (plyr.buttons && plyr.buttons.seek) {
                plyr.buttons.seek.value = value;
            }
        }

        // Update hover tooltip for seeking
        function _updateSeekTooltip(event) {
            var duration = _getDuration();

            // Bail if setting not true
            if (!config.tooltips.seek || !plyr.progress.container || duration === 0) {
                return;
            }

            // Calculate percentage
            var clientRect = plyr.progress.container.getBoundingClientRect(),
                percent = 0,
                visible = config.classes.tooltip + '--visible';

            // Determine percentage, if already visible
            if (!event) {
                if (_hasClass(plyr.progress.tooltip, visible)) {
                    percent = plyr.progress.tooltip.style.left.replace('%', '');
                } else {
                    return;
                }
            } else {
                percent = 100 / clientRect.width * (event.pageX - clientRect.left);
            }

            // Set bounds
            if (percent < 0) {
                percent = 0;
            } else if (percent > 100) {
                percent = 100;
            }

            // Display the time a click would seek to
            _updateTimeDisplay(duration / 100 * percent, plyr.progress.tooltip);

            // Set position
            plyr.progress.tooltip.style.left = percent + '%';

            // Show/hide the tooltip
            // If the event is a moues in/out and percentage is inside bounds
            if (event && _inArray(['mouseenter', 'mouseleave'], event.type)) {
                _toggleClass(plyr.progress.tooltip, visible, event.type === 'mouseenter');
            }
        }

        // Show the player controls in fullscreen mode
        function _toggleControls(toggle) {
            // Don't hide if config says not to, it's audio, or not ready or loading
            if (!config.hideControls || plyr.type === 'audio') {
                return;
            }

            var delay = 0,
                isEnterFullscreen = false,
                show = toggle,
                loading = _hasClass(plyr.container, config.classes.loading);

            // Default to false if no boolean
            if (!_is.boolean(toggle)) {
                if (toggle && toggle.type) {
                    // Is the enter fullscreen event
                    isEnterFullscreen = toggle.type === 'enterfullscreen';

                    // Whether to show controls
                    show = _inArray(['mousemove', 'touchstart', 'mouseenter', 'focus'], toggle.type);

                    // Delay hiding on move events
                    if (_inArray(['mousemove', 'touchmove'], toggle.type)) {
                        delay = 2000;
                    }

                    // Delay a little more for keyboard users
                    if (toggle.type === 'focus') {
                        delay = 3000;
                    }
                } else {
                    show = _hasClass(plyr.container, config.classes.hideControls);
                }
            }

            // Clear timer every movement
            window.clearTimeout(timers.hover);

            // If the mouse is not over the controls, set a timeout to hide them
            if (show || plyr.media.paused || loading) {
                _toggleClass(plyr.container, config.classes.hideControls, false);

                // Always show controls when paused or if touch
                if (plyr.media.paused || loading) {
                    return;
                }

                // Delay for hiding on touch
                if (plyr.browser.isTouch) {
                    delay = 3000;
                }
            }

            // If toggle is false or if we're playing (regardless of toggle),
            // then set the timer to hide the controls
            if (!show || !plyr.media.paused) {
                timers.hover = window.setTimeout(function() {
                    // If the mouse is over the controls (and not entering fullscreen), bail
                    if ((plyr.controls.pressed || plyr.controls.hover) && !isEnterFullscreen) {
                        return;
                    }

                    _toggleClass(plyr.container, config.classes.hideControls, true);
                }, delay);
            }
        }

        // Add common function to retrieve media source
        function _source(source) {
            // If not null or undefined, parse it
            if (!_is.undefined(source)) {
                _updateSource(source);
                return;
            }

            // Return the current source
            var url;
            switch (plyr.type) {
                case 'youtube':
                    url = plyr.embed.getVideoUrl();
                    break;

                case 'vimeo':
                    plyr.embed.getVideoUrl.then(function(value) {
                        url = value;
                    });
                    break;

                case 'soundcloud':
                    plyr.embed.getCurrentSound(function(object) {
                        url = object.permalink_url;
                    });
                    break;

                default:
                    url = plyr.media.currentSrc;
                    break;
            }

            return url || '';
        }

        // Update source
        // Sources are not checked for support so be careful
        function _updateSource(source) {
            if (!_is.object(source) || !('sources' in source) || !source.sources.length) {
                _warn('Invalid source format');
                return;
            }

            // Remove ready class hook
            _toggleClass(plyr.container, config.classes.ready, false);

            // Pause playback
            _pause();

            // Update seek range and progress
            _updateSeekDisplay();

            // Reset buffer progress
            _setProgress();

            // Cancel current network requests
            _cancelRequests();

            // Setup new source
            function setup() {
                // Remove embed object
                plyr.embed = null;

                // Remove the old media
                _remove(plyr.media);

                // Remove video container
                if (plyr.type === 'video' && plyr.videoContainer) {
                    _remove(plyr.videoContainer);
                }

                // Reset class name
                if (plyr.container) {
                    plyr.container.removeAttribute('class');
                }

                // Set the type
                if ('type' in source) {
                    plyr.type = source.type;

                    // Get child type for video (it might be an embed)
                    if (plyr.type === 'video') {
                        var firstSource = source.sources[0];

                        if ('type' in firstSource && _inArray(config.types.embed, firstSource.type)) {
                            plyr.type = firstSource.type;
                        }
                    }
                }

                // Check for support
                plyr.supported = supported(plyr.type);

                // Create new markup
                switch (plyr.type) {
                    case 'video':
                        plyr.media = document.createElement('video');
                        break;

                    case 'audio':
                        plyr.media = document.createElement('audio');
                        break;

                    case 'youtube':
                    case 'vimeo':
                    case 'soundcloud':
                        plyr.media = document.createElement('div');
                        plyr.embedId = source.sources[0].src;
                        break;
                }

                // Inject the new element
                _prependChild(plyr.container, plyr.media);

                // Autoplay the new source?
                if (_is.boolean(source.autoplay)) {
                    config.autoplay = source.autoplay;
                }

                // Set attributes for audio and video
                if (_inArray(config.types.html5, plyr.type)) {
                    if (config.crossorigin) {
                        plyr.media.setAttribute('crossorigin', '');
                    }
                    if (config.autoplay) {
                        plyr.media.setAttribute('autoplay', '');
                    }
                    if ('poster' in source) {
                        plyr.media.setAttribute('poster', source.poster);
                    }
                    if (config.loop) {
                        plyr.media.setAttribute('loop', '');
                    }
                }

                // Restore class hooks
                _toggleClass(plyr.container, config.classes.fullscreen.active, plyr.isFullscreen);
                _toggleClass(plyr.container, config.classes.captions.active, plyr.captionsEnabled);
                _toggleStyleHook();

                // Set new sources for html5
                if (_inArray(config.types.html5, plyr.type)) {
                    _insertChildElements('source', source.sources);
                }

                // Set up from scratch
                _setupMedia();

                // HTML5 stuff
                if (_inArray(config.types.html5, plyr.type)) {
                    // Setup captions
                    if ('tracks' in source) {
                        _insertChildElements('track', source.tracks);
                    }

                    // Load HTML5 sources
                    plyr.media.load();
                }

                // If HTML5 or embed but not fully supported, setupInterface and call ready now
                if (_inArray(config.types.html5, plyr.type) || (_inArray(config.types.embed, plyr.type) && !plyr.supported.full)) {
                    // Setup interface
                    _setupInterface();

                    // Call ready
                    _ready();
                }

                // Set aria title and iframe title
                config.title = source.title;
                _setTitle();
            }

            // Destroy instance adn wait for callback
            // Vimeo throws a wobbly if you don't wait
            _destroy(setup, false);
        }

        // Update poster
        function _updatePoster(source) {
            if (plyr.type === 'video') {
                plyr.media.setAttribute('poster', source);
            }
        }

        function onBodyClick() {
            _toggleClass(_getElement('.' + config.classes.tabFocus), config.classes.tabFocus, false);
        }

        // Listen for control events
        function _controlListeners() {
            // IE doesn't support input event, so we fallback to change
            var inputEvent = plyr.browser.isIE ? 'change' : 'input';

            // Click play/pause helper
            function togglePlay() {
                var play = _togglePlay();

                // Determine which buttons
                var trigger = plyr.buttons[play ? 'play' : 'pause'],
                    target = plyr.buttons[play ? 'pause' : 'play'];

                // Get the last play button to account for the large play button
                if (target) {
                    if (target.length > 1) {
                        target = target[target.length - 1];
                    } else {
                        target = target[0];
                    }
                }

                // Setup focus and tab focus
                if (target) {
                    var hadTabFocus = _hasClass(trigger, config.classes.tabFocus);

                    setTimeout(function() {
                        target.focus();

                        if (hadTabFocus) {
                            _toggleClass(trigger, config.classes.tabFocus, false);
                            _toggleClass(target, config.classes.tabFocus, true);
                        }
                    }, 100);
                }
            }

            // Get the focused element
            function getFocusElement() {
                var focused = document.activeElement;

                if (!focused || focused === document.body) {
                    focused = null;
                } else {
                    focused = document.querySelector(':focus');
                }

                return focused;
            }

            // Get the key code for an event
            function getKeyCode(event) {
                return event.keyCode ? event.keyCode : event.which;
            }

            // Detect tab focus
            function checkTabFocus(focused) {
                for (var button in plyr.buttons) {
                    var element = plyr.buttons[button];

                    if (_is.nodeList(element)) {
                        for (var i = 0; i < element.length; i++) {
                            _toggleClass(element[i], config.classes.tabFocus, element[i] === focused);
                        }
                    } else {
                        _toggleClass(element, config.classes.tabFocus, element === focused);
                    }
                }
            }

            // Keyboard shortcuts
            if (config.keyboardShorcuts.focused) {
                var last = null;

                // Handle global presses
                if (config.keyboardShorcuts.global) {
                    _on(window, 'keydown keyup', function(event) {
                        var code = getKeyCode(event),
                            focused = getFocusElement(),
                            allowed = [48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67],
                            count = get().length;

                        // Only handle global key press if there's only one player
                        // and the key is in the allowed keys
                        // and if the focused element is not editable (e.g. text input)
                        // and any that accept key input http://webaim.org/techniques/keyboard/
                        if (count === 1 && _inArray(allowed, code) && (!_is.htmlElement(focused) || !_matches(focused, config.selectors.editable))) {
                            handleKey(event);
                        }
                    });
                }

                // Handle presses on focused
                _on(plyr.container, 'keydown keyup', handleKey);
            }

            function handleKey(event) {
                var code = getKeyCode(event),
                    pressed = event.type === 'keydown',
                    held = pressed && code === last;

                // If the event is bubbled from the media element
                // Firefox doesn't get the keycode for whatever reason
                if (!_is.number(code)) {
                    return;
                }

                // Seek by the number keys
                function seekByKey() {
                    // Get current duration
                    var duration = plyr.media.duration;

                    // Bail if we have no duration set
                    if (!_is.number(duration)) {
                        return;
                    }

                    // Divide the max duration into 10th's and times by the number value
                    _seek(duration / 10 * (code - 48));
                }

                // Handle the key on keydown
                // Reset on keyup
                if (pressed) {
                    // Which keycodes should we prevent default
                    var preventDefault = [48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67];

                    // If the code is found prevent default (e.g. prevent scrolling for arrows)
                    if (_inArray(preventDefault, code)) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    switch (code) {
                        // 0-9
                        case 48:
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            if (!held) {
                                seekByKey();
                            }
                            break;
                        // Space and K key
                        case 32:
                        case 75:
                            if (!held) {
                                _togglePlay();
                            }
                            break;
                        // Arrow up
                        case 38:
                            _increaseVolume();
                            break;
                        // Arrow down
                        case 40:
                            _decreaseVolume();
                            break;
                        // M key
                        case 77:
                            if (!held) {
                                _toggleMute();
                            }
                            break;
                        // Arrow forward
                        case 39:
                            _forward();
                            break;
                        // Arrow back
                        case 37:
                            _rewind();
                            break;
                        // F key
                        case 70:
                            _toggleFullscreen();
                            break;
                        // C key
                        case 67:
                            if (!held) {
                                _toggleCaptions();
                            }
                            break;
                    }

                    // Escape is handle natively when in full screen
                    // So we only need to worry about non native
                    if (!fullscreen.supportsFullScreen && plyr.isFullscreen && code === 27) {
                        _toggleFullscreen();
                    }

                    // Store last code for next cycle
                    last = code;
                } else {
                    last = null;
                }
            }

            // Focus/tab management
            _on(window, 'keyup', function(event) {
                var code = getKeyCode(event),
                    focused = getFocusElement();

                if (code === 9) {
                    checkTabFocus(focused);
                }
            });
            _on(document.body, 'click', onBodyClick);
            for (var button in plyr.buttons) {
                var element = plyr.buttons[button];

                _on(element, 'blur', function() {
                    _toggleClass(element, 'tab-focus', false);
                });
            }

            // Play
            _proxyListener(plyr.buttons.play, 'click', config.listeners.play, togglePlay);

            // Pause
            _proxyListener(plyr.buttons.pause, 'click', config.listeners.pause, togglePlay);

            // Restart
            _proxyListener(plyr.buttons.restart, 'click', config.listeners.restart, _seek);

            // Rewind
            _proxyListener(plyr.buttons.rewind, 'click', config.listeners.rewind, _rewind);

            // Fast forward
            _proxyListener(plyr.buttons.forward, 'click', config.listeners.forward, _forward);

            // Seek
            _proxyListener(plyr.buttons.seek, inputEvent, config.listeners.seek, _seek);

            // Set volume
            _proxyListener(plyr.volume.input, inputEvent, config.listeners.volume, function() {
                _setVolume(plyr.volume.input.value);
            });

            // Mute
            _proxyListener(plyr.buttons.mute, 'click', config.listeners.mute, _toggleMute);

            // Fullscreen
            _proxyListener(plyr.buttons.fullscreen, 'click', config.listeners.fullscreen, _toggleFullscreen);

            // Toggle fullscreen when user double clicks on video wrapper
            _proxyListener(plyr.container, 'dblclick', config.listeners.fullscreen, _toggleFullscreen);

            // Handle user exiting fullscreen by escaping etc
            if (fullscreen.supportsFullScreen) {
                _on(document, fullscreen.fullScreenEventName, _toggleFullscreen);
            }

            // Captions
            _proxyListener(plyr.buttons.captions, 'click', config.listeners.captions, _toggleCaptions);

            // Seek tooltip
            _on(plyr.progress.container, 'mouseenter mouseleave mousemove', _updateSeekTooltip);

            // Toggle controls visibility based on mouse movement
            if (config.hideControls) {
                // Toggle controls on mouse events and entering fullscreen
                _on(plyr.container, 'mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen', _toggleControls);

                // Watch for cursor over controls so they don't hide when trying to interact
                _on(plyr.controls, 'mouseenter mouseleave', function(event) {
                    plyr.controls.hover = event.type === 'mouseenter';
                });

                // Watch for cursor over controls so they don't hide when trying to interact
                _on(plyr.controls, 'mousedown mouseup touchstart touchend touchcancel', function(event) {
                    plyr.controls.pressed = _inArray(['mousedown', 'touchstart'], event.type);
                });

                // Focus in/out on controls
                _on(plyr.controls, 'focus blur', _toggleControls, true);
            }

            // Adjust volume on scroll
            _on(plyr.volume.input, 'wheel', function(event) {
                event.preventDefault();

                // Detect "natural" scroll - suppored on OS X Safari only
                // Other browsers on OS X will be inverted until support improves
                var inverted = event.webkitDirectionInvertedFromDevice,
                    step = config.volumeStep / 5;

                // Scroll down (or up on natural) to decrease
                if (event.deltaY < 0 || event.deltaX > 0) {
                    if (inverted) {
                        _decreaseVolume(step);
                    } else {
                        _increaseVolume(step);
                    }
                }

                // Scroll up (or down on natural) to increase
                if (event.deltaY > 0 || event.deltaX < 0) {
                    if (inverted) {
                        _increaseVolume(step);
                    } else {
                        _decreaseVolume(step);
                    }
                }
            });
        }

        // Listen for media events
        function _mediaListeners() {
            // Time change on media
            _on(plyr.media, 'timeupdate seeking', _timeUpdate);

            // Update manual captions
            _on(plyr.media, 'timeupdate', _seekManualCaptions);

            // Display duration
            _on(plyr.media, 'durationchange loadedmetadata', _displayDuration);

            // Handle the media finishing
            _on(plyr.media, 'ended', function() {
                // Show poster on end
                if (plyr.type === 'video' && config.showPosterOnEnd) {
                    // Clear
                    if (plyr.type === 'video') {
                        _setCaption();
                    }

                    // Restart
                    _seek();

                    // Re-load media
                    plyr.media.load();
                }
            });

            // Check for buffer progress
            _on(plyr.media, 'progress playing', _updateProgress);

            // Handle native mute
            _on(plyr.media, 'volumechange', _updateVolume);

            // Handle native play/pause
            _on(plyr.media, 'play pause ended', _checkPlaying);

            // Loading
            _on(plyr.media, 'waiting canplay seeked', _checkLoading);

            // Click video
            if (config.clickToPlay && plyr.type !== 'audio') {
                // Re-fetch the wrapper
                var wrapper = _getElement('.' + config.classes.videoWrapper);

                // Bail if there's no wrapper (this should never happen)
                if (!wrapper) {
                    return;
                }

                // Set cursor
                wrapper.style.cursor = 'pointer';

                // On click play, pause ore restart
                _on(wrapper, 'click', function() {
                    // Touch devices will just show controls (if we're hiding controls)
                    if (config.hideControls && plyr.browser.isTouch && !plyr.media.paused) {
                        return;
                    }

                    if (plyr.media.paused) {
                        _play();
                    } else if (plyr.media.ended) {
                        _seek();
                        _play();
                    } else {
                        _pause();
                    }
                });
            }

            // Disable right click
            if (config.disableContextMenu) {
                _on(plyr.media, 'contextmenu', function(event) {
                    event.preventDefault();
                });
            }

            // Proxy events to container
            // Bubble up key events for Edge
            _on(plyr.media, config.events.concat(['keyup', 'keydown']).join(' '), function(event) {
                _triggerEvent(plyr.container, event.type, true);
            });
        }

        // Cancel current network requests
        // See https://github.com/sampotts/plyr/issues/174
        function _cancelRequests() {
            if (!_inArray(config.types.html5, plyr.type)) {
                return;
            }

            // Remove child sources
            var sources = plyr.media.querySelectorAll('source');
            for (var i = 0; i < sources.length; i++) {
                _remove(sources[i]);
            }

            // Set blank video src attribute
            // This is to prevent a MEDIA_ERR_SRC_NOT_SUPPORTED error
            // Info: http://stackoverflow.com/questions/32231579/how-to-properly-dispose-of-an-html5-video-and-close-socket-or-connection
            plyr.media.setAttribute('src', config.blankUrl);

            // Load the new empty source
            // This will cancel existing requests
            // See https://github.com/sampotts/plyr/issues/174
            plyr.media.load();

            // Debugging
            _log('Cancelled network requests');
        }

        // Destroy an instance
        // Event listeners are removed when elements are removed
        // http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
        function _destroy(callback, restore) {
            // Bail if the element is not initialized
            if (!plyr.init) {
                return null;
            }

            // Type specific stuff
            switch (plyr.type) {
                case 'youtube':
                    // Clear timers
                    window.clearInterval(timers.buffering);
                    window.clearInterval(timers.playing);

                    // Destroy YouTube API
                    plyr.embed.destroy();

                    // Clean up
                    cleanUp();

                    break;

                case 'vimeo':
                    // Destroy Vimeo API
                    // then clean up (wait, to prevent postmessage errors)
                    plyr.embed.unload().then(cleanUp);

                    // Vimeo does not always return
                    timers.cleanUp = window.setTimeout(cleanUp, 200);

                    break;

                case 'video':
                case 'audio':
                    // Restore native video controls
                    _toggleNativeControls(true);

                    // Clean up
                    cleanUp();

                    break;
            }

            function cleanUp() {
                clearTimeout(timers.cleanUp);

                // Default to restore original element
                if (!_is.boolean(restore)) {
                    restore = true;
                }

                // Callback
                if (_is.function(callback)) {
                    callback.call(original);
                }

                // Bail if we don't need to restore the original element
                if (!restore) {
                    return;
                }

                // Remove init flag
                plyr.init = false;

                // Replace the container with the original element provided
                plyr.container.parentNode.replaceChild(original, plyr.container);

                // Free container in order for GC to remove it and prevent memory leaks due to added events
                plyr.container = null;

                // Allow overflow (set on fullscreen)
                document.body.style.overflow = '';

                //remove events
                _off(document.body, 'click', onBodyClick);

                // Event
                _triggerEvent(original, 'destroyed', true);
            }
        }

        // Setup a player
        function _init() {
            // Bail if the element is initialized
            if (plyr.init) {
                return null;
            }

            // Setup the fullscreen api
            fullscreen = _fullscreen();

            // Sniff out the browser
            plyr.browser = _browserSniff();

            // Bail if nothing to setup
            if (!_is.htmlElement(plyr.media)) {
                return;
            }

            // Load saved settings from localStorage
            _setupStorage();

            // Set media type based on tag or data attribute
            // Supported: video, audio, vimeo, youtube
            var tagName = media.tagName.toLowerCase();
            if (tagName === 'div') {
                plyr.type = media.getAttribute('data-type');
                plyr.embedId = media.getAttribute('data-video-id');

                // Clean up
                media.removeAttribute('data-type');
                media.removeAttribute('data-video-id');
            } else {
                plyr.type = tagName;
                config.crossorigin = media.getAttribute('crossorigin') !== null;
                config.autoplay = config.autoplay || media.getAttribute('autoplay') !== null;
                config.loop = config.loop || media.getAttribute('loop') !== null;
            }

            // Check for support
            plyr.supported = supported(plyr.type);

            // If no native support, bail
            if (!plyr.supported.basic) {
                return;
            }

            // Wrap media
            plyr.container = _wrap(media, document.createElement('div'));

            // Allow focus to be captured
            plyr.container.setAttribute('tabindex', 0);

            // Add style hook
            _toggleStyleHook();

            // Debug info
            _log('' + plyr.browser.name + ' ' + plyr.browser.version);

            // Setup media
            _setupMedia();

            // Setup interface
            // If embed but not fully supported, setupInterface (to avoid flash of controls) and call ready now
            if (_inArray(config.types.html5, plyr.type) || (_inArray(config.types.embed, plyr.type) && !plyr.supported.full)) {
                // Setup UI
                _setupInterface();

                // Call ready
                _ready();

                // Set title on button and frame
                _setTitle();
            }

            // Successful setup
            plyr.init = true;
        }

        // Setup the UI
        function _setupInterface() {
            // Don't setup interface if no support
            if (!plyr.supported.full) {
                _warn('Basic support only', plyr.type);

                // Remove controls
                _remove(_getElement(config.selectors.controls.wrapper));

                // Remove large play
                _remove(_getElement(config.selectors.buttons.play));

                // Restore native controls
                _toggleNativeControls(true);

                // Bail
                return;
            }

            // Inject custom controls if not present
            var controlsMissing = !_getElements(config.selectors.controls.wrapper).length;
            if (controlsMissing) {
                // Inject custom controls
                _injectControls();
            }

            // Find the elements
            if (!_findElements()) {
                return;
            }

            // If the controls are injected, re-bind listeners for controls
            if (controlsMissing) {
                _controlListeners();
            }

            // Media element listeners
            _mediaListeners();

            // Remove native controls
            _toggleNativeControls();

            // Setup fullscreen
            _setupFullscreen();

            // Captions
            _setupCaptions();

            // Set volume
            _setVolume();
            _updateVolume();

            // Reset time display
            _timeUpdate();

            // Update the UI
            _checkPlaying();

            // Display duration
            _displayDuration();
        }

        api = {
            getOriginal: function() {
                return original;
            },
            getContainer: function() {
                return plyr.container;
            },
            getEmbed: function() {
                return plyr.embed;
            },
            getMedia: function() {
                return plyr.media;
            },
            getType: function() {
                return plyr.type;
            },
            getDuration: _getDuration,
            getCurrentTime: function() {
                return plyr.media.currentTime;
            },
            getVolume: function() {
                return plyr.media.volume;
            },
            isMuted: function() {
                return plyr.media.muted;
            },
            isReady: function() {
                return _hasClass(plyr.container, config.classes.ready);
            },
            isLoading: function() {
                return _hasClass(plyr.container, config.classes.loading);
            },
            isPaused: function() {
                return plyr.media.paused;
            },
            on: function(event, callback) {
                _on(plyr.container, event, callback);
                return this;
            },
            play: _play,
            pause: _pause,
            stop: function() {
                _pause();
                _seek();
            },
            restart: _seek,
            rewind: _rewind,
            forward: _forward,
            seek: _seek,
            source: _source,
            poster: _updatePoster,
            setVolume: _setVolume,
            togglePlay: _togglePlay,
            toggleMute: _toggleMute,
            toggleCaptions: _toggleCaptions,
            toggleFullscreen: _toggleFullscreen,
            toggleControls: _toggleControls,
            isFullscreen: function() {
                return plyr.isFullscreen || false;
            },
            support: function(mimeType) {
                return _supportMime(plyr, mimeType);
            },
            destroy: _destroy,
        };

        // Everything done
        function _ready() {
            // Ready event at end of execution stack
            window.setTimeout(function() {
                _triggerEvent(plyr.media, 'ready');
            }, 0);

            // Set class hook on media element
            _toggleClass(plyr.media, defaults.classes.setup, true);

            // Set container class for ready
            _toggleClass(plyr.container, config.classes.ready, true);

            // Store a refernce to instance
            plyr.media.plyr = api;

            // Autoplay
            if (config.autoplay) {
                _play();
            }
        }

        // Initialize instance
        _init();

        // If init failed, return null
        if (!plyr.init) {
            return null;
        }

        return api;
    }

    // Load a sprite
    function loadSprite(url, id) {
        var x = new XMLHttpRequest();

        // If the id is set and sprite exists, bail
        if (_is.string(id) && _is.htmlElement(document.querySelector('#' + id))) {
            return;
        }

        // Create placeholder (to prevent loading twice)
        var container = document.createElement('div');
        container.setAttribute('hidden', '');
        if (_is.string(id)) {
            container.setAttribute('id', id);
        }
        document.body.insertBefore(container, document.body.childNodes[0]);

        // Check for CORS support
        if ('withCredentials' in x) {
            x.open('GET', url, true);
        } else {
            return;
        }

        // Inject hidden div with sprite on load
        x.onload = function() {
            container.innerHTML = x.responseText;
        };

        x.send();
    }

    // Check for support
    function supported(type) {
        var browser = _browserSniff(),
            isOldIE = browser.isIE && browser.version <= 9,
            isIos = browser.isIos,
            isIphone = browser.isIphone,
            audioSupport = !!document.createElement('audio').canPlayType,
            videoSupport = !!document.createElement('video').canPlayType,
            basic = false,
            full = false;

        switch (type) {
            case 'video':
                basic = videoSupport;
                full = basic && (!isOldIE && !isIphone);
                break;

            case 'audio':
                basic = audioSupport;
                full = basic && !isOldIE;
                break;

            // Vimeo does not seem to be supported on iOS via API
            // Issue raised https://github.com/vimeo/player.js/issues/87
            case 'vimeo':
                basic = true;
                full = !isOldIE && !isIos;
                break;

            case 'youtube':
                basic = true;
                full = !isOldIE && !isIos;

                // YouTube seems to work on iOS 10+ on iPad
                if (isIos && !isIphone && browser.version >= 10) {
                    full = true;
                }

                break;

            case 'soundcloud':
                basic = true;
                full = !isOldIE && !isIphone;
                break;

            default:
                basic = audioSupport && videoSupport;
                full = basic && !isOldIE;
        }

        return {
            basic: basic,
            full: full,
        };
    }

    // Setup function
    function setup(targets, options) {
        // Get the players
        var players = [],
            instances = [],
            selector = [defaults.selectors.html5, defaults.selectors.embed].join(',');

        // Select the elements
        if (_is.string(targets)) {
            // String selector passed
            targets = document.querySelectorAll(targets);
        } else if (_is.htmlElement(targets)) {
            // Single HTMLElement passed
            targets = [targets];
        } else if (!_is.nodeList(targets) && !_is.array(targets) && !_is.string(targets)) {
            // No selector passed, possibly options as first argument
            // If options are the first argument
            if (_is.undefined(options) && _is.object(targets)) {
                options = targets;
            }

            // Use default selector
            targets = document.querySelectorAll(selector);
        }

        // Convert NodeList to array
        if (_is.nodeList(targets)) {
            targets = Array.prototype.slice.call(targets);
        }

        // Bail if disabled or no basic support
        // You may want to disable certain UAs etc
        if (!supported().basic || !targets.length) {
            return false;
        }

        // Add to container list
        function add(target, media) {
            if (!_hasClass(media, defaults.classes.hook)) {
                players.push({
                    // Always wrap in a <div> for styling
                    //container:  _wrap(media, document.createElement('div')),
                    // Could be a container or the media itself
                    target: target,
                    // This should be the <video>, <audio> or <div> (YouTube/Vimeo)
                    media: media,
                });
            }
        }

        // Check if the targets have multiple media elements
        for (var i = 0; i < targets.length; i++) {
            var target = targets[i];

            // Get children
            var children = target.querySelectorAll(selector);

            // If there's more than one media element child, wrap them
            if (children.length) {
                for (var x = 0; x < children.length; x++) {
                    add(target, children[x]);
                }
            } else if (_matches(target, selector)) {
                // Target is media element
                add(target, target);
            }
        }

        // Create a player instance for each element
        players.forEach(function(player) {
            var element = player.target,
                media = player.media,
                match = false;

            // The target element can also be the media element
            if (media === element) {
                match = true;
            }

            // Setup a player instance and add to the element
            // Create instance-specific config
            var data = {};

            // Try parsing data attribute config
            try {
                data = JSON.parse(element.getAttribute('data-plyr'));
            } catch (e) {}

            var config = _extend({}, defaults, options, data);

            // Bail if not enabled
            if (!config.enabled) {
                return null;
            }

            // Create new instance
            var instance = new Plyr(media, config);

            // Go to next if setup failed
            if (!_is.object(instance)) {
                return;
            }

            // Listen for events if debugging
            if (config.debug) {
                var events = config.events.concat(['setup', 'statechange', 'enterfullscreen', 'exitfullscreen', 'captionsenabled', 'captionsdisabled']);

                _on(instance.getContainer(), events.join(' '), function(event) {
                    console.log([config.logPrefix, 'event:', event.type].join(' '), event.detail.plyr);
                });
            }

            // Callback
            _event(instance.getContainer(), 'setup', true, {
                plyr: instance,
            });

            // Add to return array even if it's already setup
            instances.push(instance);
        });

        return instances;
    }

    // Get all instances within a provided container
    function get(container) {
        if (_is.string(container)) {
            // Get selector if string passed
            container = document.querySelector(container);
        } else if (_is.undefined(container)) {
            // Use body by default to get all on page
            container = document.body;
        }

        // If we have a HTML element
        if (_is.htmlElement(container)) {
            var elements = container.querySelectorAll('.' + defaults.classes.setup),
                instances = [];

            Array.prototype.slice.call(elements).forEach(function(element) {
                if (_is.object(element.plyr)) {
                    instances.push(element.plyr);
                }
            });

            return instances;
        }

        return [];
    }

    return {
        setup: setup,
        supported: supported,
        loadSprite: loadSprite,
        get: get,
    };
});

// Custom event polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
(function() {
    if (typeof window.CustomEvent === 'function') {
        return;
    }

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();
;
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});;
!function(){"use strict";var e,a=function(s,i){function r(e){return Math.floor(e)}function n(){var e=T.params.autoplay,a=T.slides.eq(T.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||T.params.autoplay),T.autoplayTimeoutId=setTimeout(function(){T.params.loop?(T.fixLoop(),T._slideNext(),T.emit("onAutoplay",T)):T.isEnd?i.autoplayStopOnLast?T.stopAutoplay():(T._slideTo(0),T.emit("onAutoplay",T)):(T._slideNext(),T.emit("onAutoplay",T))},e)}function o(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var i;return s.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}if(0!==s.length)return s[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){T.onResize(!0),T.emit("onObserverUpdate",T,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),T.observers.push(s)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!T.params.allowSwipeToNext&&(T.isHorizontal()&&39===a||!T.isHorizontal()&&40===a))return!1;if(!T.params.allowSwipeToPrev&&(T.isHorizontal()&&37===a||!T.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(T.container.parents("."+T.params.slideClass).length>0&&0===T.container.parents("."+T.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,r=window.innerHeight,n=T.container.offset();T.rtl&&(n.left=n.left-T.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+T.width,n.top],[n.left,n.top+T.height],[n.left+T.width,n.top+T.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+r&&(t=!0)}if(!t)return}T.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!T.rtl||37===a&&T.rtl)&&T.slideNext(),(37===a&&!T.rtl||39===a&&T.rtl)&&T.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&T.slideNext(),38===a&&T.slidePrev()),T.emit("onKeyPress",T,a)}}function d(e){var a=0,t=0,s=0,i=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,i=10*t,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||i)&&e.deltaMode&&(1===e.deltaMode?(s*=40,i*=40):(s*=800,i*=800)),s&&!a&&(a=s<1?-1:1),i&&!t&&(t=i<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:i}}function u(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=T.rtl?-1:1,s=d(e);if(T.params.mousewheelForceToAxis)if(T.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(T.params.mousewheelInvert&&(a=-a),T.params.freeMode){var i=T.getWrapperTranslate()+a*T.params.mousewheelSensitivity,r=T.isBeginning,n=T.isEnd;if(i>=T.minTranslate()&&(i=T.minTranslate()),i<=T.maxTranslate()&&(i=T.maxTranslate()),T.setWrapperTransition(0),T.setWrapperTranslate(i),T.updateProgress(),T.updateActiveIndex(),(!r&&T.isBeginning||!n&&T.isEnd)&&T.updateClasses(),T.params.freeModeSticky?(clearTimeout(T.mousewheel.timeout),T.mousewheel.timeout=setTimeout(function(){T.slideReset()},300)):T.params.lazyLoading&&T.lazy&&T.lazy.load(),T.emit("onScroll",T,e),T.params.autoplay&&T.params.autoplayDisableOnInteraction&&T.stopAutoplay(),0===i||i===T.maxTranslate())return}else{if((new window.Date).getTime()-T.mousewheel.lastScrollTime>60)if(a<0)if(T.isEnd&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slideNext(),T.emit("onScroll",T,e);else if(T.isBeginning&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slidePrev(),T.emit("onScroll",T,e);T.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function c(a,t){a=e(a);var s,i,r,n=T.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",i=a.attr("data-swiper-parallax-x"),r=a.attr("data-swiper-parallax-y"),i||r?(i=i||"0",r=r||"0"):T.isHorizontal()?(i=s,r="0"):(r=s,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",r=r.indexOf("%")>=0?parseInt(r,10)*t+"%":r*t+"px",a.transform("translate3d("+i+", "+r+",0px)")}function m(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(s,i);var h={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=i&&i.virtualTranslate;i=i||{};var f={};for(var v in i)if("object"!=typeof i[v]||null===i[v]||(i[v].nodeType||i[v]===window||i[v]===document||void 0!==t&&i[v]instanceof t||"undefined"!=typeof jQuery&&i[v]instanceof jQuery))f[v]=i[v];else{f[v]={};for(var w in i[v])f[v][w]=i[v][w]}for(var y in h)if(void 0===i[y])i[y]=h[y];else if("object"==typeof i[y])for(var x in h[y])void 0===i[y][x]&&(i[y][x]=h[y][x]);var T=this;if(T.params=i,T.originalParams=f,T.classNames=[],void 0!==e&&void 0!==t&&(e=t),(void 0!==e||(e=void 0===t?window.Dom7||window.Zepto||window.jQuery:t))&&(T.$=e,T.currentBreakpoint=void 0,T.getActiveBreakpoint=function(){if(!T.params.breakpoints)return!1;var e,a=!1,t=[];for(e in T.params.breakpoints)T.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},T.setBreakpoint=function(){var e=T.getActiveBreakpoint();if(e&&T.currentBreakpoint!==e){var a=e in T.params.breakpoints?T.params.breakpoints[e]:T.originalParams,t=T.params.loop&&a.slidesPerView!==T.params.slidesPerView;for(var s in a)T.params[s]=a[s];T.currentBreakpoint=e,t&&T.destroyLoop&&T.reLoop(!0)}},T.params.breakpoints&&T.setBreakpoint(),T.container=e(s),0!==T.container.length)){if(T.container.length>1){var b=[];return T.container.each(function(){b.push(new a(this,i))}),b}T.container[0].swiper=T,T.container.data("swiper",T),T.classNames.push(T.params.containerModifierClass+T.params.direction),T.params.freeMode&&T.classNames.push(T.params.containerModifierClass+"free-mode"),T.support.flexbox||(T.classNames.push(T.params.containerModifierClass+"no-flexbox"),T.params.slidesPerColumn=1),T.params.autoHeight&&T.classNames.push(T.params.containerModifierClass+"autoheight"),(T.params.parallax||T.params.watchSlidesVisibility)&&(T.params.watchSlidesProgress=!0),T.params.touchReleaseOnEdges&&(T.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(T.params.effect)>=0&&(T.support.transforms3d?(T.params.watchSlidesProgress=!0,T.classNames.push(T.params.containerModifierClass+"3d")):T.params.effect="slide"),"slide"!==T.params.effect&&T.classNames.push(T.params.containerModifierClass+T.params.effect),"cube"===T.params.effect&&(T.params.resistanceRatio=0,T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.centeredSlides=!1,T.params.spaceBetween=0,T.params.virtualTranslate=!0),"fade"!==T.params.effect&&"flip"!==T.params.effect||(T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.watchSlidesProgress=!0,T.params.spaceBetween=0,void 0===g&&(T.params.virtualTranslate=!0)),T.params.grabCursor&&T.support.touch&&(T.params.grabCursor=!1),T.wrapper=T.container.children("."+T.params.wrapperClass),T.params.pagination&&(T.paginationContainer=e(T.params.pagination),T.params.uniqueNavElements&&"string"==typeof T.params.pagination&&T.paginationContainer.length>1&&1===T.container.find(T.params.pagination).length&&(T.paginationContainer=T.container.find(T.params.pagination)),"bullets"===T.params.paginationType&&T.params.paginationClickable?T.paginationContainer.addClass(T.params.paginationModifierClass+"clickable"):T.params.paginationClickable=!1,T.paginationContainer.addClass(T.params.paginationModifierClass+T.params.paginationType)),(T.params.nextButton||T.params.prevButton)&&(T.params.nextButton&&(T.nextButton=e(T.params.nextButton),T.params.uniqueNavElements&&"string"==typeof T.params.nextButton&&T.nextButton.length>1&&1===T.container.find(T.params.nextButton).length&&(T.nextButton=T.container.find(T.params.nextButton))),T.params.prevButton&&(T.prevButton=e(T.params.prevButton),T.params.uniqueNavElements&&"string"==typeof T.params.prevButton&&T.prevButton.length>1&&1===T.container.find(T.params.prevButton).length&&(T.prevButton=T.container.find(T.params.prevButton)))),T.isHorizontal=function(){return"horizontal"===T.params.direction},T.rtl=T.isHorizontal()&&("rtl"===T.container[0].dir.toLowerCase()||"rtl"===T.container.css("direction")),T.rtl&&T.classNames.push(T.params.containerModifierClass+"rtl"),T.rtl&&(T.wrongRTL="-webkit-box"===T.wrapper.css("display")),T.params.slidesPerColumn>1&&T.classNames.push(T.params.containerModifierClass+"multirow"),T.device.android&&T.classNames.push(T.params.containerModifierClass+"android"),T.container.addClass(T.classNames.join(" ")),T.translate=0,T.progress=0,T.velocity=0,T.lockSwipeToNext=function(){T.params.allowSwipeToNext=!1,T.params.allowSwipeToPrev===!1&&T.params.grabCursor&&T.unsetGrabCursor()},T.lockSwipeToPrev=function(){T.params.allowSwipeToPrev=!1,T.params.allowSwipeToNext===!1&&T.params.grabCursor&&T.unsetGrabCursor()},T.lockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!1,T.params.grabCursor&&T.unsetGrabCursor()},T.unlockSwipeToNext=function(){T.params.allowSwipeToNext=!0,T.params.allowSwipeToPrev===!0&&T.params.grabCursor&&T.setGrabCursor()},T.unlockSwipeToPrev=function(){T.params.allowSwipeToPrev=!0,T.params.allowSwipeToNext===!0&&T.params.grabCursor&&T.setGrabCursor()},T.unlockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!0,T.params.grabCursor&&T.setGrabCursor()},T.setGrabCursor=function(e){T.container[0].style.cursor="move",T.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",T.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",T.container[0].style.cursor=e?"grabbing":"grab"},T.unsetGrabCursor=function(){T.container[0].style.cursor=""},T.params.grabCursor&&T.setGrabCursor(),T.imagesToLoad=[],T.imagesLoaded=0,T.loadImage=function(e,a,t,s,i,r){function n(){r&&r()}var o;e.complete&&i?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},T.preloadImages=function(){function e(){void 0!==T&&null!==T&&T&&(void 0!==T.imagesLoaded&&T.imagesLoaded++,T.imagesLoaded===T.imagesToLoad.length&&(T.params.updateOnImagesReady&&T.update(),T.emit("onImagesReady",T)))}T.imagesToLoad=T.container.find("img");for(var a=0;a<T.imagesToLoad.length;a++)T.loadImage(T.imagesToLoad[a],T.imagesToLoad[a].currentSrc||T.imagesToLoad[a].getAttribute("src"),T.imagesToLoad[a].srcset||T.imagesToLoad[a].getAttribute("srcset"),T.imagesToLoad[a].sizes||T.imagesToLoad[a].getAttribute("sizes"),!0,e)},T.autoplayTimeoutId=void 0,T.autoplaying=!1,T.autoplayPaused=!1,T.startAutoplay=function(){return void 0===T.autoplayTimeoutId&&(!!T.params.autoplay&&(!T.autoplaying&&(T.autoplaying=!0,T.emit("onAutoplayStart",T),void n())))},T.stopAutoplay=function(e){T.autoplayTimeoutId&&(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplaying=!1,T.autoplayTimeoutId=void 0,T.emit("onAutoplayStop",T))},T.pauseAutoplay=function(e){T.autoplayPaused||(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplayPaused=!0,0===e?(T.autoplayPaused=!1,n()):T.wrapper.transitionEnd(function(){T&&(T.autoplayPaused=!1,T.autoplaying?n():T.stopAutoplay())}))},T.minTranslate=function(){return-T.snapGrid[0]},T.maxTranslate=function(){return-T.snapGrid[T.snapGrid.length-1]},T.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==T.params.slidesPerView&&T.params.slidesPerView>1)for(e=0;e<Math.ceil(T.params.slidesPerView);e++){var s=T.activeIndex+e;if(s>T.slides.length)break;a.push(T.slides.eq(s)[0])}else a.push(T.slides.eq(T.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var i=a[e].offsetHeight;t=i>t?i:t}t&&T.wrapper.css("height",t+"px")},T.updateContainerSize=function(){var e,a;e=void 0!==T.params.width?T.params.width:T.container[0].clientWidth,a=void 0!==T.params.height?T.params.height:T.container[0].clientHeight,0===e&&T.isHorizontal()||0===a&&!T.isHorizontal()||(e=e-parseInt(T.container.css("padding-left"),10)-parseInt(T.container.css("padding-right"),10),a=a-parseInt(T.container.css("padding-top"),10)-parseInt(T.container.css("padding-bottom"),10),T.width=e,T.height=a,T.size=T.isHorizontal()?T.width:T.height)},T.updateSlidesSize=function(){T.slides=T.wrapper.children("."+T.params.slideClass),T.snapGrid=[],T.slidesGrid=[],T.slidesSizesGrid=[];var e,a=T.params.spaceBetween,t=-T.params.slidesOffsetBefore,s=0,i=0;if(void 0!==T.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*T.size),T.virtualSize=-a,T.rtl?T.slides.css({marginLeft:"",marginTop:""}):T.slides.css({marginRight:"",marginBottom:""});var n;T.params.slidesPerColumn>1&&(n=Math.floor(T.slides.length/T.params.slidesPerColumn)===T.slides.length/T.params.slidesPerColumn?T.slides.length:Math.ceil(T.slides.length/T.params.slidesPerColumn)*T.params.slidesPerColumn,"auto"!==T.params.slidesPerView&&"row"===T.params.slidesPerColumnFill&&(n=Math.max(n,T.params.slidesPerView*T.params.slidesPerColumn)));var o,l=T.params.slidesPerColumn,p=n/l,d=p-(T.params.slidesPerColumn*p-T.slides.length);for(e=0;e<T.slides.length;e++){o=0;var u=T.slides.eq(e);if(T.params.slidesPerColumn>1){var c,m,h;"column"===T.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css("margin-"+(T.isHorizontal()?"top":"left"),0!==h&&T.params.spaceBetween&&T.params.spaceBetween+"px").attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===T.params.slidesPerView?(o=T.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),T.params.roundLengths&&(o=r(o))):(o=(T.size-(T.params.slidesPerView-1)*a)/T.params.slidesPerView,T.params.roundLengths&&(o=r(o)),T.isHorizontal()?T.slides[e].style.width=o+"px":T.slides[e].style.height=o+"px"),T.slides[e].swiperSlideSize=o,T.slidesSizesGrid.push(o),T.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-T.size/2-a),0===e&&(t=t-T.size/2-a),Math.abs(t)<.001&&(t=0),i%T.params.slidesPerGroup==0&&T.snapGrid.push(t),T.slidesGrid.push(t)):(i%T.params.slidesPerGroup==0&&T.snapGrid.push(t),T.slidesGrid.push(t),t=t+o+a),T.virtualSize+=o+a,s=o,i++)}T.virtualSize=Math.max(T.virtualSize,T.size)+T.params.slidesOffsetAfter;var g;if(T.rtl&&T.wrongRTL&&("slide"===T.params.effect||"coverflow"===T.params.effect)&&T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}),T.support.flexbox&&!T.params.setWrapperSize||(T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"})),T.params.slidesPerColumn>1&&(T.virtualSize=(o+T.params.spaceBetween)*n,T.virtualSize=Math.ceil(T.virtualSize/T.params.slidesPerColumn)-T.params.spaceBetween,T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"}),T.params.centeredSlides)){for(g=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<T.virtualSize+T.snapGrid[0]&&g.push(T.snapGrid[e]);T.snapGrid=g}if(!T.params.centeredSlides){for(g=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<=T.virtualSize-T.size&&g.push(T.snapGrid[e]);T.snapGrid=g,Math.floor(T.virtualSize-T.size)-Math.floor(T.snapGrid[T.snapGrid.length-1])>1&&T.snapGrid.push(T.virtualSize-T.size)}0===T.snapGrid.length&&(T.snapGrid=[0]),0!==T.params.spaceBetween&&(T.isHorizontal()?T.rtl?T.slides.css({marginLeft:a+"px"}):T.slides.css({marginRight:a+"px"}):T.slides.css({marginBottom:a+"px"})),T.params.watchSlidesProgress&&T.updateSlidesOffset()}},T.updateSlidesOffset=function(){for(var e=0;e<T.slides.length;e++)T.slides[e].swiperSlideOffset=T.isHorizontal()?T.slides[e].offsetLeft:T.slides[e].offsetTop},T.currentSlidesPerView=function(){var e,a,t=1;if(T.params.centeredSlides){var s,i=T.slides[T.activeIndex].swiperSlideSize;for(e=T.activeIndex+1;e<T.slides.length;e++)T.slides[e]&&!s&&(i+=T.slides[e].swiperSlideSize,t++,i>T.size&&(s=!0));for(a=T.activeIndex-1;a>=0;a--)T.slides[a]&&!s&&(i+=T.slides[a].swiperSlideSize,t++,i>T.size&&(s=!0))}else for(e=T.activeIndex+1;e<T.slides.length;e++)T.slidesGrid[e]-T.slidesGrid[T.activeIndex]<T.size&&t++;return t},T.updateSlidesProgress=function(e){if(void 0===e&&(e=T.translate||0),0!==T.slides.length){void 0===T.slides[0].swiperSlideOffset&&T.updateSlidesOffset();var a=-e;T.rtl&&(a=e),T.slides.removeClass(T.params.slideVisibleClass);for(var t=0;t<T.slides.length;t++){var s=T.slides[t],i=(a+(T.params.centeredSlides?T.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+T.params.spaceBetween);if(T.params.watchSlidesVisibility){var r=-(a-s.swiperSlideOffset),n=r+T.slidesSizesGrid[t];(r>=0&&r<T.size||n>0&&n<=T.size||r<=0&&n>=T.size)&&T.slides.eq(t).addClass(T.params.slideVisibleClass)}s.progress=T.rtl?-i:i}}},T.updateProgress=function(e){void 0===e&&(e=T.translate||0);var a=T.maxTranslate()-T.minTranslate(),t=T.isBeginning,s=T.isEnd;0===a?(T.progress=0,T.isBeginning=T.isEnd=!0):(T.progress=(e-T.minTranslate())/a,T.isBeginning=T.progress<=0,T.isEnd=T.progress>=1),T.isBeginning&&!t&&T.emit("onReachBeginning",T),T.isEnd&&!s&&T.emit("onReachEnd",T),T.params.watchSlidesProgress&&T.updateSlidesProgress(e),T.emit("onProgress",T,T.progress)},T.updateActiveIndex=function(){var e,a,t,s=T.rtl?T.translate:-T.translate;for(a=0;a<T.slidesGrid.length;a++)void 0!==T.slidesGrid[a+1]?s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]-(T.slidesGrid[a+1]-T.slidesGrid[a])/2?e=a:s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]&&(e=a+1):s>=T.slidesGrid[a]&&(e=a);T.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/T.params.slidesPerGroup),t>=T.snapGrid.length&&(t=T.snapGrid.length-1),e!==T.activeIndex&&(T.snapIndex=t,T.previousIndex=T.activeIndex,T.activeIndex=e,T.updateClasses(),T.updateRealIndex())},T.updateRealIndex=function(){T.realIndex=parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index")||T.activeIndex,10)},T.updateClasses=function(){T.slides.removeClass(T.params.slideActiveClass+" "+T.params.slideNextClass+" "+T.params.slidePrevClass+" "+T.params.slideDuplicateActiveClass+" "+T.params.slideDuplicateNextClass+" "+T.params.slideDuplicatePrevClass);var a=T.slides.eq(T.activeIndex);a.addClass(T.params.slideActiveClass),i.loop&&(a.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass));var t=a.next("."+T.params.slideClass).addClass(T.params.slideNextClass);T.params.loop&&0===t.length&&(t=T.slides.eq(0),t.addClass(T.params.slideNextClass));var s=a.prev("."+T.params.slideClass).addClass(T.params.slidePrevClass);if(T.params.loop&&0===s.length&&(s=T.slides.eq(-1),s.addClass(T.params.slidePrevClass)),i.loop&&(t.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass),s.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass)),T.paginationContainer&&T.paginationContainer.length>0){var r,n=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length;if(T.params.loop?(r=Math.ceil((T.activeIndex-T.loopedSlides)/T.params.slidesPerGroup),r>T.slides.length-1-2*T.loopedSlides&&(r-=T.slides.length-2*T.loopedSlides),r>n-1&&(r-=n),r<0&&"bullets"!==T.params.paginationType&&(r=n+r)):r=void 0!==T.snapIndex?T.snapIndex:T.activeIndex||0,"bullets"===T.params.paginationType&&T.bullets&&T.bullets.length>0&&(T.bullets.removeClass(T.params.bulletActiveClass),T.paginationContainer.length>1?T.bullets.each(function(){e(this).index()===r&&e(this).addClass(T.params.bulletActiveClass)}):T.bullets.eq(r).addClass(T.params.bulletActiveClass)),"fraction"===T.params.paginationType&&(T.paginationContainer.find("."+T.params.paginationCurrentClass).text(r+1),T.paginationContainer.find("."+T.params.paginationTotalClass).text(n)),"progress"===T.params.paginationType){var o=(r+1)/n,l=o,p=1;T.isHorizontal()||(p=o,l=1),T.paginationContainer.find("."+T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(T.params.speed)}"custom"===T.params.paginationType&&T.params.paginationCustomRender&&(T.paginationContainer.html(T.params.paginationCustomRender(T,r+1,n)),T.emit("onPaginationRendered",T,T.paginationContainer[0]))}T.params.loop||(T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.isBeginning?(T.prevButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.prevButton)):(T.prevButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.prevButton))),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.isEnd?(T.nextButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.nextButton)):(T.nextButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.nextButton))))},T.updatePagination=function(){if(T.params.pagination&&T.paginationContainer&&T.paginationContainer.length>0){var e="";if("bullets"===T.params.paginationType){for(var a=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length,t=0;t<a;t++)e+=T.params.paginationBulletRender?T.params.paginationBulletRender(T,t,T.params.bulletClass):"<"+T.params.paginationElement+' class="'+T.params.bulletClass+'"></'+T.params.paginationElement+">";T.paginationContainer.html(e),T.bullets=T.paginationContainer.find("."+T.params.bulletClass),T.params.paginationClickable&&T.params.a11y&&T.a11y&&T.a11y.initPagination()}"fraction"===T.params.paginationType&&(e=T.params.paginationFractionRender?T.params.paginationFractionRender(T,T.params.paginationCurrentClass,T.params.paginationTotalClass):'<span class="'+T.params.paginationCurrentClass+'"></span> / <span class="'+T.params.paginationTotalClass+'"></span>',T.paginationContainer.html(e)),"progress"===T.params.paginationType&&(e=T.params.paginationProgressRender?T.params.paginationProgressRender(T,T.params.paginationProgressbarClass):'<span class="'+T.params.paginationProgressbarClass+'"></span>',T.paginationContainer.html(e)),"custom"!==T.params.paginationType&&T.emit("onPaginationRendered",T,T.paginationContainer[0])}},T.update=function(e){function a(){T.rtl,T.translate;t=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate()),T.setWrapperTranslate(t),T.updateActiveIndex(),T.updateClasses()}if(T){T.updateContainerSize(),T.updateSlidesSize(),T.updateProgress(),T.updatePagination(),T.updateClasses(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set();var t;if(e){T.controller&&T.controller.spline&&(T.controller.spline=void 0),T.params.freeMode?(a(),T.params.autoHeight&&T.updateAutoHeight()):(("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0))||a()}else T.params.autoHeight&&T.updateAutoHeight()}},T.onResize=function(e){T.params.onBeforeResize&&T.params.onBeforeResize(T),T.params.breakpoints&&T.setBreakpoint();var a=T.params.allowSwipeToPrev,t=T.params.allowSwipeToNext;T.params.allowSwipeToPrev=T.params.allowSwipeToNext=!0,T.updateContainerSize(),T.updateSlidesSize(),("auto"===T.params.slidesPerView||T.params.freeMode||e)&&T.updatePagination(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set(),T.controller&&T.controller.spline&&(T.controller.spline=void 0);var s=!1;if(T.params.freeMode){var i=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate());T.setWrapperTranslate(i),T.updateActiveIndex(),T.updateClasses(),T.params.autoHeight&&T.updateAutoHeight()}else T.updateClasses(),s=("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0);T.params.lazyLoading&&!s&&T.lazy&&T.lazy.load(),T.params.allowSwipeToPrev=a,T.params.allowSwipeToNext=t,T.params.onAfterResize&&T.params.onAfterResize(T)},T.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?T.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(T.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),T.touchEvents={start:T.support.touch||!T.params.simulateTouch?"touchstart":T.touchEventsDesktop.start,move:T.support.touch||!T.params.simulateTouch?"touchmove":T.touchEventsDesktop.move,end:T.support.touch||!T.params.simulateTouch?"touchend":T.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===T.params.touchEventsTarget?T.container:T.wrapper).addClass("swiper-wp8-"+T.params.direction),T.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",s="container"===T.params.touchEventsTarget?T.container[0]:T.wrapper[0],r=T.support.touch?s:document,n=!!T.params.nested;if(T.browser.ie)s[t](T.touchEvents.start,T.onTouchStart,!1),r[t](T.touchEvents.move,T.onTouchMove,n),r[t](T.touchEvents.end,T.onTouchEnd,!1);else{if(T.support.touch){var o=!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1};s[t](T.touchEvents.start,T.onTouchStart,o),s[t](T.touchEvents.move,T.onTouchMove,n),s[t](T.touchEvents.end,T.onTouchEnd,o)}(i.simulateTouch&&!T.device.ios&&!T.device.android||i.simulateTouch&&!T.support.touch&&T.device.ios)&&(s[t]("mousedown",T.onTouchStart,!1),document[t]("mousemove",T.onTouchMove,n),document[t]("mouseup",T.onTouchEnd,!1))}window[t]("resize",T.onResize),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.nextButton[a]("click",T.onClickNext),T.params.a11y&&T.a11y&&T.nextButton[a]("keydown",T.a11y.onEnterKey)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.prevButton[a]("click",T.onClickPrev),T.params.a11y&&T.a11y&&T.prevButton[a]("keydown",T.a11y.onEnterKey)),T.params.pagination&&T.params.paginationClickable&&(T.paginationContainer[a]("click","."+T.params.bulletClass,T.onClickIndex),T.params.a11y&&T.a11y&&T.paginationContainer[a]("keydown","."+T.params.bulletClass,T.a11y.onEnterKey)),(T.params.preventClicks||T.params.preventClicksPropagation)&&s[t]("click",T.preventClicks,!0)},T.attachEvents=function(){T.initEvents()},T.detachEvents=function(){T.initEvents(!0)},T.allowClick=!0,T.preventClicks=function(e){T.allowClick||(T.params.preventClicks&&e.preventDefault(),T.params.preventClicksPropagation&&T.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},T.onClickNext=function(e){e.preventDefault(),T.isEnd&&!T.params.loop||T.slideNext()},T.onClickPrev=function(e){e.preventDefault(),T.isBeginning&&!T.params.loop||T.slidePrev()},T.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*T.params.slidesPerGroup;T.params.loop&&(t+=T.loopedSlides),T.slideTo(t)},
T.updateClickedSlide=function(a){var t=o(a,"."+T.params.slideClass),s=!1;if(t)for(var i=0;i<T.slides.length;i++)T.slides[i]===t&&(s=!0);if(!t||!s)return T.clickedSlide=void 0,void(T.clickedIndex=void 0);if(T.clickedSlide=t,T.clickedIndex=e(t).index(),T.params.slideToClickedSlide&&void 0!==T.clickedIndex&&T.clickedIndex!==T.activeIndex){var r,n=T.clickedIndex,l="auto"===T.params.slidesPerView?T.currentSlidesPerView():T.params.slidesPerView;if(T.params.loop){if(T.animating)return;r=parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"),10),T.params.centeredSlides?n<T.loopedSlides-l/2||n>T.slides.length-T.loopedSlides+l/2?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(n)},0)):T.slideTo(n):n>T.slides.length-l?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(n)},0)):T.slideTo(n)}else T.slideTo(n)}};var S,C,z,M,E,P,I,k,L,D,B="input, select, textarea, button, video",H=Date.now(),G=[];T.animating=!1,T.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var X,A;T.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(X="touchstart"===a.type)||!("which"in a)||3!==a.which){if(T.params.noSwiping&&o(a,"."+T.params.noSwipingClass))return void(T.allowClick=!0);if(!T.params.swipeHandler||o(a,T.params.swipeHandler)){var t=T.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=T.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(T.device.ios&&T.params.iOSEdgeSwipeDetection&&t<=T.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,E=void 0,A=void 0,T.touches.startX=t,T.touches.startY=s,M=Date.now(),T.allowClick=!0,T.updateContainerSize(),T.swipeDirection=void 0,T.params.threshold>0&&(k=!1),"touchstart"!==a.type){var i=!0;e(a.target).is(B)&&(i=!1),document.activeElement&&e(document.activeElement).is(B)&&document.activeElement.blur(),i&&a.preventDefault()}T.emit("onTouchStart",T,a)}}}},T.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!X||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return T.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(T.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(T.params.onlyExternal)return T.allowClick=!1,void(S&&(T.touches.startX=T.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,T.touches.startY=T.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,M=Date.now()));if(X&&T.params.touchReleaseOnEdges&&!T.params.loop)if(T.isHorizontal()){if(T.touches.currentX<T.touches.startX&&T.translate<=T.maxTranslate()||T.touches.currentX>T.touches.startX&&T.translate>=T.minTranslate())return}else if(T.touches.currentY<T.touches.startY&&T.translate<=T.maxTranslate()||T.touches.currentY>T.touches.startY&&T.translate>=T.minTranslate())return;if(X&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(B))return C=!0,void(T.allowClick=!1);if(z&&T.emit("onTouchMove",T,a),!(a.targetTouches&&a.targetTouches.length>1)){if(T.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,T.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===E){var t;T.isHorizontal()&&T.touches.currentY===T.touches.startY||!T.isHorizontal()&&T.touches.currentX===T.touches.startX?E=!1:(t=180*Math.atan2(Math.abs(T.touches.currentY-T.touches.startY),Math.abs(T.touches.currentX-T.touches.startX))/Math.PI,E=T.isHorizontal()?t>T.params.touchAngle:90-t>T.params.touchAngle)}if(E&&T.emit("onTouchMoveOpposite",T,a),void 0===A&&(T.touches.currentX===T.touches.startX&&T.touches.currentY===T.touches.startY||(A=!0)),S){if(E)return void(S=!1);if(A){T.allowClick=!1,T.emit("onSliderMove",T,a),a.preventDefault(),T.params.touchMoveStopPropagation&&!T.params.nested&&a.stopPropagation(),C||(i.loop&&T.fixLoop(),I=T.getWrapperTranslate(),T.setWrapperTransition(0),T.animating&&T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),T.params.autoplay&&T.autoplaying&&(T.params.autoplayDisableOnInteraction?T.stopAutoplay():T.pauseAutoplay()),D=!1,!T.params.grabCursor||T.params.allowSwipeToNext!==!0&&T.params.allowSwipeToPrev!==!0||T.setGrabCursor(!0)),C=!0;var s=T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY;s*=T.params.touchRatio,T.rtl&&(s=-s),T.swipeDirection=s>0?"prev":"next",P=s+I;var r=!0;if(s>0&&P>T.minTranslate()?(r=!1,T.params.resistance&&(P=T.minTranslate()-1+Math.pow(-T.minTranslate()+I+s,T.params.resistanceRatio))):s<0&&P<T.maxTranslate()&&(r=!1,T.params.resistance&&(P=T.maxTranslate()+1-Math.pow(T.maxTranslate()-I-s,T.params.resistanceRatio))),r&&(a.preventedByNestedSwiper=!0),!T.params.allowSwipeToNext&&"next"===T.swipeDirection&&P<I&&(P=I),!T.params.allowSwipeToPrev&&"prev"===T.swipeDirection&&P>I&&(P=I),T.params.threshold>0){if(!(Math.abs(s)>T.params.threshold||k))return void(P=I);if(!k)return k=!0,T.touches.startX=T.touches.currentX,T.touches.startY=T.touches.currentY,P=I,void(T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY)}T.params.followFinger&&((T.params.freeMode||T.params.watchSlidesProgress)&&T.updateActiveIndex(),T.params.freeMode&&(0===G.length&&G.push({position:T.touches[T.isHorizontal()?"startX":"startY"],time:M}),G.push({position:T.touches[T.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),T.updateProgress(P),T.setWrapperTranslate(P))}}}}},T.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),z&&T.emit("onTouchEnd",T,a),z=!1,S){T.params.grabCursor&&C&&S&&(T.params.allowSwipeToNext===!0||T.params.allowSwipeToPrev===!0)&&T.setGrabCursor(!1);var t=Date.now(),s=t-M;if(T.allowClick&&(T.updateClickedSlide(a),T.emit("onTap",T,a),s<300&&t-H>300&&(L&&clearTimeout(L),L=setTimeout(function(){T&&(T.params.paginationHide&&T.paginationContainer.length>0&&!e(a.target).hasClass(T.params.bulletClass)&&T.paginationContainer.toggleClass(T.params.paginationHiddenClass),T.emit("onClick",T,a))},300)),s<300&&t-H<300&&(L&&clearTimeout(L),T.emit("onDoubleTap",T,a))),H=Date.now(),setTimeout(function(){T&&(T.allowClick=!0)},0),!S||!C||!T.swipeDirection||0===T.touches.diff||P===I)return void(S=C=!1);S=C=!1;var i;if(i=T.params.followFinger?T.rtl?T.translate:-T.translate:-P,T.params.freeMode){if(i<-T.minTranslate())return void T.slideTo(T.activeIndex);if(i>-T.maxTranslate())return void(T.slides.length<T.snapGrid.length?T.slideTo(T.snapGrid.length-1):T.slideTo(T.slides.length-1));if(T.params.freeModeMomentum){if(G.length>1){var r=G.pop(),n=G.pop(),o=r.position-n.position,l=r.time-n.time;T.velocity=o/l,T.velocity=T.velocity/2,Math.abs(T.velocity)<T.params.freeModeMinimumVelocity&&(T.velocity=0),(l>150||(new window.Date).getTime()-r.time>300)&&(T.velocity=0)}else T.velocity=0;T.velocity=T.velocity*T.params.freeModeMomentumVelocityRatio,G.length=0;var p=1e3*T.params.freeModeMomentumRatio,d=T.velocity*p,u=T.translate+d;T.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(T.velocity)*T.params.freeModeMomentumBounceRatio;if(u<T.maxTranslate())T.params.freeModeMomentumBounce?(u+T.maxTranslate()<-h&&(u=T.maxTranslate()-h),c=T.maxTranslate(),m=!0,D=!0):u=T.maxTranslate();else if(u>T.minTranslate())T.params.freeModeMomentumBounce?(u-T.minTranslate()>h&&(u=T.minTranslate()+h),c=T.minTranslate(),m=!0,D=!0):u=T.minTranslate();else if(T.params.freeModeSticky){var g,f=0;for(f=0;f<T.snapGrid.length;f+=1)if(T.snapGrid[f]>-u){g=f;break}u=Math.abs(T.snapGrid[g]-u)<Math.abs(T.snapGrid[g-1]-u)||"next"===T.swipeDirection?T.snapGrid[g]:T.snapGrid[g-1],T.rtl||(u=-u)}if(0!==T.velocity)p=T.rtl?Math.abs((-u-T.translate)/T.velocity):Math.abs((u-T.translate)/T.velocity);else if(T.params.freeModeSticky)return void T.slideReset();T.params.freeModeMomentumBounce&&m?(T.updateProgress(c),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating=!0,T.wrapper.transitionEnd(function(){T&&D&&(T.emit("onMomentumBounce",T),T.setWrapperTransition(T.params.speed),T.setWrapperTranslate(c),T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))})):T.velocity?(T.updateProgress(u),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))):T.updateProgress(u),T.updateActiveIndex()}return void((!T.params.freeModeMomentum||s>=T.params.longSwipesMs)&&(T.updateProgress(),T.updateActiveIndex()))}var v,w=0,y=T.slidesSizesGrid[0];for(v=0;v<T.slidesGrid.length;v+=T.params.slidesPerGroup)void 0!==T.slidesGrid[v+T.params.slidesPerGroup]?i>=T.slidesGrid[v]&&i<T.slidesGrid[v+T.params.slidesPerGroup]&&(w=v,y=T.slidesGrid[v+T.params.slidesPerGroup]-T.slidesGrid[v]):i>=T.slidesGrid[v]&&(w=v,y=T.slidesGrid[T.slidesGrid.length-1]-T.slidesGrid[T.slidesGrid.length-2]);var x=(i-T.slidesGrid[w])/y;if(s>T.params.longSwipesMs){if(!T.params.longSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&(x>=T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w)),"prev"===T.swipeDirection&&(x>1-T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w))}else{if(!T.params.shortSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&T.slideTo(w+T.params.slidesPerGroup),"prev"===T.swipeDirection&&T.slideTo(w)}}},T._slideTo=function(e,a){return T.slideTo(e,a,!0,!0)},T.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),T.snapIndex=Math.floor(e/T.params.slidesPerGroup),T.snapIndex>=T.snapGrid.length&&(T.snapIndex=T.snapGrid.length-1);var i=-T.snapGrid[T.snapIndex];if(T.params.autoplay&&T.autoplaying&&(s||!T.params.autoplayDisableOnInteraction?T.pauseAutoplay(a):T.stopAutoplay()),T.updateProgress(i),T.params.normalizeSlideIndex)for(var r=0;r<T.slidesGrid.length;r++)-Math.floor(100*i)>=Math.floor(100*T.slidesGrid[r])&&(e=r);return!(!T.params.allowSwipeToNext&&i<T.translate&&i<T.minTranslate())&&(!(!T.params.allowSwipeToPrev&&i>T.translate&&i>T.maxTranslate()&&(T.activeIndex||0)!==e)&&(void 0===a&&(a=T.params.speed),T.previousIndex=T.activeIndex||0,T.activeIndex=e,T.updateRealIndex(),T.rtl&&-i===T.translate||!T.rtl&&i===T.translate?(T.params.autoHeight&&T.updateAutoHeight(),T.updateClasses(),"slide"!==T.params.effect&&T.setWrapperTranslate(i),!1):(T.updateClasses(),T.onTransitionStart(t),0===a||T.browser.lteIE9?(T.setWrapperTranslate(i),T.setWrapperTransition(0),T.onTransitionEnd(t)):(T.setWrapperTranslate(i),T.setWrapperTransition(a),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd(t)}))),!0)))},T.onTransitionStart=function(e){void 0===e&&(e=!0),T.params.autoHeight&&T.updateAutoHeight(),T.lazy&&T.lazy.onTransitionStart(),e&&(T.emit("onTransitionStart",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeStart",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextStart",T):T.emit("onSlidePrevStart",T)))},T.onTransitionEnd=function(e){T.animating=!1,T.setWrapperTransition(0),void 0===e&&(e=!0),T.lazy&&T.lazy.onTransitionEnd(),e&&(T.emit("onTransitionEnd",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeEnd",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextEnd",T):T.emit("onSlidePrevEnd",T))),T.params.history&&T.history&&T.history.setHistory(T.params.history,T.activeIndex),T.params.hashnav&&T.hashnav&&T.hashnav.setHash()},T.slideNext=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)}return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)},T._slideNext=function(e){return T.slideNext(!0,e,!0)},T.slidePrev=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex-1,a,e,t)}return T.slideTo(T.activeIndex-1,a,e,t)},T._slidePrev=function(e){return T.slidePrev(!0,e,!0)},T.slideReset=function(e,a,t){return T.slideTo(T.activeIndex,a,e)},T.disableTouchControl=function(){return T.params.onlyExternal=!0,!0},T.enableTouchControl=function(){return T.params.onlyExternal=!1,!0},T.setWrapperTransition=function(e,a){T.wrapper.transition(e),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTransition(e),T.params.parallax&&T.parallax&&T.parallax.setTransition(e),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTransition(e),T.params.control&&T.controller&&T.controller.setTransition(e,a),T.emit("onSetTransition",T,e)},T.setWrapperTranslate=function(e,a,t){var s=0,i=0;T.isHorizontal()?s=T.rtl?-e:e:i=e,T.params.roundLengths&&(s=r(s),i=r(i)),T.params.virtualTranslate||(T.support.transforms3d?T.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):T.wrapper.transform("translate("+s+"px, "+i+"px)")),T.translate=T.isHorizontal()?s:i;var n,o=T.maxTranslate()-T.minTranslate();n=0===o?0:(e-T.minTranslate())/o,n!==T.progress&&T.updateProgress(e),a&&T.updateActiveIndex(),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTranslate(T.translate),T.params.parallax&&T.parallax&&T.parallax.setTranslate(T.translate),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTranslate(T.translate),T.params.control&&T.controller&&T.controller.setTranslate(T.translate,t),T.emit("onSetTranslate",T,T.translate)},T.getTranslate=function(e,a){var t,s,i,r;return void 0===a&&(a="x"),T.params.virtualTranslate?T.rtl?-T.translate:T.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=i.transform||i.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new window.WebKitCSSMatrix("none"===s?"":s)):(r=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=r.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?r.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?r.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),T.rtl&&s&&(s=-s),s||0)},T.getWrapperTranslate=function(e){return void 0===e&&(e=T.isHorizontal()?"x":"y"),T.getTranslate(T.wrapper[0],e)},T.observers=[],T.initObservers=function(){if(T.params.observeParents)for(var e=T.container.parents(),a=0;a<e.length;a++)l(e[a]);l(T.container[0],{childList:!1}),l(T.wrapper[0],{attributes:!1})},T.disconnectObservers=function(){for(var e=0;e<T.observers.length;e++)T.observers[e].disconnect();T.observers=[]},T.createLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove();var a=T.wrapper.children("."+T.params.slideClass);"auto"!==T.params.slidesPerView||T.params.loopedSlides||(T.params.loopedSlides=a.length),T.loopedSlides=parseInt(T.params.loopedSlides||T.params.slidesPerView,10),T.loopedSlides=T.loopedSlides+T.params.loopAdditionalSlides,T.loopedSlides>a.length&&(T.loopedSlides=a.length);var t,s=[],i=[];for(a.each(function(t,r){var n=e(this);t<T.loopedSlides&&i.push(r),t<a.length&&t>=a.length-T.loopedSlides&&s.push(r),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))},T.destroyLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove(),T.slides.removeAttr("data-swiper-slide-index")},T.reLoop=function(e){var a=T.activeIndex-T.loopedSlides;T.destroyLoop(),T.createLoop(),T.updateSlidesSize(),e&&T.slideTo(a+T.loopedSlides,0,!1)},T.fixLoop=function(){var e;T.activeIndex<T.loopedSlides?(e=T.slides.length-3*T.loopedSlides+T.activeIndex,e+=T.loopedSlides,T.slideTo(e,0,!1,!0)):("auto"===T.params.slidesPerView&&T.activeIndex>=2*T.loopedSlides||T.activeIndex>T.slides.length-2*T.params.slidesPerView)&&(e=-T.slides.length+T.activeIndex+T.loopedSlides,e+=T.loopedSlides,T.slideTo(e,0,!1,!0))},T.appendSlide=function(e){if(T.params.loop&&T.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&T.wrapper.append(e[a]);else T.wrapper.append(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0)},T.prependSlide=function(e){T.params.loop&&T.destroyLoop();var a=T.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&T.wrapper.prepend(e[t]);a=T.activeIndex+e.length}else T.wrapper.prepend(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.slideTo(a,0,!1)},T.removeSlide=function(e){T.params.loop&&(T.destroyLoop(),T.slides=T.wrapper.children("."+T.params.slideClass));var a,t=T.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.params.loop?T.slideTo(t+T.loopedSlides,0,!1):T.slideTo(t,0,!1)},T.removeAllSlides=function(){for(var e=[],a=0;a<T.slides.length;a++)e.push(a);T.removeSlide(e)},T.effects={fade:{setTranslate:function(){for(var e=0;e<T.slides.length;e++){var a=T.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;T.params.virtualTranslate||(s-=T.translate);var i=0;T.isHorizontal()||(i=s,s=0);var r=T.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:r}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){if(T.slides.transition(e),T.params.virtualTranslate&&0!==e){var a=!1;T.slides.transitionEnd(function(){if(!a&&T){a=!0,T.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)T.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<T.slides.length;a++){var t=T.slides.eq(a),s=t[0].progress;T.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,r=-180*s,n=r,o=0,l=-i,p=0;if(T.isHorizontal()?T.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+T.slides.length,T.params.flip.slideShadows){var d=T.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=T.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),T.params.virtualTranslate&&0!==a){var t=!1;T.slides.eq(T.activeIndex).transitionEnd(function(){if(!t&&T&&e(this).hasClass(T.params.slideActiveClass)){t=!0,T.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)T.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;T.params.cube.shadow&&(T.isHorizontal()?(a=T.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),T.wrapper.append(a)),a.css({height:T.width+"px"})):(a=T.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),T.container.append(a))));for(var s=0;s<T.slides.length;s++){var i=T.slides.eq(s),r=90*s,n=Math.floor(r/360);T.rtl&&(r=-r,n=Math.floor(-r/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*T.size,d=0):(s-1)%4==0?(l=0,d=4*-n*T.size):(s-2)%4==0?(l=T.size+4*n*T.size,d=T.size):(s-3)%4==0&&(l=-T.size,d=3*T.size+4*T.size*n),T.rtl&&(l=-l),T.isHorizontal()||(p=l,l=0);var u="rotateX("+(T.isHorizontal()?0:-r)+"deg) rotateY("+(T.isHorizontal()?r:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,T.rtl&&(t=90*-s-90*o)),i.transform(u),T.params.cube.slideShadows){var c=T.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=T.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(T.wrapper.css({"-webkit-transform-origin":"50% 50% -"+T.size/2+"px","-moz-transform-origin":"50% 50% -"+T.size/2+"px","-ms-transform-origin":"50% 50% -"+T.size/2+"px","transform-origin":"50% 50% -"+T.size/2+"px"}),T.params.cube.shadow)if(T.isHorizontal())a.transform("translate3d(0px, "+(T.width/2+T.params.cube.shadowOffset)+"px, "+-T.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+T.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),f=T.params.cube.shadowScale,v=T.params.cube.shadowScale/g,w=T.params.cube.shadowOffset;a.transform("scale3d("+f+", 1, "+v+") translate3d(0px, "+(T.height/2+w)+"px, "+-T.height/2/v+"px) rotateX(-90deg)")}var y=T.isSafari||T.isUiWebView?-T.size/2:0;T.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(T.isHorizontal()?0:t)+"deg) rotateY("+(T.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),T.params.cube.shadow&&!T.isHorizontal()&&T.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=T.translate,t=T.isHorizontal()?-a+T.width/2:-a+T.height/2,s=T.isHorizontal()?T.params.coverflow.rotate:-T.params.coverflow.rotate,i=T.params.coverflow.depth,r=0,n=T.slides.length;r<n;r++){var o=T.slides.eq(r),l=T.slidesSizesGrid[r],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*T.params.coverflow.modifier,u=T.isHorizontal()?s*d:0,c=T.isHorizontal()?0:s*d,m=-i*Math.abs(d),h=T.isHorizontal()?0:T.params.coverflow.stretch*d,g=T.isHorizontal()?T.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var f="translate3d("+g+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(f),o[0].style.zIndex=1-Math.abs(Math.round(d)),T.params.coverflow.slideShadows){var v=T.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=T.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(T.browser.ie){T.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},T.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==T.slides.length)){var s=T.slides.eq(a),i=s.find("."+T.params.lazyLoadingClass+":not(."+T.params.lazyStatusLoadedClass+"):not(."+T.params.lazyStatusLoadingClass+")");!s.hasClass(T.params.lazyLoadingClass)||s.hasClass(T.params.lazyStatusLoadedClass)||s.hasClass(T.params.lazyStatusLoadingClass)||(i=i.add(s[0])),0!==i.length&&i.each(function(){var a=e(this);a.addClass(T.params.lazyStatusLoadingClass);var i=a.attr("data-background"),r=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");T.loadImage(a[0],r||i,n,o,!1,function(){if(void 0!==T&&null!==T&&T){if(i?(a.css("background-image",'url("'+i+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),r&&(a.attr("src",r),a.removeAttr("data-src"))),a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),s.find("."+T.params.lazyPreloaderClass+", ."+T.params.preloaderClass).remove(),T.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(T.params.slideDuplicateClass)){var l=T.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+T.params.slideDuplicateClass+")");T.lazy.loadImageInSlide(l.index(),!1)}else{var p=T.wrapper.children("."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');T.lazy.loadImageInSlide(p.index(),!1)}}T.emit("onLazyImageReady",T,s[0],a[0])}}),T.emit("onLazyImageLoad",T,s[0],a[0])})}},load:function(){var a,t=T.params.slidesPerView;if("auto"===t&&(t=0),T.lazy.initialImageLoaded||(T.lazy.initialImageLoaded=!0),T.params.watchSlidesVisibility)T.wrapper.children("."+T.params.slideVisibleClass).each(function(){T.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=T.activeIndex;a<T.activeIndex+t;a++)T.slides[a]&&T.lazy.loadImageInSlide(a);else T.lazy.loadImageInSlide(T.activeIndex);if(T.params.lazyLoadingInPrevNext)if(t>1||T.params.lazyLoadingInPrevNextAmount&&T.params.lazyLoadingInPrevNextAmount>1){var s=T.params.lazyLoadingInPrevNextAmount,i=t,r=Math.min(T.activeIndex+i+Math.max(s,i),T.slides.length),n=Math.max(T.activeIndex-Math.max(i,s),0);for(a=T.activeIndex+t;a<r;a++)T.slides[a]&&T.lazy.loadImageInSlide(a);for(a=n;a<T.activeIndex;a++)T.slides[a]&&T.lazy.loadImageInSlide(a)}else{var o=T.wrapper.children("."+T.params.slideNextClass);o.length>0&&T.lazy.loadImageInSlide(o.index());var l=T.wrapper.children("."+T.params.slidePrevClass);l.length>0&&T.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){T.params.lazyLoading&&(T.params.lazyLoadingOnTransitionStart||!T.params.lazyLoadingOnTransitionStart&&!T.lazy.initialImageLoaded)&&T.lazy.load()},onTransitionEnd:function(){T.params.lazyLoading&&!T.params.lazyLoadingOnTransitionStart&&T.lazy.load()}},T.scrollbar={isTouched:!1,setDragPosition:function(e){var a=T.scrollbar,t=T.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[T.isHorizontal()?"left":"top"]-a.dragSize/2,i=-T.minTranslate()*a.moveDivider,r=-T.maxTranslate()*a.moveDivider;s<i?s=i:s>r&&(s=r),s=-s/a.moveDivider,T.updateProgress(s),T.setWrapperTranslate(s,!0)},dragStart:function(e){var a=T.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),T.params.scrollbarHide&&a.track.css("opacity",1),T.wrapper.transition(100),a.drag.transition(100),T.emit("onScrollbarDragStart",T)},dragMove:function(e){var a=T.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),T.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),T.emit("onScrollbarDragMove",T))},dragEnd:function(e){var a=T.scrollbar;a.isTouched&&(a.isTouched=!1,T.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),T.emit("onScrollbarDragEnd",T),T.params.scrollbarSnapOnRelease&&T.slideReset())},draggableEvents:function(){return T.params.simulateTouch!==!1||T.support.touch?T.touchEvents:T.touchEventsDesktop}(),enableDraggable:function(){var a=T.scrollbar,t=T.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=T.scrollbar,t=T.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(T.params.scrollbar){var a=T.scrollbar;a.track=e(T.params.scrollbar),T.params.uniqueNavElements&&"string"==typeof T.params.scrollbar&&a.track.length>1&&1===T.container.find(T.params.scrollbar).length&&(a.track=T.container.find(T.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=T.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=T.size/T.virtualSize,a.moveDivider=a.divider*(a.trackSize/T.size),a.dragSize=a.trackSize*a.divider,T.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",T.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(T.params.scrollbar){var e,a=T.scrollbar,t=(T.translate,a.dragSize);e=(a.trackSize-a.dragSize)*T.progress,T.rtl&&T.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),T.isHorizontal()?(T.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(T.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),T.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){T.params.scrollbar&&T.scrollbar.drag.transition(e)}},T.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,i){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=i?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,i;this.x.length;this.interpolate=function(e){return e?(i=t(this.x,e),s=i-1,(e-this.x[s])*(this.y[i]-this.y[s])/(this.x[i]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){T.controller.spline||(T.controller.spline=T.params.loop?new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid):new T.controller.LinearSpline(T.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-T.translate:T.translate,"slide"===T.params.controlBy&&(T.controller.getInterpolateFunction(a),r=-T.controller.spline.interpolate(-e)),r&&"container"!==T.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(T.maxTranslate()-T.minTranslate()),r=(e-T.minTranslate())*i+a.minTranslate()),T.params.controlInverse&&(r=a.maxTranslate()-r),a.updateProgress(r),a.setWrapperTranslate(r,!1,T),a.updateActiveIndex()}var i,r,n=T.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,T),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){r&&(a.params.loop&&"slide"===T.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,r=T.params.control;if(Array.isArray(r))for(i=0;i<r.length;i++)r[i]!==t&&r[i]instanceof a&&s(r[i]);else r instanceof a&&t!==r&&s(r)}},T.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==T.slides.eq(T.activeIndex).attr("data-hash")&&T.slideTo(T.wrapper.children("."+T.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",T.hashnav.onHashCange)},setHash:function(){
if(T.hashnav.initialized&&T.params.hashnav)if(T.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+T.slides.eq(T.activeIndex).attr("data-hash")||"");else{var e=T.slides.eq(T.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(T.params.hashnav&&!T.params.history){T.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=T.slides.length;a<t;a++){var s=T.slides.eq(a),i=s.attr("data-hash")||s.attr("data-history");if(i===e&&!s.hasClass(T.params.slideDuplicateClass)){var r=s.index();T.slideTo(r,0,T.params.runCallbacksOnInit,!0)}}T.params.hashnavWatchState&&T.hashnav.attachEvents()}},destroy:function(){T.params.hashnavWatchState&&T.hashnav.attachEvents(!0)}},T.history={init:function(){if(T.params.history){if(!window.history||!window.history.pushState)return T.params.history=!1,void(T.params.hashnav=!0);T.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,T.params.runCallbacksOnInit),T.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){T.history.paths=T.history.getPathValues(),T.history.scrollToSlide(T.params.speed,T.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(T.history.initialized&&T.params.history){var t=T.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),T.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,i=T.slides.length;s<i;s++){var r=T.slides.eq(s),n=this.slugify(r.attr("data-history"));if(n===a&&!r.hasClass(T.params.slideDuplicateClass)){var o=r.index();T.slideTo(o,e,t)}}else T.slideTo(0,e,t)}},T.disableKeyboardControl=function(){T.params.keyboardControl=!1,e(document).off("keydown",p)},T.enableKeyboardControl=function(){T.params.keyboardControl=!0,e(document).on("keydown",p)},T.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},T.params.mousewheelControl&&(T.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),T.disableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var a=T.container;return"container"!==T.params.mousewheelEventsTarged&&(a=e(T.params.mousewheelEventsTarged)),a.off(T.mousewheel.event,u),T.params.mousewheelControl=!1,!0},T.enableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var a=T.container;return"container"!==T.params.mousewheelEventsTarged&&(a=e(T.params.mousewheelEventsTarged)),a.on(T.mousewheel.event,u),T.params.mousewheelControl=!0,!0},T.parallax={setTranslate:function(){T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,T.progress)}),T.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=T.params.speed),T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},T.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:T.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(i-t,2))},onGestureStart:function(a){var t=T.zoom;if(!T.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=T.slides.eq(T.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+T.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||T.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=T.zoom;if(!T.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(T.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<T.params.zoomMin&&(a.scale=T.params.zoomMin+1-Math.pow(T.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=T.zoom;!T.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),T.params.zoomMin),a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=T.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(T.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=T.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=T.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),T.rtl&&(a.image.startX=-a.image.startX),T.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(T.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!T.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,i=300,r=t.velocity.x*s,n=t.image.currentX+r,o=t.velocity.y*i,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(i=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,i);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,u=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-u/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var i,r,n,o,l,p,d,u,c,m,h,g,f,v,w,y,x,T;void 0===s.image.touchesStart.x&&t?(i="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,r="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(i=s.image.touchesStart.x,r=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-i,p=o+T/2-r,c=s.gesture.image[0].offsetWidth,m=s.gesture.image[0].offsetHeight,h=c*s.scale,g=m*s.scale,f=Math.min(x/2-h/2,0),v=Math.min(T/2-g/2,0),w=-f,y=-v,d=l*s.scale,u=p*s.scale,d<f&&(d=f),d>w&&(d=w),u<v&&(u=v),u>y&&(u=y)):(d=0,u=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+u+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(T.params.zoom){var s=(T.slides,!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1});T.support.gestures?(T.slides[t]("gesturestart",T.zoom.onGestureStart,s),T.slides[t]("gesturechange",T.zoom.onGestureChange,s),T.slides[t]("gestureend",T.zoom.onGestureEnd,s)):"touchstart"===T.touchEvents.start&&(T.slides[t](T.touchEvents.start,T.zoom.onGestureStart,s),T.slides[t](T.touchEvents.move,T.zoom.onGestureChange,s),T.slides[t](T.touchEvents.end,T.zoom.onGestureEnd,s)),T[t]("touchStart",T.zoom.onTouchStart),T.slides.each(function(a,s){e(s).find("."+T.params.zoomContainerClass).length>0&&e(s)[t](T.touchEvents.move,T.zoom.onTouchMove)}),T[t]("touchEnd",T.zoom.onTouchEnd),T[t]("transitionEnd",T.zoom.onTransitionEnd),T.params.zoomToggle&&T.on("doubleTap",T.zoom.toggleZoom)}},init:function(){T.zoom.attachEvents()},destroy:function(){T.zoom.attachEvents(!0)}},T._plugins=[];for(var Y in T.plugins){var O=T.plugins[Y](T,T.params[Y]);O&&T._plugins.push(O)}return T.callPlugins=function(e){for(var a=0;a<T._plugins.length;a++)e in T._plugins[a]&&T._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.emitterEventListeners={},T.emit=function(e){T.params[e]&&T.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(T.emitterEventListeners[e])for(a=0;a<T.emitterEventListeners[e].length;a++)T.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);T.callPlugins&&T.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.on=function(e,a){return e=m(e),T.emitterEventListeners[e]||(T.emitterEventListeners[e]=[]),T.emitterEventListeners[e].push(a),T},T.off=function(e,a){var t;if(e=m(e),void 0===a)return T.emitterEventListeners[e]=[],T;if(T.emitterEventListeners[e]&&0!==T.emitterEventListeners[e].length){for(t=0;t<T.emitterEventListeners[e].length;t++)T.emitterEventListeners[e][t]===a&&T.emitterEventListeners[e].splice(t,1);return T}},T.once=function(e,a){e=m(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),T.off(e,t)};return T.on(e,t),T},T.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(T.params.nextButton)?(T.onClickNext(a),T.isEnd?T.a11y.notify(T.params.lastSlideMessage):T.a11y.notify(T.params.nextSlideMessage)):e(a.target).is(T.params.prevButton)&&(T.onClickPrev(a),T.isBeginning?T.a11y.notify(T.params.firstSlideMessage):T.a11y.notify(T.params.prevSlideMessage)),e(a.target).is("."+T.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+T.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=T.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.a11y.makeFocusable(T.nextButton),T.a11y.addRole(T.nextButton,"button"),T.a11y.addLabel(T.nextButton,T.params.nextSlideMessage)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.a11y.makeFocusable(T.prevButton),T.a11y.addRole(T.prevButton,"button"),T.a11y.addLabel(T.prevButton,T.params.prevSlideMessage)),e(T.container).append(T.a11y.liveRegion)},initPagination:function(){T.params.pagination&&T.params.paginationClickable&&T.bullets&&T.bullets.length&&T.bullets.each(function(){var a=e(this);T.a11y.makeFocusable(a),T.a11y.addRole(a,"button"),T.a11y.addLabel(a,T.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){T.a11y.liveRegion&&T.a11y.liveRegion.length>0&&T.a11y.liveRegion.remove()}},T.init=function(){T.params.loop&&T.createLoop(),T.updateContainerSize(),T.updateSlidesSize(),T.updatePagination(),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.set(),T.params.scrollbarDraggable&&T.scrollbar.enableDraggable()),"slide"!==T.params.effect&&T.effects[T.params.effect]&&(T.params.loop||T.updateProgress(),T.effects[T.params.effect].setTranslate()),T.params.loop?T.slideTo(T.params.initialSlide+T.loopedSlides,0,T.params.runCallbacksOnInit):(T.slideTo(T.params.initialSlide,0,T.params.runCallbacksOnInit),0===T.params.initialSlide&&(T.parallax&&T.params.parallax&&T.parallax.setTranslate(),T.lazy&&T.params.lazyLoading&&(T.lazy.load(),T.lazy.initialImageLoaded=!0))),T.attachEvents(),T.params.observer&&T.support.observer&&T.initObservers(),T.params.preloadImages&&!T.params.lazyLoading&&T.preloadImages(),T.params.zoom&&T.zoom&&T.zoom.init(),T.params.autoplay&&T.startAutoplay(),T.params.keyboardControl&&T.enableKeyboardControl&&T.enableKeyboardControl(),T.params.mousewheelControl&&T.enableMousewheelControl&&T.enableMousewheelControl(),T.params.hashnavReplaceState&&(T.params.replaceState=T.params.hashnavReplaceState),T.params.history&&T.history&&T.history.init(),T.params.hashnav&&T.hashnav&&T.hashnav.init(),T.params.a11y&&T.a11y&&T.a11y.init(),T.emit("onInit",T)},T.cleanupStyles=function(){T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),T.wrapper.removeAttr("style"),T.slides&&T.slides.length&&T.slides.removeClass([T.params.slideVisibleClass,T.params.slideActiveClass,T.params.slideNextClass,T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),T.paginationContainer&&T.paginationContainer.length&&T.paginationContainer.removeClass(T.params.paginationHiddenClass),T.bullets&&T.bullets.length&&T.bullets.removeClass(T.params.bulletActiveClass),T.params.prevButton&&e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),T.params.nextButton&&e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.track&&T.scrollbar.track.length&&T.scrollbar.track.removeAttr("style"),T.scrollbar.drag&&T.scrollbar.drag.length&&T.scrollbar.drag.removeAttr("style"))},T.destroy=function(e,a){T.detachEvents(),T.stopAutoplay(),T.params.scrollbar&&T.scrollbar&&T.params.scrollbarDraggable&&T.scrollbar.disableDraggable(),T.params.loop&&T.destroyLoop(),a&&T.cleanupStyles(),T.disconnectObservers(),T.params.zoom&&T.zoom&&T.zoom.destroy(),T.params.keyboardControl&&T.disableKeyboardControl&&T.disableKeyboardControl(),T.params.mousewheelControl&&T.disableMousewheelControl&&T.disableMousewheelControl(),T.params.a11y&&T.a11y&&T.a11y.destroy(),T.params.history&&!T.params.replaceState&&window.removeEventListener("popstate",T.history.setHistoryPopState),T.params.hashnav&&T.hashnav&&T.hashnav.destroy(),T.emit("onDestroy"),e!==!1&&(T=null)},T.init(),T}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||i||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var s=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var r,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)s.push(n.childNodes[i])}else for(r=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<r.length;i++)r[i]&&s.push(r[i])}else if(a.nodeType||a===window||a===document)s.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)s.push(a[i]);return new e(s)};return e.prototype={addClass:function(e){if(void 0===e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.remove(a[t]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var s in e)this[t][s]=e[s],this[t].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if(void 0!==a){for(var t=0;t<this.length;t++){var s=this[t];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a}return this}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,s,i){function r(e){var i=e.target;if(a(i).is(t))s.call(i,e);else for(var r=a(i).parents(),n=0;n<r.length;n++)a(r[n]).is(t)&&s.call(r[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(s=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],s,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:s,liveListener:r}),this[n].addEventListener(l[o],r,i);return this},off:function(e,a,t,s){for(var i=e.split(" "),r=0;r<i.length;r++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],s=arguments[2]||!1),this[n].removeEventListener(i[r],t,s);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[r],this[n].dom7LiveListeners[o].liveListener,s);return this},once:function(e,a,t,s){function i(n){t(n),r.off(e,a,i,s)}var r=this;"function"==typeof a&&(a=!1,t=arguments[1],s=arguments[2]),r.on(e,a,i,s)},trigger:function(e,a){for(var t=0;t<this.length;t++){var s;try{s=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(t){s=document.createEvent("Event"),s.initEvent(e,!0,!0),s.detail=a}this[t].dispatchEvent(s)}return this},transitionEnd:function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,s=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,r=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+r-s,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var s in e)this[t].style[s]=e[s];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var s,i;if("string"==typeof t){var r=this[0];if(r===document)return t===document;if(r===window)return t===window;if(r.matches)return r.matches(t);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(t);if(r.mozMatchesSelector)return r.mozMatchesSelector(t);if(r.msMatchesSelector)return r.msMatchesSelector(t);for(s=a(t),i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(s=t.nodeType?[t]:t,i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if(void 0===a)return this;var t,s=this.length;return a>s-1?new e([]):a<0?(t=s+a,new e(t<0?[]:[this[t]])):new e([this[a]])},append:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].appendChild(a[s]);else this[t].appendChild(a);return this},prepend:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,s=i.childNodes.length-1;s>=0;s--)this[t].insertBefore(i.childNodes[s],this[t].childNodes[0])}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].insertBefore(a[s],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var r=i.nextElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var r=i.previousElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},parent:function(e){for(var t=[],s=0;s<this.length;s++)e?a(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].querySelectorAll(a),r=0;r<i.length;r++)t.push(i[r]);return new e(t)},children:function(t){for(var s=[],i=0;i<this.length;i++)for(var r=this[i].childNodes,n=0;n<r.length;n++)t?1===r[n].nodeType&&a(r[n]).is(t)&&s.push(r[n]):1===r[n].nodeType&&s.push(r[n]);return new e(a.unique(s))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,s=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)s[s.length]=i[t],s.length++}return s}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)a.indexOf(e[t])===-1&&a.push(e[t]);return a},a}()),s=["jQuery","Zepto","Dom7"],i=0;i<s.length;i++)window[s[i]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[s[i]]);var r;r=void 0===t?window.Dom7||window.Zepto||window.jQuery:t,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){
return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.min.js.map;
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );;
;( function( window ) {
	
	'use strict';

	/**
	 * based on from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
	 */
	function hasParent( e, p ) {
		if (!e) return false;
		var el = e.target||e.srcElement||e||false;
		while (el && el != p) {
			el = el.parentNode||false;
		}
		return (el!==false);
	};
	
	/**
	 * extend obj function
	 */
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * SelectFx function
	 */
	function SelectFx( el, options ) {	
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * SelectFx options
	 */
	SelectFx.prototype.options = {
		// if true all the links will open in a new tab.
		// if we want to be redirected when we click an option, we need to define a data-link attr on the option of the native select element
		newTab : true,
		// when opening the select element, the default placeholder (if any) is shown
		stickyPlaceholder : true,
		// callback when changing the value
		onChange : function( val ) { return false; }
	}

	/**
	 * init function
	 * initialize and cache some vars
	 */
	SelectFx.prototype._init = function() {
		// check if we are using a placeholder for the native select box
		// we assume the placeholder is disabled and selected by default
		var selectedOpt = this.el.querySelector( 'option[selected]' );
		this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;

		// get selected option (either the first option with attr selected or just the first option)
		this.selectedOpt = selectedOpt || this.el.querySelector( 'option' );

		// create structure
		this._createSelectEl();

		// all options
		this.selOpts = [].slice.call( this.selEl.querySelectorAll( 'li[data-option]' ) );
		
		// total options
		this.selOptsCount = this.selOpts.length;
		
		// current index
		this.current = this.selOpts.indexOf( this.selEl.querySelector( 'li.cs-selected' ) ) || -1;
		
		// placeholder elem
		this.selPlaceholder = this.selEl.querySelector( 'span.cs-placeholder' );

		// init events
		this._initEvents();
	}

	/**
	 * creates the structure for the select element
	 */
	SelectFx.prototype._createSelectEl = function() {
		var self = this, options = '', createOptionHTML = function(el) {
			var optclass = '', classes = '', link = '';

			if( el.selectedOpt && !this.foundSelected && !this.hasDefaultPlaceholder ) {
				classes += 'cs-selected ';
				this.foundSelected = true;
			}
			// extra classes
			if( el.getAttribute( 'data-class' ) ) {
				classes += el.getAttribute( 'data-class' );
			}
			// link options
			if( el.getAttribute( 'data-link' ) ) {
				link = 'data-link=' + el.getAttribute( 'data-link' );
			}

			if( classes !== '' ) {
				optclass = 'class="' + classes + '" ';
			}

			return '<li ' + optclass + link + ' data-option data-value="' + el.value + '"><span>' + el.textContent + '</span></li>';
		};

		[].slice.call( this.el.children ).forEach( function(el) {
			if( el.disabled ) { return; }

			var tag = el.tagName.toLowerCase();

			if( tag === 'option' ) {
				options += createOptionHTML(el);
			}
			else if( tag === 'optgroup' ) {
				options += '<li class="cs-optgroup"><span>' + el.label + '</span><ul>';
				[].slice.call( el.children ).forEach( function(opt) {
					options += createOptionHTML(opt);
				} );
				options += '</ul></li>';
			}
		} );

		var opts_el = '<div class="cs-options"><ul>' + options + '</ul></div>';
		this.selEl = document.createElement( 'div' );
		this.selEl.className = this.el.className;
		this.selEl.tabIndex = this.el.tabIndex;
		this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + '</span>' + opts_el;
		this.el.parentNode.appendChild( this.selEl );
		this.selEl.appendChild( this.el );
	}

	/**
	 * initialize the events
	 */
	SelectFx.prototype._initEvents = function() {
		var self = this;

		// open/close select
		this.selPlaceholder.addEventListener( 'click', function() {
			self._toggleSelect();
		} );

		// clicking the options
		this.selOpts.forEach( function(opt, idx) {
			opt.addEventListener( 'click', function() {
				self.current = idx;
				self._changeOption();
				// close select elem
				self._toggleSelect();
			} );
		} );

		// close the select element if the target it´s not the select element or one of its descendants..
		document.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( self._isOpen() && target !== self.selEl && !hasParent( target, self.selEl ) ) {
				self._toggleSelect();
			}
		} );

		// keyboard navigation events
		this.selEl.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;

			switch (keyCode) {
				// up key
				case 38:
					ev.preventDefault();
					self._navigateOpts('prev');
					break;
				// down key
				case 40:
					ev.preventDefault();
					self._navigateOpts('next');
					break;
				// space key
				case 32:
					ev.preventDefault();
					if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
						self._changeOption();
					}
					self._toggleSelect();
					break;
				// enter key
				case 13:
					ev.preventDefault();
					if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
						self._changeOption();
						self._toggleSelect();
					}
					break;
				// esc key
				case 27:
					ev.preventDefault();
					if( self._isOpen() ) {
						self._toggleSelect();
					}
					break;
			}
		} );
	}

	/**
	 * navigate with up/dpwn keys
	 */
	SelectFx.prototype._navigateOpts = function(dir) {
		if( !this._isOpen() ) {
			this._toggleSelect();
		}

		var tmpcurrent = typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
		
		if( dir === 'prev' && tmpcurrent > 0 || dir === 'next' && tmpcurrent < this.selOptsCount - 1 ) {
			// save pre selected current - if we click on option, or press enter, or press space this is going to be the index of the current option
			this.preSelCurrent = dir === 'next' ? tmpcurrent + 1 : tmpcurrent - 1;
			// remove focus class if any..
			this._removeFocus();
			// add class focus - track which option we are navigating
			classie.add( this.selOpts[this.preSelCurrent], 'cs-focus' );
		}
	}

	/**
	 * open/close select
	 * when opened show the default placeholder if any
	 */
	SelectFx.prototype._toggleSelect = function() {
		// remove focus class if any..
		this._removeFocus();
		
		if( this._isOpen() ) {
			if( this.current !== -1 ) {
				// update placeholder text
				this.selPlaceholder.textContent = this.selOpts[ this.current ].textContent;
			}
			classie.remove( this.selEl, 'cs-active' );
		}
		else {
			if( this.hasDefaultPlaceholder && this.options.stickyPlaceholder ) {
				// everytime we open we wanna see the default placeholder text
				this.selPlaceholder.textContent = this.selectedOpt.textContent;
			}
			classie.add( this.selEl, 'cs-active' );
		}
	}

	/**
	 * change option - the new value is set
	 */
	SelectFx.prototype._changeOption = function() {
		// if pre selected current (if we navigate with the keyboard)...
		if( typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ) {
			this.current = this.preSelCurrent;
			this.preSelCurrent = -1;
		}

		// current option
		var opt = this.selOpts[ this.current ];

		// update current selected value
		this.selPlaceholder.textContent = opt.textContent;
		
		// change native select element´s value
		this.el.value = opt.getAttribute( 'data-value' );

		// remove class cs-selected from old selected option and add it to current selected option
		var oldOpt = this.selEl.querySelector( 'li.cs-selected' );
		if( oldOpt ) {
			classie.remove( oldOpt, 'cs-selected' );
		}
		classie.add( opt, 'cs-selected' );

		// if there´s a link defined
		if( opt.getAttribute( 'data-link' ) ) {
			// open in new tab?
			if( this.options.newTab ) {
				window.open( opt.getAttribute( 'data-link' ), '_blank' );
			}
			else {
				window.location = opt.getAttribute( 'data-link' );
			}
		}

		// callback
		this.options.onChange( this.el.value );
	}

	/**
	 * returns true if select element is opened
	 */
	SelectFx.prototype._isOpen = function(opt) {
		return classie.has( this.selEl, 'cs-active' );
	}

	/**
	 * removes the focus class from the option
	 */
	SelectFx.prototype._removeFocus = function(opt) {
		var focusEl = this.selEl.querySelector( 'li.cs-focus' )
		if( focusEl ) {
			classie.remove( focusEl, 'cs-focus' );
		}
	}

	/**
	 * add to global namespace
	 */
	window.SelectFx = SelectFx;

} )( window );;
/*======
*
* Eventchamp Scripts
*
======*/
(function($){
	'use strict';

	/*====== Admin Bar ======*/
	$(function(){
		var controlwpadminbar = $("#wpadminbar").is("div");
		if(controlwpadminbar == "") {
		} else {
			var controlwpadminbarh = $("#wpadminbar").height();

			var headerHeight = $(".mobile-header").height();
			$(".mobile-header").css('top',controlwpadminbarh + 'px');
			$("#wpadminbar").addClass('convertFixed');
		}
	});



	/*====== Loader ======*/
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);



	/*====== Go Top Scroll ======*/
	$(function () {
		$('.go-top-icon').on("click", function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});



	/*====== Pretty Photo ======*/
	$(document).ready(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto({ social_tools: false });
	});



	/*====== Date Picker ======*/
	$(document).ready(function(){
		jQuery('.eventsearchdate-datepicker').datepicker({ dateFormat: 'yy-mm-dd' });	 
	});



	/*====== CS Select ======*/
	$(document).ready(function() {
		(function() {
			[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
				new SelectFx(el);
			} );
		})();
	});



	/*====== Latest Events Slider ======*/
	$(function() {
	  $('.latest-events-slider a, .eventchamp-event-counter a, .header a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});



	/*====== Tooltip ======*/
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});



	/*====== Mobile Header ======*/
	$(function () {
		$(document).on('click', '.mobile-header .mobile-menu-icon', function(){
			$('.mobile-header').addClass('mobile-menu-bars-actived');
			$('.mobile-header .mobile-menu-icon').addClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'far fa-times-circle');
			$('.mobile-menu').addClass('mobile-menu-opened');
			$('.mobile-menu-wrapper').addClass('mobile-menu-wrapper-opened');
		});

		$(document).on('click', '.mobile-header .mobile-menu-bars-opened', function(){
			$('.mobile-header .mobile-menu-icon').removeClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'fas fa-bars');
		});

		$(document).on('click', '.mobile-menu .mobile-menu-icon', function(){
			$('.mobile-menu').removeClass('mobile-menu-opened');
			$('.mobile-menu').removeClass('mobile-menu-wrapper-opened');
			$('.mobile-header').removeClass('mobile-menu-bars-actived');
			$('.mobile-menu-wrapper').removeClass('mobile-menu-wrapper-opened');
			$('.mobile-header .mobile-menu-icon').removeClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'fas fa-bars');
		});

		$(document).on('click', '.mobile-menu-wrapper-opened', function(){
			$('.mobile-menu').removeClass('mobile-menu-opened');
			$('.mobile-menu-wrapper').removeClass('mobile-menu-wrapper-opened');
			$('.mobile-header').removeClass('mobile-menu-bars-actived');
			$('.mobile-header .mobile-menu-icon').removeClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'fas fa-bars');
		});

		if($('.mobile-navbar li.dropdown .dropdown-menu').length){
			$('.mobile-navbar li.dropdown').append('<i class="fas fa-chevron-down"></i>');
			$('.mobile-navbar li.dropdown .fa-chevron-down').on('click', function() {
				$(this).prev('.dropdown-menu').slideToggle(500);
			});
		}

		$('.mobile-menu').scrollbar();

		$(document).on('click', '.user-box .user-box-login>ul>li.user-box-login-form .user-box-login-form-top-links li a', function(){
			$('.eventchamp-class').addClass('modal-open').delay(900);
		});

		$(document).on('click', '.user-box .user-box-login .close', function(){
			$('body').removeClass('modal-open');
		});
	});



	/*====== Global Swiper ======*/
	function gloriaSliders() {
		$('.gloria-sliders').each( function() {
			var cswiper = $(this),
				autoplay = $(this).data('aplay'),
				item = $(this).data('item'),
				sloop = $(this).data('sloop'),
				columnSpace = $(this).data('column-space'),
				effect = $(this).data('effect'),
				effectTime = $(this).data('effectTime'),
				pagination = $(this).data('pagination');

			var swiper = new Swiper(cswiper, {
				slidesPerView: item,
				autoplay: autoplay,
				loop: sloop,
				effect: effect,
				spaceBetween: columnSpace,
				nextButton: '.next',
				prevButton: '.prev',
				pagination: pagination,
				paginationClickable: true,
				preventClicks: true,
				preventClicksPropagation: true,
				breakpoints: {
					991: {
						slidesPerView: item < 6 ? item: 5, 
					},
					767: {
						slidesPerView: item < 6 ? item: 4, 
					},
					550: {
						slidesPerView: 1, 
					},
				}
			});

		});

	}
	gloriaSliders();



	/*====== Auto Height and Width for Sliders ======*/
	$(function(){
		$(window).resize(function(){
			var windowy = $(window).height();
			var windowx = $(window).width();
			$('.latest-events-slider .slider-wrapper').css('height',windowy + 'px');
			$('.event-counter-slider .bg-image').css('height',windowy + 'px');
			$('.eventchamp-event-counter').css('height',windowy + 'px');
			$('.slider-with-search-tool').css('height',windowy + 'px');
			$('.slider-with-search-tool .bg-image').css('height',windowy + 'px');
			$('.latest-events-slider .slider-wrapper').css('width',windowx + 'px');
			$('.event-counter-slider .bg-image').css('width',windowx + 'px');
			$('.eventchamp-event-counter').css('width',windowx + 'px');
			$('.slider-with-search-tool').css('width',windowx + 'px');
			$('.slider-with-search-tool .bg-image').css('width',windowx + 'px');
		}).resize();    
	});




	/*====== Number Counter ======*/
	$('.eventchamp-counter .number').counterUp({
		delay: 10,
		time: 2000
	});




	/*====== Plyr.js Setup ======*/
	$(function(){
		plyr.setup();
	});



	/*====== Tabs for Event Detail ======*/
	$('.event-detail-tabs .tab-content .tab-pane:first-child').addClass('active show');
	$('.event-detail-tabs .nav > li:first-child a').addClass('active');

	$('.eventchamp-dropdown .panel-group .panel:first-child .panel-collapse').addClass('in');
	$('.event-detail-tabs .tab-content #faq .panel-group .panel:first-child .panel-collapse').addClass('in');

	$('.contactLink').on('click', function(){
		$('.nav a[href="#contactform"]').click();
		$('html, body').animate({
			scrollTop: $("#contactform").offset().top
		}, 'slow');
	});

	$('.ticketLink').on('click', function(){
		$('.nav a[href="#tickets"]').click();
		$('html, body').animate({
			scrollTop: $("#tickets").offset().top
		}, 'slow');
	});



	/*====== FlexMenu Fixing ======*/
	$(document).on('click', 'li.flexMenu-viewMore', function(){
		$('li.flexMenu-viewMore li a.active').removeClass('active show');
		$(this).addClass('active show');
	});



	/*====== Categorized Events ======*/
	$('.categorized-events .tab-content .tab-pane:first-child').addClass('active show');
	$('.categorized-events .nav > li:first-child a').addClass('active');

} )( jQuery );;
;
jQuery(document).ready(function($){
			$('.categorized-events .nav').flexMenu({linkText:'More',linkTitle:'View More',linkTextAll:'Menu',linkTitleAll:'Open/Close Menu'});
			$('.event-detail-tabs .nav').flexMenu({linkText:'More',linkTitle:'View More',linkTextAll:'Menu',linkTitleAll:'Open/Close Menu'});
		});;
function pt_open_login_dialog(href){

	jQuery('#user_login_popup .modal-dialog').removeClass('registration-complete');

	var modal_dialog = jQuery('#user_login_popup .modal-dialog');
	modal_dialog.attr('data-active-tab', '');

	switch(href){

		case '#pt-register':
			modal_dialog.attr('data-active-tab', '#pt-register');
			break;

		case '#pt-login':
		default:
			modal_dialog.attr('data-active-tab', '#pt-login');
			break;
	}

	jQuery('#user_login_popup').modal('show');
}	

function pt_close_login_dialog(){

	jQuery('#user_login_popup').modal('hide');
}	

jQuery(function($){

	"use strict";
	/***************************
	**  LOGIN / REGISTER DIALOG
	***************************/

	// Open login/register modal
	$('[href="#pt-login"], [href="#pt-register"]').click(function(e){

		e.preventDefault();

		pt_open_login_dialog( $(this).attr('href') );

	});

	// Switch forms login/register
	$('.modal-footer a, a[href="#pt-reset-password"]').click(function(e){
		e.preventDefault();
		$('#user_login_popup .modal-dialog').attr('data-active-tab', $(this).attr('href'));
	});


	// Post login form
	$('#pt_login_form').on('submit', function(e){

		e.preventDefault();

		var button = $(this).find('button');
			button.button('loading');

		$.post(ptajax.ajaxurl, $('#pt_login_form').serialize(), function(data){

			var obj = $.parseJSON(data);

			$('.pt-login .pt-errors').html(obj.message);
			
			if(obj.error == false){
				$('#user_login_popup .modal-dialog').addClass('loading');
				window.location.reload(true);
				button.hide();
			}

			button.button('reset');
		});

	});


	// Post register form
	$('#pt_registration_form').on('submit', function(e){

		e.preventDefault();

		var button = $(this).find('button');
			button.button('loading');

		$.post(ptajax.ajaxurl, $('#pt_registration_form').serialize(), function(data){
			
			var obj = $.parseJSON(data);

			$('.pt-register .pt-errors').html(obj.message);
			
			if(obj.error == false){
				$('#user_login_popup .modal-dialog').addClass('registration-complete');
				// window.location.reload(true);
				button.hide();
			}

			button.button('reset');
			
		});

	});

	if(window.location.hash == '#login'){
		pt_open_login_dialog('#pt-login');
	}		

});;
/**
 * WordPress inline HTML embed
 *
 * @since 4.4.0
 *
 * This file cannot have ampersands in it. This is to ensure
 * it can be embedded in older versions of WordPress.
 * See https://core.trac.wordpress.org/changeset/35708.
 */
(function ( window, document ) {
	'use strict';

	var supportedBrowser = false,
		loaded = false;

		if ( document.querySelector ) {
			if ( window.addEventListener ) {
				supportedBrowser = true;
			}
		}

	/** @namespace wp */
	window.wp = window.wp || {};

	if ( !! window.wp.receiveEmbedMessage ) {
		return;
	}

	window.wp.receiveEmbedMessage = function( e ) {
		var data = e.data;
		if ( ! ( data.secret || data.message || data.value ) ) {
			return;
		}

		if ( /[^a-zA-Z0-9]/.test( data.secret ) ) {
			return;
		}

		var iframes = document.querySelectorAll( 'iframe[data-secret="' + data.secret + '"]' ),
			blockquotes = document.querySelectorAll( 'blockquote[data-secret="' + data.secret + '"]' ),
			i, source, height, sourceURL, targetURL;

		for ( i = 0; i < blockquotes.length; i++ ) {
			blockquotes[ i ].style.display = 'none';
		}

		for ( i = 0; i < iframes.length; i++ ) {
			source = iframes[ i ];

			if ( e.source !== source.contentWindow ) {
				continue;
			}

			source.removeAttribute( 'style' );

			/* Resize the iframe on request. */
			if ( 'height' === data.message ) {
				height = parseInt( data.value, 10 );
				if ( height > 1000 ) {
					height = 1000;
				} else if ( ~~height < 200 ) {
					height = 200;
				}

				source.height = height;
			}

			/* Link to a specific URL on request. */
			if ( 'link' === data.message ) {
				sourceURL = document.createElement( 'a' );
				targetURL = document.createElement( 'a' );

				sourceURL.href = source.getAttribute( 'src' );
				targetURL.href = data.value;

				/* Only continue if link hostname matches iframe's hostname. */
				if ( targetURL.host === sourceURL.host ) {
					if ( document.activeElement === source ) {
						window.top.location.href = data.value;
					}
				}
			}
		}
	};

	function onLoad() {
		if ( loaded ) {
			return;
		}

		loaded = true;

		var isIE10 = -1 !== navigator.appVersion.indexOf( 'MSIE 10' ),
			isIE11 = !!navigator.userAgent.match( /Trident.*rv:11\./ ),
			iframes = document.querySelectorAll( 'iframe.wp-embedded-content' ),
			iframeClone, i, source, secret;

		for ( i = 0; i < iframes.length; i++ ) {
			source = iframes[ i ];

			if ( ! source.getAttribute( 'data-secret' ) ) {
				/* Add secret to iframe */
				secret = Math.random().toString( 36 ).substr( 2, 10 );
				source.src += '#?secret=' + secret;
				source.setAttribute( 'data-secret', secret );
			}

			/* Remove security attribute from iframes in IE10 and IE11. */
			if ( ( isIE10 || isIE11 ) ) {
				iframeClone = source.cloneNode( true );
				iframeClone.removeAttribute( 'security' );
				source.parentNode.replaceChild( iframeClone, source );
			}
		}
	}

	if ( supportedBrowser ) {
		window.addEventListener( 'message', window.wp.receiveEmbedMessage, false );
		document.addEventListener( 'DOMContentLoaded', onLoad, false );
		window.addEventListener( 'load', onLoad, false );
	}
})( window, document );
;

function mdf_init_posts_messenger() {   

    jQuery('#mdf_add_subscr').attr('data-href', location.href);
    mdf_current_values="";
    jQuery('#mdf_add_subscr').on('click', function () {
        //console.log(jQuery(".hidden_page_mdf_for_ajax").val());
	var data = {
	    action: "mdf_posts_messenger_add_subscr",
	    user_id: jQuery(this).attr('data-user'),
            attr: jQuery(".hidden_page_mdf_for_ajax").val(),
            curr_link: window.location.href
	};
	jQuery.post(ajaxurl, data, function (content) {
	    // alert(jQuery.parseJSON(content));
	    if (content) {
		var req = content;
                //console.log(req);
		mdf_redraw_subscr(req);
	    }
	});

	return false;
    });

    function mdf_redraw_subscr(data) {
	jQuery('.mdf_subscr_list ul').append(data);
	mdf_check_count_subscr();
        mdf_init_remove_btn();
    }
    mdf_init_remove_btn();
    mdf_check_request_attr();

   
}
mdf_init_posts_messenger();

    function mdf_init_remove_btn(){
               jQuery('.mdf_remove_subscr').on('click', function () {
	if (!confirm(mdf_posts_messenger_data.mdf_confirm_lang)) {
	    return false;
	}
	var data = {
	    action: "mdf_posts_messenger_remove_subscr",
	    user_id: jQuery(this).attr('data-user'),
	    key: jQuery(this).attr('data-key')
	};
	// console.log(data);
	jQuery.post(ajaxurl, data, function (content) {

	    var req = jQuery.parseJSON(content);
	    //console.log(req); 
	    jQuery('.mdf_subscr_item_' + req.key).remove();
	    mdf_check_count_subscr();

	});

	return false;
    });
           
       }

        function mdf_check_request_attr(){
            if(jQuery(".hidden_page_mdf_for_ajax").val()== undefined || jQuery(".hidden_page_mdf_for_ajax").val().length<1){
                jQuery('.mdf_add_subscr_cont').hide();
            }else{
                //jQuery('.mdf_add_subscr_cont').show();
                mdf_check_count_subscr();
            }
   
        }
    
        function mdf_check_count_subscr() {
            var count_li = jQuery('.mdf_subscr_list ul:first').find('li').size();
            var max_count = jQuery('.mdf_add_subscr_cont input').attr('data-count');

            if (count_li >= max_count) {
                jQuery('.mdf_add_subscr_cont').hide();
                // check_request_attr();
            } else {
                jQuery('.mdf_add_subscr_cont').show();
                if(jQuery(".hidden_page_mdf_for_ajax").val().length<1 || jQuery(".hidden_page_mdf_for_ajax").val()== undefined){
                   jQuery('.mdf_add_subscr_cont').hide();
                }
            }
       };
