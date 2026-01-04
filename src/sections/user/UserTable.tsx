import { useEffect, useState } from 'react';
import { getUsers } from '../../services/user.service';
import type { UserType } from '../../types/user.types';

const UsersTable = () => {
    const [users, setUsers] = useState<UserType[]>()

    useEffect(() => {
        const init = async () => {
            const users = await getUsers()
            setUsers(users)
        }
        init()
    }, [])

    return <h1>{JSON.stringify(users)}</h1>;
};

export default UsersTable;
