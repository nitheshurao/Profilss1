import React, { useState } from 'react';
import emailjs from 'emailjs-com';
const Contact = ({ data }) => {

   function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_konha2a', 'template_xiri84i', e.target, 'user_GCxG7hjcVBYkl1eYmTatj'

      )
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
      e.target.reset()
   }


   // const [url, setUrl] = useState('mailto:nitheshurao@gmail.com?subject=subject&body=body');
   // const [name, setName] = useState('');
   // const [subject, setSubject] = useState('');
   // const [email, setEmail] = useState('');
   // const [message, setMessage] = useState('');

   // console.log(data)

   //  const handleClick = (e) => {
   //    //  e.preventDefault();
   //    // window.open(`mailto:nitheshurao@gmail.com?subject=${subject}&body=${name}: ${message}`);

   //    emailjs.sendForm('gmail', 'template_xiri84i', e.target, 'user_GCxG7hjcVBYkl1eYmTatj')
   //      .then((result) => {
   //          console.log(result.text);
   //      }, (error) => {
   //          console.log(error.text);
   //      });
   //      e.target.reset()
   //  }


   return (
      //    <section id="contact">

      //       <div className="row section-head">

      //          <div className="two columns header-col">

      // <h1><span>Get In Touch.</span></h1>

      //          </div>

      //          <div className="ten columns">

      //                <p className="lead">{data?.message}</p>

      //          </div>

      //       </div>

      //       <div className="row">
      //          <div className="eight columns">

      //             <form id="contactForm" name="contactForm">
      // 				<fieldset>

      //                <div>
      // 					   <label htmlFor="contactName">Name <span className="required">*</span></label>
      // 					   <input value={name} type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
      //                </div>

      //                <div>
      // 					   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
      // 					   <input value={email} type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)}/>
      //                </div>

      //                <div>
      // 					   <label htmlFor="contactSubject">Subject</label>
      // 					   <input value={subject} type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}/>
      //                </div>

      //                <div>
      //                   <label htmlFor="contactMessage">Message <span className="required">*</span></label>
      //                   <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
      //                </div>

      //                <div>
      //                   <button type='submit' onClick={handleClick} className="submit">Submit</button>
      //                   <span id="image-loader">
      //                      <img alt="" src="images/loader.gif" />
      //                   </span>
      //                </div>
      // 				</fieldset>
      // 			   </form>

      //         <div id="message-warning"> Error boy</div>
      // 			   <div id="message-success">
      //                <i className="fa fa-check"></i>Your message was sent, thank you!<br />
      // 			   </div>
      //         </div>


      //          <aside className="four columns footer-widgets">
      //             <div className="widget widget_contact">

      // 				   <h4>Address and Phone</h4>
      // 				   <p className="address">
      // 					   {data?.name}<br />
      // 					   {data?.address.street} <br />
      // 					   {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
      // 					   <span>{data?.phone}</span>
      //                   <p></p>
      // 				   </p>
      // 			   </div>

      //             <div className="widget widget_tweets">

      // 	         </div>
      //          </aside>
      //    </div>
      // </section>
      <section id="contact">




         <div className="row section-head">


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>Address and Phone</h4>
                  <p className="address">
                     {data?.name}<br />
                     {data?.address.street} <br />
                     {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
                     <span>{data?.phone}</span>
                     <p></p>
                  </p>
               </div>

               <div className="widget widget_tweets">

               </div>
            </aside>
            <h1>get in tuch</h1>
            <div className="two columns header-col">
              


            </div>

            <div className="ten columns">

               <div>

                  <form id="contact-form" className="contact-form" onSubmit={sendEmail}>

                     {/* <input type="hidden" name="contact_number" /> */}


                     <label> Name</label>
                     <input type="text" name="name" />


                     <label>subject</label>
                     <input type="text" placeholder="subject" name="subject" />
                     <label>Email</label>
                     <input type="email" placeholder="gmail" name="email" />
                     <label>Message</label>

                     <textarea cols="30" rows="8" placeholder="messagee" name="message" />
                     <label></label>

                     <input type="submit" value="Send" />


                  </form>
               </div>
            </div>


         </div>

      </section>

   );
}

export default Contact;
