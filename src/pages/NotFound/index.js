import './style.css';
import {  useState, useRef, useEffect } from 'react';
import PrimaryLayout from '../../components/Layouts/PrimaryLayout';

export default function NotFound() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-100px" }
      );
      console.log(isIntersecting);
      observer.observe(ref.current);
  
      return () => observer.disconnect();
    }, [isIntersecting]);
  
    useEffect(() => {
      if (isIntersecting) {
        ref.current.querySelectorAll('.text').forEach((el) => {
          el.classList.add("animation-both");
        });
      } 
    }, [isIntersecting]);
    return(
        <PrimaryLayout>
            <div className="hero" ref={ref}>
                <div className="text">
                    <div className="container">
                        <h1>404</h1>
                        <h3>Page not found</h3>
                        <p>The page you are looking for does not exist; it may have been moved, or removed.</p>
                        <button className='main-button'>Back Home</button>
                    </div>
                </div>
            </div>
         
        </PrimaryLayout>
    )
}