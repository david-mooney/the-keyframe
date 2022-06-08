exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email;
  console.log(`Received a submission: ${email}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ test: true }),
  };
};
