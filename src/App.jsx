import Buscador from './components/Buscador';
import Feedback from './components/Alert';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { employees as employeesJSON} from './data/employees';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [employees, setEmployees] = useState(employeesJSON);
    const [employeesFilter, setEmployeesFilter] = useState({
        text : ""
    });

    const employeesFiltered = employees.filter(employee => {
        //const filter = (text) => new RegExp(employeesFilter.text.trim(), "i").test(text);
        const filter = (text) => text.toLowerCase().includes(employeesFilter.text.trim().toLowerCase());

        return filter(employee.name) || filter(employee.email) || 
               filter(employee.age) || filter(employee.job) ||
               filter(employee.phone);
    });

    const employeeCreate = (employee) => {
        const newEmployee = { ...employee, ...{
            id     : uuidv4(), 
            avatar : "https://cute-cat-avatars.fly.dev/api/v1/cat" 
        }};
        
        setEmployees([...employees, newEmployee]);
    };

    const employeeDelete = (id) => {
        const index = employees.findIndex(employee => employee.id === id);

        if (index === -1) {
            return false;
        }
        
        const employeesList = [...employees];
        employeesList.splice(index, 1);
        
        setEmployees(employeesList);
    };

    const [feedback, setFeedback] = useState("");

    return (
        <>
            <nav className="p-4">
                <h1><img src="./logo.png" />SushiKat</h1>
            </nav>

            <main className="container my-4">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="Formulario mx-auto">
                            <Formulario
                                employeeCreate={employeeCreate}
                                setFeedback={setFeedback} />
                            
                            <div className="mt-3">
                                <Feedback feedback={feedback} setFeedback={setFeedback} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 mt-4 mt-lg-0">
                        <div className="Listado mx-auto">
                            <Buscador 
                                employeesFilter={employeesFilter} 
                                setEmployeesFilter={setEmployeesFilter} />
                            <Listado
                                employeesFiltered={employeesFiltered}
                                employeeDelete={employeeDelete} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;
