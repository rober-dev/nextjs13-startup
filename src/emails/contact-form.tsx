require('dotenv').config();

import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from '@react-email/components';

export interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string | undefined;
  subject: string | undefined;
  message: string;
}

const BASE_URL = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : '';
const APP_NAME = process.env.APP_NAME ? `https://${process.env.APP_NAME}` : '';

export function ContactFormEmail({
  name,
  email,
  phone,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Email sent from Contact Form</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Email sent from Contact Form</Heading>

          {/* Name */}
          <Text style={text}>
            <strong>Name:</strong> {name}
          </Text>

          {/* Email */}
          <Text style={text}>
            <strong>Email:</strong> {email}
          </Text>

          {/* Phone */}
          {phone && (
            <Text style={text}>
              <strong>Phone:</strong> {phone}
            </Text>
          )}

          {/* Subject */}
          {subject && (
            <Text style={text}>
              <strong>{subject}</strong>
            </Text>
          )}

          {/* Message */}
          <Text style={{ ...text, marginTop: '15px', color: '#333' }}>
            {message}
          </Text>

          <Text style={footer}>
            <Link
              href={BASE_URL}
              target='_blank'
              style={{ ...link, color: '#898989' }}
            >
              {BASE_URL}
            </Link>
            , the all-in-one-workspace
            <br />
            for your notes, tasks, wikis, and databases.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactFormEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '18px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};
