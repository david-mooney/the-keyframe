import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { name = '', email } = request.body;
  // TODO uncomment when testing done
  // const apiKey = process.env.CONVERTKIT_API_KEY;
  // const formId = process.env.CONVERTKIT_FORM_ID;

  try {
    if (!email) throw new Error('Email is required');

    await new Promise((resolve) => setTimeout(resolve, 5000));

    // const result = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     api_key: apiKey,
    //     first_name: name,
    //     email: email,
    //   }),
    // });

    // if (!result.ok) {
    //   throw new Error((await result.json()).error);
    // }

    return response.status(201).json({ error: '', name });
  } catch (error) {
    return response.status(500).json({ error: error.message || error });
  }
}
