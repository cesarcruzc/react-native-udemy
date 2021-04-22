import React, { useEffect } from 'react'
import { reqResApi } from '../api/reqRes';

export const Users = () => {

    useEffect(() => {
        // API call
        reqResApi.get('/users')
            .then(resp => {
                console.log(resp.data.data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <h1>Users: </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
