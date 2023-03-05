import Container from '@/components/container';
import Layout from '@/components/layout';

export default function FourOhFour() {
  return (
    <Layout>
      <Container>
        <h1 style={{ textAlign: 'center' }}>Page not found</h1>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Have a joke instead
        </p>
        <blockquote>
          <p>
            A telepathically controlled air freshener may seem strange, but it
            makes scents when you think about it.
          </p>
        </blockquote>
      </Container>
    </Layout>
  );
}
