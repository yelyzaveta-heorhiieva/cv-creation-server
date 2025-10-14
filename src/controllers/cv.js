import { Document, Packer, Paragraph } from 'docx';
import OpenAI from 'openai';
import { generateFallback } from '../utils/generateFallback.js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateCv = async (req, res) => {
  const {
    personal: { name, city, position, email, tel },
    education,
    experience,
    skills,
    goals,
  } = req.body;
  const draft = `
  Name: ${name}.
  City: ${city}.
  Position: ${position}.
  Email: ${email}.
  Phone number: ${tel}.
  Education: ${education}.
  Experience: ${experience}.
  Skills: ${skills}.
  Goals: ${goals}.
 Based on this information, write a short CV consisting of 3–4 paragraphs.
  `;

   let polishedText;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are a professional HR copywriter. Write a short, cohesive CV based on the provided data.',
        },
        { role: 'user', content: draft },
      ],
      timeout: 10000,
    });

    polishedText = completion?.choices?.[0]?.message?.content;
  } catch (error) {
    console.error('OpenAI request failed:', error.message);
  }

  if (!polishedText) {
    polishedText = generateFallback({
      name,
      city,
      position,
      email,
      tel,
      education,
      experience,
      skills,
      goals,
    });
  }

  try {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph('CV'),
            ...polishedText
              .split('\n')
              .map((p) => p.trim())
              .filter(Boolean)
              .map(
                (p) =>
                  new Paragraph({
                    text: p,
                    spacing: { after: 200 },
                  }),
              ),
          ],
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);

    res.setHeader('Content-Disposition', 'attachment; filename=cv.docx');
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    );

    res.send(buffer);
  } catch (err) {
    next(err);
  }
};
