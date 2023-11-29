import React, {useEffect, useState} from 'react';
import {getMatchedUsers} from "../services/users";
import PageTitle from "../components/base/PageTitle";
import {Table, TableHead, TableBody, TableCell, TableRow} from '@mui/material';

const MatchedUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getMatchedUsers()
            .then(({data}) => {
                setUsers(data.data)
            })
    }, [])

    return (
        <div>
            <PageTitle>Matched uses</PageTitle>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First name</TableCell>
                        <TableCell className={"font-bold"}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users?.map((item) => {
                            return <TableRow>
                                <TableCell>{item?.firstName}</TableCell>
                                <TableCell>{item?.age}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>


        </div>
    );
};

export default MatchedUsers;