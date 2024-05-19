import styles from './Contact.module.css';
import Button from '../Button/Button';
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import { useState } from 'react';
const ContactForm = () => {
  const[name, setName]=useState("Hemant");
  const[email, setEmail]=useState("hemantissar2001@gmail.com");
  const[text, setText]=useState("Hy I am Hemant Issar");

  const onSubmit=(event)=>{
    event.preventDefault();
    
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
   
console.log({name,email,text})
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
      <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/></div>
      <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
      <form action="" onSubmit={onSubmit}>
        <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/>
        </div>
        <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email"/>
        </div>
        <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea name="text" rows="8"/>
        </div>
        <div
          style = {{
            display:"flex",
            justifyContent:"end",
          }}>
        <Button text="SUBMIT BUTTON"/>
        </div>
        <div>{name+" "+email+" "+text}</div>
      </form>
        </div>
        
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  )
}

export default ContactForm
