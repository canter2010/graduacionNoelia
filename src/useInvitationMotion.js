import {useEffect} from 'react';
export default function useInvitationMotion(entered){
 useEffect(()=>{
  if(!entered)return;
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  const elements=[...document.querySelectorAll('.hero-copy > *, .story > *, .countdown-heading, .parents-intro > *, .parent-names, .family-heading > *, .family-letter > *, .event-heading > *, .date-card, .venue-card, .rsvp-copy > *, .rsvp-form, .closing > *')];
  let observer;
  const clear=()=>{observer?.disconnect();elements.forEach(el=>{el.classList.remove('reveal-ready','revealed');el.style.removeProperty('--reveal-delay');});};
  const setup=()=>{clear();if(media.matches)return;observer=new IntersectionObserver(entries=>entries.forEach(entry=>{entry.target.classList.toggle('revealed',entry.isIntersecting);}),{threshold:0.08,rootMargin:'0px 0px -35px 0px'});elements.forEach((el,i)=>{el.style.setProperty('--reveal-delay',`${(i%3)*90}ms`);el.classList.add('reveal-ready');observer.observe(el);});};
  setup();media.addEventListener('change',setup);return()=>{clear();media.removeEventListener('change',setup);};
 },[entered]);
}

