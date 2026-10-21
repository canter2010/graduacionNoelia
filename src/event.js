export function remaining(date,now=Date.now()){
 const diff=Math.max(0,Math.floor((Date.parse(date)-now)/1000));
 return {days:Math.floor(diff/86400),hours:Math.floor(diff/3600)%24,minutes:Math.floor(diff/60)%60,seconds:diff%60,finished:diff===0};
}
const escape=value=>String(value).replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
export function calendarText(event){
 const stamp=date=>new Date(date).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z/,'Z');
 return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Noelia//Graduacion//ES','CALSCALE:GREGORIAN','BEGIN:VEVENT','UID:graduacion-noelia-20261024@invitation.local',`DTSTAMP:${stamp(Date.now())}`,`DTSTART:${stamp(event.date)}`,`SUMMARY:${escape('Graduación de '+event.name)}`,`LOCATION:${escape(event.address)}`,`DESCRIPTION:${escape('Celebración de graduación en Ingeniería en Sistemas. '+(event.mapUrl||''))}`,'END:VEVENT','END:VCALENDAR',''].join('\r\n');
}
export function confirmationUrl(phone,name,guests,date){
 const eventDate=new Date(date);
 const dateLabel=new Intl.DateTimeFormat('es-BO',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'America/La_Paz'}).format(eventDate).replace(',', '');
 const timeLabel=new Intl.DateTimeFormat('es-BO',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'America/La_Paz'}).format(eventDate);
 const message=`¡Hola, Noelia! Soy ${name.trim()}. Confirmo mi asistencia a tu graduación el ${dateLabel} a las ${timeLabel} hrs. Asistiremos ${guests} ${Number(guests)===1?'persona':'personas'}. ¡Nos vemos para celebrar!`;
 return `https://wa.me/${phone.replace(/\D/g,'')}?text=${encodeURIComponent(message)}`;
}
