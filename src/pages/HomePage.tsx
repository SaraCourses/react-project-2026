import { useDocumentTitle } from '../hooks/useDocumentTitle';

const HomePage = () => {
  useDocumentTitle('Home');

  return <h1>Home page</h1>;
};

export default HomePage;
