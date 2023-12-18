// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, name, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['allenlarson1@gmail.com'],
      subject: 'Portfolio Inquiry',
      react: (
        <>
          <h1>New Inquiry</h1>
          <p>
            From: {name}
            <p>{email}</p>
          </p>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
