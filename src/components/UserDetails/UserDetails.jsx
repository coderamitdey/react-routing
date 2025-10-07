import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);

    const {website, name} = user;
    return (
        <div>
            <h1>User Details</h1>
            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;