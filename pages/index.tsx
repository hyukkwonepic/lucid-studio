import Link from 'next/link';

const Home = () => (
  <div className="container">
    Home
    <Link href="/editor">
      <a>Go to editor</a>
    </Link>
  </div>
);

export default Home;
