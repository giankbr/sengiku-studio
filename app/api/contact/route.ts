import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const subject = (body.subject || 'New Contact Message').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'sengikustudio@gmail.com';
    const fromCandidate = (process.env.CONTACT_FROM_EMAIL || '').trim();

    // Accept either `email@example.com` or `Name <email@example.com>`
    const simpleEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namedEmailRegex = /^.+\s<[^\s@]+@[^\s@]+\.[^\s@]+>$/;
    const fromEmail = fromCandidate && (simpleEmailRegex.test(fromCandidate) || namedEmailRegex.test(fromCandidate)) ? fromCandidate : 'onboarding@resend.dev';

    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const html = `
      <div>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap">${message}</p>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: subject || 'New Message',
        html,
        reply_to: email,
      }),
    });

    const rawText = await resendResponse.text();
    let result: any = undefined;
    try {
      result = rawText ? JSON.parse(rawText) : undefined;
    } catch {}

    if (!resendResponse.ok) {
      const errorMessage = result?.message || result?.error || rawText || 'Failed to send email';
      const statusCode = resendResponse.status || 502;
      return NextResponse.json({ error: errorMessage, providerStatus: statusCode, providerResponse: result || rawText }, { status: statusCode });
    }

    return NextResponse.json({ success: true, providerResponse: result || rawText });
  } catch (error) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
