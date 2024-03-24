import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail, //mail of resend
      to: ["nivnomdar1@gmail.com", fromEmail],
      subject: "hello",
      react: (
        <>
          <h1>Niv Nomdar Portfolio</h1>
          <p>Dear {email},</p>
          <p>Thank you for reaching out to me via my portfolio.</p>
          <p>
            I would like to express my sincere gratitude for your interest and
            message.
          </p>
          <p>Below you can find a summary of your message:</p>
          <hr />
          <p>
            <strong>Subject:</strong> {subject}
          </p>
          <br />
          <p>
            <strong>Message:</strong>
            <br /> {message}
          </p>
          <hr />
          <p>
            I assure you that I will respond to your inquiry as promptly as
            possible.
          </p>
          <p>Thank you once again for your contact.</p>
          <p>Warm regards,</p>
          <p>Niv Nomdar</p>
          <p>Email: nivnomdar1@gmail.com</p>
          {/* <p>Portfolio: </p> */}
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
