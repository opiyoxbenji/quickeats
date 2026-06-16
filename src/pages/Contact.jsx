// import React from 'react';

// const Contact = () => {
// 	return (
// 		<div className='' id='contact'>
// 			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center'>
// 				<h2 className='text-4xl font-bold dark:text-dark-100'>
// 					Contact Us
// 				</h2>
// 				<p className='pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-dark-100'>
// 					Want to contact us? Choose an option below and we'll be
// 					happy to show you how we can transform your company's web
// 					experience.
// 				</p>
// 			</div>
// 			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16'>
// 				<div>
// 					<h2 className='text-lg font-bold dark:text-dark-100'>
// 						Contact Us
// 					</h2>
// 					<p className='max-w-sm mt-4 mb-4 dark:text-dark-100'>
// 						Have something to say? We are here to help. Fill up the
// 						form or send an email or call.
// 					</p>
// 					<div className='flex items-center mt-8 space-x-2 text-dark-600 dark:text-dark-100'>
// 						<svg
// 							xmlns='http://www.w3.org/2000/svg'
// 							fill='none'
// 							viewBox='0 0 24 24'
// 							strokeWidth='1.5'
// 							stroke='currentColor'
// 							aria-hidden='true'
// 							className='w-4 h-4'>
// 							<path
// 								strokeLinecap='round'
// 								strokeLinejoin='round'
// 								d='M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z'
// 							/>
// 						</svg>
// 						<span>14th avenue glory road</span>
// 					</div>
// 					<div className='flex items-center mt-2 space-x-2 text-dark-600 dark:text-dark-100'>
// 						<svg
// 							xmlns='http://www.w3.org/2000/svg'
// 							fill='none'
// 							viewBox='0 0 24 24'
// 							strokeWidth='1.5'
// 							stroke='currentColor'
// 							aria-hidden='true'
// 							className='w-4 h-4'>
// 							<path
// 								strokeLinecap='round'
// 								strokeLinejoin='round'
// 								d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
// 							/>
// 						</svg>
// 						<a href='mailto:hello@company.com'>hello@company.com</a>
// 					</div>
// 					<div className='flex items-center mt-2 space-x-2 text-dark-600 dark:text-dark-100'>
// 						<svg
// 							xmlns='http://www.w3.org/2000/svg'
// 							fill='none'
// 							viewBox='0 0 24 24'
// 							strokeWidth='1.5'
// 							stroke='currentColor'
// 							aria-hidden='true'
// 							className='w-4 h-4'>
// 							<path
// 								strokeLinecap='round'
// 								strokeLinejoin='round'
// 								d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
// 							/>
// 						</svg>
// 						<a href='tel:11111111111'>+51 11111111111</a>
// 					</div>
// 				</div>
// 				<div>
// 					<form>
// 						<input
// 							type='checkbox'
// 							className='hidden'
// 							style={{ display: 'none' }}
// 							name='botcheck'
// 						/>
// 						<div className='mb-5'>
// 							<input
// 								type='text'
// 								placeholder='Full Name'
// 								autoComplete='off'
// 								className='w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0'
// 								name='name'
// 							/>
// 						</div>
// 						<div className='mb-5'>
// 							<label htmlFor='email_address' className='sr-only'>
// 								Email Address
// 							</label>
// 							<input
// 								id='email_address'
// 								type='email'
// 								placeholder='Email Address'
// 								autoComplete='off'
// 								className='w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0'
// 								name='email'
// 							/>
// 						</div>
// 						<div className='mb-3'>
// 							<textarea
// 								placeholder='Your Message'
// 								className='w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0'
// 								name='message'></textarea>
// 						</div>
// 						<button
// 							type='submit'
// 							className='w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-purple-600 dark:text-black'>
// 							Send Message
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Contact;

import React, { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const contactItems = [
    {
      Icon: MapPin,
      label: "Address",
      value: "3 Princess Road, Gulu",
    },
    {
      Icon: Mail,
      label: "Email",
      value: "opiyosbenji@gmail.com",
      href: "mailto:hello@quickeats.co.za",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+256 742892728",
      href: "tel:+256763861777",
    },
  ];

  const socials = [
    { Icon: FaXTwitter, label: "Twitter", href: "https://x.com/Opiyos_Benji" },
    { Icon: FaGithub, label: "GitHub", href: "https://github.com/opiyoxbenji" },
    {
      Icon: FaDiscord,
      label: "Discord",
      href: "https://discord.gg/1068927035994554419",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="bg-gray-900 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_#ef4444,_transparent_55%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Get in Touch
          </span>
          <h1 className="text-5xl font-black mb-4">
            We'd love to hear
            <br />
            <span className="text-red-400">from you.</span>
          </h1>
          <p className="text-white/60 text-lg">
            Questions, feedback, catering enquiries — we're here for all of it.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-5 gap-12">
        {/* Left info panel */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Contact Info
            </h2>
            <div className="space-y-5">
              {contactItems.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-800 hover:text-red-500 transition-colors font-medium"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="bg-gray-900 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              {[
                ["Mon – Fri", "09:00 – 22:00"],
                ["Saturday", "10:00 – 23:00"],
                ["Sunday", "11:00 – 21:00"],
              ].map(([day, hours]) => (
                <div key={day} className="flex justify-between text-white/70">
                  <span>{day}</span>
                  <span className="text-white font-medium">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Follow Us
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 rounded-xl bg-gray-100 hover:bg-red-500 hover:text-white text-gray-500 flex items-center justify-center transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-5" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500 max-w-sm">
                  Thanks for reaching out. We'll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-8 text-red-500 hover:text-red-600 font-medium text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-200"
                  >
                    {loading ? (
                      <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
