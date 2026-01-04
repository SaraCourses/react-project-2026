import { useDocumentTitle } from '../hooks/useDocumentTitle';
import UsersTable from '../sections/user/UserTable';

const UsersPage = () => {
    useDocumentTitle('Users');

    return <UsersTable />;
};

export default UsersPage;
