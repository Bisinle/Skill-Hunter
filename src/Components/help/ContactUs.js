import React from "react";

function ContactUs() {
  return (
    <div className="flex justify-center">
      <form className="contacts py-10 px-32 rounded-xl">
        <label>
          <span>Your email</span>
          <input type="email" />
        </label>
        <label>
          <span className="mt-4">Your message</span>
          <textarea name="message" required id=""></textarea>
        </label>
        <div className="btn-submit mt-4">
          <button className="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
