import test from 'node:test';
import assert from 'node:assert/strict';
import {remaining,calendarText,confirmationUrl} from '../src/event.js';
test('cuenta regresiva mantiene días, horas y minutos y se detiene en cero',()=>{
 const event='2026-10-24T17:00:00-04:00';
 assert.deepEqual(remaining(event,Date.parse('2026-10-23T16:29:45-04:00')),{days:1,hours:0,minutes:30,seconds:15,finished:false});
 assert.equal(remaining(event,Date.parse(event)+1000).finished,true);
 assert.equal(remaining(event,Date.parse(event)+1000).days,0);
});
test('el calendario exporta las 17 horas de Bolivia como 21 UTC',()=>{
 const text=calendarText({date:'2026-10-24T17:00:00-04:00',name:'Noelia Cantarran Villarroel',address:'Colombia, Sacaba'});
 assert.match(text,/DTSTART:20261024T210000Z/);
 assert.match(text,/LOCATION:Colombia\\, Sacaba/);
});
test('confirmación prepara mensaje y no envía datos por sí sola',()=>{
 const url=new URL(confirmationUrl('+591 73769491','Ana María',2));
 assert.equal(url.pathname,'/59173769491');assert.match(url.searchParams.get('text'),/Ana María/);assert.match(url.searchParams.get('text'),/2 personas/);
});
