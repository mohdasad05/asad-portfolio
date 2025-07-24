import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getISTDateTime = () => {
      const date = new Date();
      return date.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    };

    const payload = {
      subject: form.subject,
      message: `Name: ${form.name}
    Email: ${form.email}

    ${form.message}`
    };

    const res = await fetch("https://formspree.io/f/mnnzjeny", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } else {
      alert("Something went wrong! Please try again later.");
    }
  };

  return (
    <section className="scroll-mt-20 py-12 bg-gray-100 dark:bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">
          Contact Me
        </h2>

        {success && (
          <p className="text-green-600 dark:text-green-400 text-center mb-4 animate-fade-up">
            ✅ Your message has been sent successfully. Thanks for reaching out!
          </p>
        )}

        <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transform hover:scale-101 hover:bg-teal-100 dark:hover:bg-gray-700 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="4"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Location */}
          <div className="mt-4 text-base text-gray-700 dark:text-gray-300 flex items-center justify-center">
            <i className="fas fa-map-marker-alt mr-2 text-teal-500 text-xl"></i>
            Lucknow, Uttar Pradesh, India
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mt-2">
            <a
              href="https://github.com/mohdasad05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-transform transform hover:scale-125 duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/mohammad-asad-631647277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-transform transform hover:scale-125 duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:mohdasad.9506@gmail.com"
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-transform transform hover:scale-125 duration-300"
            >
              <i className="far fa-envelope"></i>
            </a>
            <a
              href="https://youtube.com/@mohdasad_05"
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-transform transform hover:scale-125 duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;