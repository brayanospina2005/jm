import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_ucvu6ya',
        'template_k3w0ekr',
        {
          to_name: 'JM Reformas',
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'pvBQJpi0meARL1D48'
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Show success message
      alert(t('contact.form.success'));
      
      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error('Error sending email:', error);
      alert(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-primary text-center">{t('contact.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="font-bodoni text-2xl font-semibold mb-6">{t('contact.info.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <span>{t('contact.info.email')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <span>{t('contact.info.phone')}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                <span>{t('contact.info.address')}</span>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-custom mb-1">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-custom mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-custom mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;