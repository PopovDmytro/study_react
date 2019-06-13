import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Clients extends Component {
    render() {
        const clients = [
            {
                id: '123132123',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'com@com.com',
                phone: '123123123-123123',
                balance: '30'
            },
            {
                id: '1231',
                firstName: 'Bob',
                lastName: 'Thorton',
                email: 'bob@com.com',
                phone: '1233-123123',
                balance: '300'
            }
        ];

        if (clients) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2><i className="fa fa-users"/> Clients</h2>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Balance</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {clients.map((client) => (
                            <tr key={client.id}>
                                <td>{client.firstName} {client.lastName}</td>
                                <td>{client.email}</td>
                                <td>$ {parseFloat(client.balance).toFixed(2)}</td>
                                <td>
                                    <Link to={`/clients/${client.id}`} className="btn btn-secondary"><i className="fa fa-arrow-circle-right" /> Details</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return <h1>Loading...</h1>;
        }
    }
}

export default Clients;