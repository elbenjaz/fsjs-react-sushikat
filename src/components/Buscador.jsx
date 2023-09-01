import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Buscador = ({ employeesFilter, setEmployeesFilter }) => {
    const [filters, setFilters] = useState(employeesFilter);

    const onFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name] : e.target.value });
    };

    const Search = (e) => {
        e.preventDefault();

        setEmployeesFilter({ ...employeesFilter, ...filters });
    };

    return (
        <div className="mb-4">
            <h4 className="mb-4">Employees</h4>

            <Form onSubmit={Search}
                className="d-flex justify-content-center justify-content-lg-end align-items-center">
                <Form.Group>
                    <Form.Control name="text" type="text" onChange={onFilterChange} />
                </Form.Group>

                <Button type="submit" variant="light" className="ms-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </Form>
        </div>
    );
};

export default Buscador;