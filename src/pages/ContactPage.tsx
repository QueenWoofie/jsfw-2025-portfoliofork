import { useState } from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { Toast } from '../components/ui/Toast';
import type { ContactFormData } from '../types/contact';

export function ContactPage() {
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const handleSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setToast({
      message: 'Message sent successfully!',
      type: 'success',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Contact Us
        </h1>

        <ContactForm onSubmit={handleSubmit} />
      </main>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
