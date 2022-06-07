exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email;

  console.log(`Received a submission: ${email}`);
};
