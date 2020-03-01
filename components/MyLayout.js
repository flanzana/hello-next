import Header from './Header';

// other ways of creating MyLayout: https://nextjs.org/learn/basics/using-shared-components/rendering-children-components

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;