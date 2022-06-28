exports.handler = async event => {
  const apiKey = process.env.GATSBY_CONVERTKIT_API_KEY;
  const formId = process.env.GATSBY_CONVERTKIT_FORM_ID;
  const { first_name = '', email } = JSON.parse(event.body)?.payload?.data;

  try {
    if (!email) throw new Error('No email address in request payload');

    const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ api_key: apiKey, first_name, email }),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};
