import Link from 'next/link';

import Layout from '../components/MyLayout';

// we are passing data via a query string parameter (a query param) in Link (example for post: /post?title=${props.title})

// clean URL: change from http://localhost:3000/post?title=Hello%20Next.js to http://localhost:3000/p/hello-nextjs (add "as" prop in Link)

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" id="hello-nextjs" />
        <PostLink title="Learn Next.js is awesome" id="learn-nextjs" />
        <PostLink title="Deploy apps with Zeit" id="deploy-nextjs" />
      </ul>
    </Layout>
  );
}