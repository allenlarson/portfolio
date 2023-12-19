import { ContactForm } from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
          <p className="text-slate-300">
            I&apos;m currently looking for new opportunities. Feel free to reach
            out by email or by using the contact form.
          </p>
        </div>
        <div className="flex-1 p-8 bg-slate-500/10 rounded-x">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
