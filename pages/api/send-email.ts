// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File as FormidableFile, Fields, Files } from 'formidable';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const uploadDir = path.join(process.cwd(), '/tmp');
  fs.mkdirSync(uploadDir, { recursive: true });

  const form = formidable({
    multiples: false,
    uploadDir,
    keepExtensions: true,
    allowEmptyFiles: true, // ✅ Allow form without file
    minFileSize: 0,        // ✅ Prevent parse error when file is missing or 0 bytes
  });

  form.parse(req, async (err: any, fields: Fields, files: Files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ error: 'Form parsing error' });
    }

    const { name, email, phone, message, type, company } = fields;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'miniprojectpta94@gmail.com',
        pass: 'rykadtsfecvmwnkx',
      },
    });

    const mailOptions: any = {
      from: 'miniprojectpta94@gmail.com',
      to: 'mukeshkumarb107@gmail.com',
      subject: `New ${type} Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`,
    };

    const attachment = files.attachment as FormidableFile | FormidableFile[] | undefined;
    if (attachment) {
      const file = Array.isArray(attachment) ? attachment[0] : attachment;
      if (file && file.originalFilename && file.size > 0) {
        mailOptions.attachments = [
          {
            filename: file.originalFilename,
            path: file.filepath,
          },
        ];
      }
    }

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (e) {
      console.error('Mailer Error:', e);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });
}
