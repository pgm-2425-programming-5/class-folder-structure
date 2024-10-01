// components/containers/ContactFormContainer.tsx
'use client';

import React, { useState, FormEvent } from 'react';
import ContactForm from '../forms/ContactForm';

const ContactFormContainer: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<boolean>(false);

  const handleContact = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(undefined);
    setSuccess(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        // Handle successful contact form submission
        console.log('Contact form submitted:', data);
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Handle errors returned from the server
        setError(data.message || 'Submission failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactForm
      name={name}
      email={email}
      message={message}
      onNameChange={setName}
      onEmailChange={setEmail}
      onMessageChange={setMessage}
      onSubmit={handleContact}
      loading={loading}
      error={error}
      success={success}
    />
  );
};

export default ContactFormContainer;
