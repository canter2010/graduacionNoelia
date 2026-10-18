import {Heart} from 'lucide-react';
import PhotoCarousel from './PhotoCarousel.jsx';
export default function FamilySection({event}){
 const hasPhotos=Boolean(event.memories?.length);
 return <section className={`family-section section ${hasPhotos?'with-photos':'without-photos'}`} id="familia"><div className="family-heading"><p className="eyebrow">MI CONEXIÓN MÁS IMPORTANTE</p><h2>Mi familia.<br/><em>La red que me sostiene.</em></h2></div><div className="family-layout"><div className="family-content"><div className="family-letter"><Heart size={22} strokeWidth={1}/><p>{event.familyThanks}</p><p>{event.familyDedication}</p><span className="letter-signature">Gracias por ser mi familia.</span></div>{hasPhotos&&<PhotoCarousel photos={event.memories}/>}</div></div></section>;
}




