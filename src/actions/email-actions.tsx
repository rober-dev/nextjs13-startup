'use server';

import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { getI18n } from '@/locales/server';
import { ActionResponse } from '@/types/form-types';

// Get main env variables
const SMTP_HOST = process.env.SMTP_HOST;
if (!SMTP_HOST)
  throw new Error('SMTP_HOST environment variable is not defined');

const SMTP_PORT = process.env.SMTP_PORT;
if (!SMTP_PORT)
  throw new Error('SMTP_PORT environment variable is not defined');

const SMTP_USER = process.env.SMTP_USER;
if (!SMTP_USER)
  throw new Error('SMTP_USER environment variable is not defined');

const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
if (!SMTP_PASSWORD)
  throw new Error('SMTP_PASSWORD environment variable is not defined');

// Email templates
import { ContactFormEmailProps, ContactFormEmail } from '@/emails/contact-form';

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: +SMTP_PORT,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

export async function sendContactFormEmail(
  args: ContactFormEmailProps
): Promise<ActionResponse> {
  // Ge env variables
  const CONTACT_FORM_FROM_EMAIL = process.env.CONTACT_FORM_FROM_EMAIL;
  if (!CONTACT_FORM_FROM_EMAIL)
    throw new Error(
      'CONTACT_FORM_FROM_EMAIL environment variable is not defined'
    );

  const CONTACT_FORM_TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL;
  if (!CONTACT_FORM_TO_EMAIL)
    throw new Error(
      'CONTACT_FORM_TO_EMAIL environment variable is not defined'
    );

  const t = await getI18n();

  try {
    const emailHtml = render(<ContactFormEmail {...args} />);
    const options = {
      fromName: args.name,
      from: CONTACT_FORM_FROM_EMAIL,
      to: CONTACT_FORM_TO_EMAIL,
      replyTo: args.email,
      subject: args.subject || t('contact_form').toUpperCase(),
      html: emailHtml,
    };

    console.info('Try send ContactForm email:', {
      ...options,
      html: '...',
    });
    const result = await transporter.sendMail(options);
    console.info('Email sending result:', result.response || 'No result');

    return {
      success: true,
      message: t('email_sent_success'),
    };
  } catch (err: Error | any) {
    const message = err.message || JSON.stringify(err) || t('email_sent_error');
    console.error('Error sending email:', err);
    return {
      success: false,
      message,
    };
  }
}
