import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/MyLayout';

// Having brackets [] in the page name makes it a dynamic route.

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  // printed only in browser console (because of routing through Link)
  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;