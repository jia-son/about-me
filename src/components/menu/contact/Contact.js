import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Contact = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();
    
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TAMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY).then(
          result => {
            alert("이메일이 성공적으로 전송되었습니다.");
            form.current.reset();
          },
          error => {
            console.log(error.text);
            alert("이메일 전송에 실패했습니다.");
          },
        );
      };

    return (
        <>
        <div className="contactBox">
            <h3>contact</h3>
            <div className="contentBox">
                <div className="email">
                    <FiMail id="icon" />wldk963@gmail.com
                </div>
                <div className="phonNumber">
                    <FiPhoneCall id="icon" />010-7570-4099
                </div>
            </div>

            <div className="emailFormBox">
                <form ref={form} onSubmit={sendEmail}>
                    <label>
                        회신받으실 이메일
                        <input type="email" name="userEmail" placeholder="ex)abcd@naver.com" required />
                    </label>
                    <label>
                        제목
                        <input type="text" name="emailTitle" placeholder="제목을 입력해주세요." required />
                    </label>
                    <label>
                        내용
                        <textarea name="emailContent" placeholder="내용을 입력해주세요." required />
                    </label>
                    <button type="submit" value="메일 발송">메일 발송</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Contact;