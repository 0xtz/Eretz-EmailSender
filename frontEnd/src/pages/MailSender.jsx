import { useRef } from "react";
import man from "../assets/man.svg";
// import { checkInputs } from "../utils/inputfilters";
import { sendMail } from "../utils/sendMail";

export const MailSender = () => {
  const destination = useRef();
  const subject = useRef();
  const mailBody = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(destination.current.value)) {
      alert("Please enter a valid email");
      return;
    }
    // check if the subject is set
    if (subject.current.value === "") {
      alert("Please enter a subject");
      return;
    }
    // check if the message is set
    if (mailBody.current.value === "") {
      alert("Please enter a message");
      return;
    }

    sendMail(
      destination.current.value,
      subject.current.value,
      mailBody.current.value
    );
  };
  return (
    <section className="FormSection">
      <div className="img_container">
        <img src={man} alt="" />
      </div>
      <form onSubmit={submitHandler}>
        <input
          ref={destination}
          type="text"
          placeholder="Enter the Destination email"
        />
        <input ref={subject} type="text" placeholder="Enter the Subject" />
        <textarea
          ref={mailBody}
          name="message"
          id="message"
          placeholder="Enter the Message"
        ></textarea>
        <input className="button__primary" type="submit" value="Send !" />
      </form>
    </section>
  );
};
