import { useEffect, useState } from "react"

import Header from "./Components/Header"
import Form from "./Components/Form"
import PatientList from "./Components/PatientList"

function App() {
  const Patienload = JSON.parse(localStorage.getItem('Patients')) ?? [];
  const [Patients, setPatients] = useState(Patienload); // <-- Arreglo
  const [Patient, setPatient] = useState({}); //<-- Objeto

  useEffect(() => {
    localStorage.setItem('Patients', JSON.stringify(Patients));
  }, [Patients]);

  const deletePatient = (id) => {
    const UndeletedPatients = Patients.filter(Patient => Patient.id !== id)
    setPatients(UndeletedPatients);
  }

  return (
    <div className="container md:m-5 mx-auto xl:mx-auto 2xl:mx-auto">
      <Header />
      <div className="mt-10 mx-5 md:flex xl:mx-auto">
        <Form
          Patients={Patients}
          setPatients={setPatients}
          Patient={Patient}
          setPatient={setPatient} />
        <PatientList
          Patients={Patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
