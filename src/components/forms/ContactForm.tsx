// src/components/forms/ContactForm/ContactForm.tsx
'use client';

import React from 'react';
import Button from '../common/Button';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onMessageChange: (message: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
  error?: string;
  success?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  name,
  email,
  message,
  onNameChange,
  onEmailChange,
  onMessageChange,
  onSubmit,
  loading = false,
  error,
  success,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow rounded"
    >
      <h2 className="text-2xl mb-4">Contact Us</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="w-full border px-3 py-2 rounded"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="w-full border px-3 py-2 rounded"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">
          Message:
        </label>
        <textarea
          id="message"
          className="w-full border px-3 py-2 rounded"
          rows={5}
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          required
        ></textarea>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
