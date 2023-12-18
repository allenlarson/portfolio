'use client';

import { useState, FormEvent } from 'react';

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

    const data = {
      email,
      name,
      message,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log('Message Sent.');
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
        className="text-slate-500 my-2"
      />
      <Label htmlFor="email">Email</Label>
      <Input
        onChange={e => setEmail(e.target.value)}
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        className="text-slate-500 my-2"
      />
      <Label htmlFor="message">Message</Label>
      <Textarea
        onChange={e => setMessage(e.target.value)}
        value={message}
        id="message"
        placeholder="Enter your message..."
        className="text-slate-500 my-2"
      />
      <Button type="submit" className="w-full my-2">
        Submit
      </Button>
    </form>
  );
};
