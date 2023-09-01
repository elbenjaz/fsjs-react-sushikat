import { Col, Button, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Formulario = ({ employeeCreate, setFeedback }) => {
    const fields = {
        name   : "",
        email  : "",
        age    : "",
        job    : "",
        phone  : "",
        avatar : ""
    };

    const [formData, setFormData] = useState(fields);

    const isValidAge = (age) => {
        return !isNaN(age) && age > 0 && age < 100;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone) => {
        const phonelRegex = /^[+]?[0-9 ]*$/;
        return phonelRegex.test(phone);
    };

    const onFormChange = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value });
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        setFeedback("");

        if (!formData.name.trim() || !formData.email.trim() || !formData.age.trim() || !formData.job.trim() || !formData.phone.trim()) {
            setFeedback({ "error" : "All fields are required." });
            return false;
        }

        if (!isValidAge(formData.age)) {
            setFeedback({ "error" : "Age is not valid." });
            return false;
        }

        if (!isValidEmail(formData.email)) {
            setFeedback({ "error" : "Email is not valid." });
            return false;
        }

        if (!isValidPhone(formData.phone)) {
            setFeedback({ "error" : "Phone is not valid." });
            return false;
        }

        employeeCreate(formData);

        setFormData(fields);
        setFeedback({ "success" : <><b>{formData.name}</b>  is a new employee!</> });

        return true;
    };

    return (
        <Form onSubmit={registerSubmit}>
            <h4 className="mb-4">Add employee</h4>

            <Row>
                <Col xs={8}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            onChange={onFormChange}
                            value={formData.name}
                            autoComplete="off"
                            className="handwritten" />
                    </Form.Group>
                </Col>

                <Col xs={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="text"
                            name="age"
                            onChange={onFormChange}
                            value={formData.age}
                            autoComplete="off" />
                    </Form.Group>            
                </Col>

                <Col xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Job</Form.Label>
                        <Form.Control
                            type="text"
                            name="job"
                            onChange={onFormChange}
                            value={formData.job}
                            autoComplete="off"
                            className="handwritten" />
                    </Form.Group>
                </Col>

                <Col xs={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            onChange={onFormChange}
                            value={formData.email}
                            autoComplete="off" />
                    </Form.Group>
                </Col>

                <Col xs={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            onChange={onFormChange}
                            value={formData.phone}
                            autoComplete="off" />
                    </Form.Group>
                </Col>
            </Row>

            <div className="text-end">
                <Button type="submit" variant="primary" className="w-25">
                    <FontAwesomeIcon icon={faCheck} />
                </Button>

                <Button type="reset" variant="light" className="w-25 ms-2" onClick={() => setFormData(fields)}>
                    <FontAwesomeIcon icon={faClose} />
                </Button>
            </div>
        </Form>
    );
};

export default Formulario;
