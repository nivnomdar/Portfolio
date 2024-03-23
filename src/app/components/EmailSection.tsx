"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { toast } from "react-hot-toast";
import { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: any) => {
    console.log("submitted");
    e.preventDefault();
    setSending(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log("Data: ", data);

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setSending(false);
      toast.success("Message sent!");
      console.log("Message sent!");
      setEmailSubmitted(true);
    } else {
      toast.error("Something went wrong! Please try again.");
      console.log("Something went wrong");
    }
  };

  return (
    <section
      id="emailSection"
      className="grid md:grid-cols-2 my-12 md:my-12 py-10 gap-4 relative mx-6">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s work together!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <LinkedInIcon
            id="linkedinLink"
            className="hover:cursor-pointer"
            onClick={() => {
              window.open("https://www.linkedin.com/in/niv-nomdar/", "_blank");
            }}
            color="warning"
            style={{ fontSize: 47 }}
          />
          <GitHubIcon
            id="githubLink"
            className="hover:cursor-pointer"
            onClick={() => {
              window.open(
                "https://github.com/nivnomdar?tab=repositories",
                "_blank"
              );
            }}
            color="warning"
            style={{ fontSize: 43 }}
          />
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="email123@gmail.com"
              className="bg-[#18191E] border border-orange-500 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium">
              Your Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-[#18191E] border border-orange-500 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-orange-500 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
