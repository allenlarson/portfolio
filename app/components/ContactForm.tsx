'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('./api/contact', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
          'content-type': 'application/json',
        },
      });
    } catch (error: any) {
      console.log('Err', error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="">
      <Label htmlFor="name">Name</Label>
      <Input
        onChange={e => setName(e.target.value)}
        id="name"
        placeholder="Your Name"
        value={name}
        className="text-slate-500"
      />
      <Label htmlFor="email">Email</Label>
      <Input
        onChange={e => setEmail(e.target.value)}
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        className="text-slate-500"
      />
      <Label htmlFor="message">Message</Label>
      <Textarea
        onChange={e => setMessage(e.target.value)}
        value={message}
        id="message"
        placeholder="Enter your message..."
        className="text-slate-500"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
