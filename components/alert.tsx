import Link from 'next/link';
import Container from '@components/layout/container';

// TODO: add preview api's

const Alert = () => (
  <div>
    <Container>
      <div className="py-2 text-center text-sm">
        This page is a preview.{' '}
        <Link href="/api/exit-preview">
          <a className="underline hover:text-teal-300">Click here</a>
        </Link>{' '}
        to exit preview mode.
      </div>
    </Container>
  </div>
);

export default Alert;
