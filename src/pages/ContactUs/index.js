// import React from 'react';
// import './style.css';
// import PrimaryLayout from '../../components/Layouts/PrimaryLayout';

// export default function ContactUs() {
//   return (
//     <PrimaryLayout>
    
//     <div className="container vertical-padding">
//     <div className='banner-contactus'></div> 
//         <div className='form-wrapper d-flex '>
//           <div className="contact-form">
//             <h2>Contact Us</h2>
//             <div className="divider"></div>
//             <form>
//           <div className="form-group">
//             <input type="text" name="name" placeholder="Name" required />
//             <input type="email" name="email" placeholder="Email" required />
//           </div>
//           <div className="form-group">
//             <textarea name="comment" placeholder="Comment" required></textarea>
//           </div>
//           <button type="submit" className="submit-btn">Submit</button>
//             </form>
//           </div>
//         <div className="social-links d-flex flex-column">
//            <ul>
//              <li><a href="https://facebook.com/presenter">facebook.com/presenter</a></li>
//              <li><a href="https://twitter.com/presenter">twitter.com/presenter</a></li>
//              <li><a href="https://vimeo.com/presenter">vimeo.com/presenter</a></li>
//              <li><a href="https://instagram.com/presenter">instagram.com/presenter</a></li>
//              <li><a href="https://youtube.com/presenter">youtube.com/presenter</a></li>
//            </ul>
//         </div>
//     </div>
           
//       </div>
//     </PrimaryLayout>
//       );
// };

import React from 'react';
import './style.css';
import PrimaryLayout from '../../components/Layouts/PrimaryLayout';

export default function ContactUs() {
  return (
    <PrimaryLayout>
      <div className="containe-full vertical-padding">
        <div className='banner-contactus'>
        <h2>Contact Us</h2>
        </div> 
        <div className='form-wrapper d-flex '>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <div className="divider"></div>
            <form>
              <div className="form-group">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea name="comment" placeholder="Comment" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
          <div className="social-links">
            <ul>
              <li><a href="https://facebook.com">facebook.com</a></li>
              <li><a href="https://twitter.com">twitter.com</a></li>
              <li><a href="https://vimeo.com">vimeo.com</a></li>
              <li><a href="https://instagram.com">instagram.com</a></li>
              <li><a href="https://youtube.com">youtube.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
}
