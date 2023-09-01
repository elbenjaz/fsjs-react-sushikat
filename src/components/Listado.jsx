import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons';

const Listado = ({ employeesFiltered, employeeDelete }) => {
    if (!employeesFiltered.length) {
        return (
            <div className="d-flex align-items-center justify-content-start">
                <img className="me-4" src="./dialog1.gif" />
                <div className="dialog dialog-right">No employees found!</div>
            </div>
        );
    }

    return (
        <div>
            <Table striped bordered responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Contact</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {employeesFiltered.map(employee => (
                        <tr key={employee.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img src={employee.avatar} />
                                    <div className="ms-2">
                                        <span className="handwritten">{employee.name}</span>
                                        <p><small>{employee.age} years old</small></p>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <span className="handwritten">{employee.job}</span>
                            </td>

                            <td>
                                <small>
                                    <p><FontAwesomeIcon icon={faEnvelope} fixedWidth /> {employee.email}</p>
                                    <p><FontAwesomeIcon icon={faPhone} fixedWidth /> {employee.phone}</p>
                                </small>
                            </td>

                            <td className="text-center">
                                <Button type="button" variant="danger" onClick={()=>employeeDelete(employee.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-flex align-items-center justify-content-end">
                <div className="dialog dialog-left">
                    Employees: <b>{employeesFiltered.length}</b>
                </div>
                <img src="./dialog2.gif" className="ms-4" />
            </div>
        </div>
    );
};

export default Listado;
