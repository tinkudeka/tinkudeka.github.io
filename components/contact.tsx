"use client";

import { useState } from "react";
import Link from "next/link";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 px-[6%] bg-background-alt" id="contact">
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-12 text-center">
        Get In <span className="text-accent">Touch</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="flex flex-col gap-5 justify-center">
          <p className="text-muted text-base flex items-center gap-2">
            📧 tinkuudeka@gmail.com
          </p>
          <p className="text-muted text-base flex items-center gap-2">
            📱 +91 84531 03320
          </p>
          <p className="text-muted text-base flex items-center gap-2">
            📍 Guwahati, Assam
          </p>
          <Link
            href="https://linkedin.com/in/tinkudeka"
            target="_blank"
            className="text-accent text-base flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <i className="fab fa-linkedin"></i> linkedin.com/in/tinkudeka
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-card border border-border text-foreground px-5 py-4 rounded-xl focus:border-accent outline-none transition-colors placeholder:text-muted"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-card border border-border text-foreground px-5 py-4 rounded-xl focus:border-accent outline-none transition-colors placeholder:text-muted"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-card border border-border text-foreground px-5 py-4 rounded-xl focus:border-accent outline-none transition-colors resize-y placeholder:text-muted"
          />
          <button
            type="submit"
            className="bg-accent text-background px-8 py-4 rounded-full font-bold text-sm hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(232,168,56,0.4)] transition-all cursor-pointer"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
