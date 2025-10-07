import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h1>You all are user</h1>
        </div>
    );
};

export default Users;