import './style.css';
import { useState, useRef, useEffect } from "react";

export const faq = {
    title: "Frequently ask questions.",
    list: [
        {
            question: "Tempor metus est quam volutpat himenaeos bibendum?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
        {
            question: "Sagittis mollis est semper etiam letius felis?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
        {
            question: "Est luctus sodales curabitur eget?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
        {
            question: "Congue fames sapien eleifend augue?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
        {
            question: "Interdum potenti per nec ligula habitant sem dui?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
        {
            question: "Ipsum lacinia mollis sagittis quisque hac class litora?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
    ]
}
export default function FrequentlyAskQuestions(props) {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    function renderFarm() {
        return props.data.list.map(function(faq, i) {
            return(
                <li key={i}>
                    <div className='faq-holder'>
                        <div className= {selected === i ? 'question-holder show' : 'question-holder'} onClick={() => toggle(i)}>
                         <h3>{faq.question}</h3>
                         <span>{selected === i ? <ion-icon name="chevron-up-outline"></ion-icon> : <ion-icon name="chevron-down-outline"></ion-icon>}</span>
                        </div>
                        <div className= {selected === i ? 'content show' : 'content'}>
                         <p>{faq.answer}</p>
                        </div>
                    </div>
               </li>
            )
        });
    }
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-300px" }
      );
      console.log(isIntersecting);
      observer.observe(ref.current);
  
      return () => observer.disconnect();
    }, [isIntersecting]);
  
    useEffect(() => {
      if (isIntersecting) {
        ref.current.querySelectorAll('.faq-style').forEach((el) => {
          el.classList.add("animation-on-both");
        });
      } 
    }, [isIntersecting]);

    return (
        <div className="faq-box" ref={ref}>
            <div className="container-full">
                <h4 className='section-title'>
                       faq 
                </h4>
                <div className='faq-style  row vertical-padding '>
                    <div className='faq-description'>
                        <h1 className="title">{props.data.title}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <ul className="faq">
                        {renderFarm()}
                    </ul>
                </div>
            </div>
        </div>
    )
}