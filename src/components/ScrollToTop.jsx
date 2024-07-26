import React, {useState} from 'react'; 
import { FaArrowCircleUp } from 'react-icons/fa';
  
const ScrollToTop = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <button onClick={scrollToTop} className='fixed bg-white p-0 bottom-12 right-[100px]' style={{display: visible ? 'inline' : 'none'}}> 
        <FaArrowCircleUp />
    </button> 
  ); 
} 
  
export default ScrollToTop; 