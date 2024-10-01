// components/containers/SignUpFormContainer.tsx
'use client';

import React, { useState, FormEvent } from 'react';
import SignUpForm from '../forms/SignUpForm';

const SignUpFormContainer: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(undefined);
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Handle successful sign-up, e.g., redirect or store tokens
        console.log('Sign-Up successful:', data);
      } else {
        // Handle errors returned from the server
        setError(data.message || 'Sign-Up failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignUpForm
      name={name}
      email={email}
      password={password}
      onNameChange={setName}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleSignUp}
      loading={loading}
      error={error}
    />
  );
};

export default SignUpFormContainer;
