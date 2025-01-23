import React, { useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
  
    try {
      let res = await axios.post("https://ronjona-hostel-server.vercel.app/api/v1/send-contact", payload);
      if (res) {
        alert("Your message has been sent successfully!");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      e.target.reset();
    }
  };
  

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-6 mt-4 mb-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full">
          {/* Profile Section */}
          <div className="relative bg-gray-800 text-white text-center p-12 rounded-lg shadow-xl mx-auto my-32 max-w-xl" data-aos="fade-right">
            <h2 className="text-5xl font-extrabold mt-16">MD Fahim</h2>
            <p className="text-2xl text-gray-400 mb-8">Frontend Developer</p>
            <p className="mb-4 text-lg">
              <strong>Location:</strong> 123, Main Street, City, Country
            </p>
            <p className="mb-4 text-lg">
              <strong>Phone:</strong> +880 19330-62109
            </p>
            <p className="text-lg">
              <strong>Email:</strong> mdf17548@gmail.com
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-black p-8 rounded-lg shadow-xl" data-aos="fade-left">
            <h3 className="text-3xl font-semibold mb-6 text-white">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-600 p-2 bg-gray-900 text-white text-lg"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-600 p-2 bg-gray-900 text-white text-lg"
              />
              <input
                type="text"
                id="phone"
                name="phone_number"
                placeholder="Your phone number"
                required
                className="w-full border border-gray-600 p-2 bg-gray-900 text-white text-lg"
              />
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="w-full border border-gray-600 p-2 bg-gray-900 text-white text-lg"
              ></textarea>
              <button type="submit" className="bg-white text-black py-2 px-6 text-lg transition-all duration-300">
                Send Message
              </button>
            </form>

            {/* Social Media Links */}
            <h3 className="text-3xl font-semibold mt-12 mb-6 text-white">Follow Me</h3>
            <div className="grid grid-cols-3 gap-4">
              <FaFacebook className="text-white text-2xl" />
              <FaTwitter className="text-white text-2xl" />
              <FaInstagram className="text-white text-2xl" />
              <FaLinkedin className="text-white text-2xl" />
              <FaGithub className="text-white text-2xl" />
              <FaYoutube className="text-white text-2xl" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
