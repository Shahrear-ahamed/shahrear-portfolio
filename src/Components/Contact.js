import emailjs from "@emailjs/browser";
import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_1aornf4",
        "template_ixjeioa",
        event.target,
        "bWyPMreeJIIGyws0Z"
      )
      .then((res) => {
        if (res.text === "OK") {
          toast.success("Received your mail, I'll reply you later");
        }
      })
      .catch((err) => {
        toast.error(err.text);
      });
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen h-full md:pt-[80px] bg-[#0a192f] flex flex-col
       justify-center items-center p-4"
    >
      <div className="pb-4">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
          Contact
        </p>
        <p className="text-gray-300 py-4">Submit the form below</p>
      </div>
      <form
        onSubmit={handleContact}
        className="flex flex-col max-w-[550px] w-full"
      >
        <input
          className="bg-[#ccd6f6] p-2 rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-md"
          name="message"
          rows="8"
          placeholder="Message"
        ></textarea>
        <input
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          type="submit"
          value="Let's Collaborate"
        />
      </form>
    </div>
  );
};

export default Contact;
