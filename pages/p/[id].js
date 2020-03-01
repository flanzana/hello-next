import { useRouter } from 'next/router';

import Layout from '../../components/MyLayout';

// Having brackets [] in the page name makes it a dynamic route.
const Page = () => {
  const router = useRouter();
  console.log(router);

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default Page;