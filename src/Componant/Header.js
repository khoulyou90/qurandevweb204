import './Header.css'
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import Ahadith from './Ahadith'
import Quran from './Quran';
import Salat from './Salat';
import Footer from './Footer';
export default function Header() {
  const [icon,seticon]=useState(false);
const  handleclick=()=>seticon(!icon);
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <>
    
  <header className="header">
   <div className={scrolling ? 'black-navbar' : 'default-navbar'}>
   <div className='container ' >
<div className='logo'><Link  activeClass="active" 
      to="main" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} >علية</Link></div>
<ul>
  <li ><Link to='azkar'  activeClass="active" 
      spy={true} 
      smooth={true} 
      offset={-95} 
      duration={500} >اذكار</Link> </li>
  <li  ><Link   activeClass="active" 
      to="quran" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}>القران الكريم</Link> </li>
  <li > <Link activeClass="active" 
      to="pray" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}>أوقات صلاة</Link> </li>
  <li  > <Link activeClass="active" 
      to="footer" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}>تواصل معنا</Link> </li>
</ul>
<div className="bars" onClick={handleclick}>
<i class={icon ? "fas fa-bars" : "fas fa-times"}></i>
</div>
</div>
   </div>
   <style>
        {
        
        
        `
        @media (max-width: 768px) {
          .header ul {
            display: ${icon ? 'none' : 'flex'};
           
          }
          }
         

          
        `}
      </style>

</header>
<section className='main'>
  <div  className='container'>
    <div className="title">
    <h2 >
   مرحبا بك في
   <br/>
   افضل موقع ديني
   </h2>
   <button  id="btun" className='btun'>
   <Link to='azkar'  activeClass="active" 
      spy={true} 
      smooth={true} 
      offset={-95} 
      duration={500} > إبدا بالتصفح</Link> 
<i className='fas fa-caret-left'></i>
   </button>
    </div>
  
  </div>
  
</section>
<Ahadith/>
<Quran/>
<Salat/>
<Footer/>
</>
  )
}
