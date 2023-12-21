import { GithubIcon, Instagram, Linkedin, Mail } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Conctact',
  description: 'Send me a message!',
};

const ContactPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0c0c] text-white">
      <Navbar />
      <div className="mt-52 mb-24 justify-center content-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center">Hire Me!</h1>
      </div>
      <div className="flex flex-col md:flex-row container gap-8 pb-24">
        <div className="flex-1 p-0 md:p-8 ">
          <h2 className="font-bold uppercase tracking-widest text-2xl md:text-xl mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-300 mb-4">
            I&apos;m currently looking for new opportunities. Feel free to reach
            out by email or by using the contact form.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/allenlarson/"
              target="_blank"
            >
              <Linkedin className="w-8 h-8 hover:text-violet-900" />
            </Link>
            <Link href="https://github.com/allenlarson" target="_blank">
              <GithubIcon className="w-8 h-8 hover:text-violet-900" />
            </Link>
            <Link href="https://instagram.com/allenlarson" target="_blank">
              <Instagram className="w-8 h-8 hover:text-violet-900" />
            </Link>
            <Link href="mailto:allenlarson1@gmail.com" target="_blank">
              <Mail className="w-8 h-8 hover:text-violet-900" />
            </Link>
          </div>
        </div>
        <div className="flex-1 p-8 bg-slate-500/10 rounded-2xl">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
