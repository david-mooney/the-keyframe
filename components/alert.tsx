import Container from './container';

// TODO: add preview api's

const Alert = () => (
  <div>
    <Container>
      <div className="py-2 text-center text-sm">
        This page is a preview.{' '}
        <a href="/api/exit-preview" className="underline hover:text-teal-300">
          Click here
        </a>{' '}
        to exit preview mode.
      </div>
    </Container>
  </div>
);

export default Alert;
