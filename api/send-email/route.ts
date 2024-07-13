import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  const { ...values } = data;

  const results = {
    success: false,
    errors: {
      name: '',
      email: '',
      message: '',
    },
  };

  if (values.name.length <= 4) {
    results.errors.name = 'Please include a name';
  }

  // Todo: Add email validation
  if (values.email.length <= 4) {
    results.errors.email = 'Email is required';
  }

  if (values.message.length <= 4) {
    results.errors.message = 'Message is required';
  }

  if (results.errors.name || results.errors.email || results.errors.message) {
    return NextResponse.json(results);
  }

  sgMail.setApiKey(process.env.SENDGRIDAPI as string);
  const msg = {
    to: 'kenny.krosky@gmail.com',
    from: 'kenny.krosky@gmail.com',
    subject: `You have a new message from your website from ${values.name}`,
    text: 'and easy to do anywhere, even with Node.js',
    html: `
      <h1>Message from : ${values.name}</h1>
      <h2>Email address: ${values.email}</h2>
      <p>${values.message}</p>
      `,
  };

  return sgMail.send(msg).then(
    () => {
      return NextResponse.json({ success: true, error: {} });
    },

    (error) => {
      if (error.response) {
        return NextResponse.json({
          success: false,
          error: error.response.body,
        });
      }
    },
  );
}
