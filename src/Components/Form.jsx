import { useEffect, useState } from "react"
import Swal from 'sweetalert2'

function Form({ Patients, setPatients, Patient, setPatient }) {

  const [Ownername, setOwnername] = useState('');
  const [Ownerphone, setOwnerphone] = useState('');
  const [Ownermail, setOwnermail] = useState('');
  const [Petname, setPetname] = useState('');
  const [Date, setDate] = useState('');
  const [Symptoms, setSymptoms] = useState('');

  useEffect(() => {
    if (Object.keys(Patient).length > 0) {
      setOwnername(Patient.Ownername);
      setOwnerphone(Patient.Ownerphone);
      setOwnermail(Patient.Ownermail);
      setPetname(Patient.Petname);
      setDate(Patient.Date);
      setSymptoms(Patient.Symptoms);
    }
  }, [Patient])

  const GenerateID = () => {
    const random = Math.random().toString(36).substring(2);
    return random;
  }

  const cleanfields = () => {
    setOwnermail('')
    setOwnername('')
    setOwnerphone('')
    setPetname('')
    setDate('')
    setSymptoms('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([Ownername, Ownermail, Ownerphone, Petname, Date, Symptoms].includes('')) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tienes que llenar todos los campos',
      });
    } else {

      const Patientinfo = {
        Ownername,
        Ownermail,
        Ownerphone,
        Petname,
        Date,
        Symptoms
      }

      if (Patient.id) {
        Patientinfo.id = Patient.id;
        const UpdatedPatient = Patients.map(p => p.id === Patient.id ? Patientinfo : p);

        setPatients(UpdatedPatient);
        setPatient({}); //<-- para limpiar
        Swal.fire({
          icon: 'success',
          title: 'Hecho',
          text: 'Paciente modificado',
        });

      } else {
        Patientinfo.id = GenerateID();
        setPatients([...Patients, Patientinfo]);

        Swal.fire({
          icon: 'success',
          title: 'Hecho',
          text: 'Paciente registrado',
        });

      }
      cleanfields();
    }

  }

  return (
    <div className="w-full md:w-1/2">
      <h1 className="font-black text-center text-xl">Formulario de pacientes</h1>

      <p className="mt-5 font-black text-center">
        Administra y crea <span className="text-indigo-600"> Pacientes</span>
      </p>

      <form action="" className="bg-white shadow-sm rounded-lg py-5 my-5" onSubmit={handleSubmit}>

        <div className="mx-2 mb-2">
          <label htmlFor="OwnerName" className="block text-gray-700 uppercase font-bold">Nombre del dueño</label>
          <input
            type="text"
            id="OwnerName"
            placeholder="Nombre del dueño"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={Ownername}
            onChange={(e) => setOwnername(e.target.value)} />
        </div>

        <div className="mx-2 mb-2">
          <label htmlFor="OwnerNumber" className="block text-gray-700 uppercase font-bold">Telefono del dueño</label>
          <input
            type="number"
            id="OwnerNumber"
            placeholder="Telefono del dueño"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={Ownerphone}
            onChange={(e) => setOwnerphone(e.target.value)} />
        </div>

        <div className="mx-2 mb-2">
          <label htmlFor="OwnerEmail" className="block text-gray-700 uppercase font-bold">Email del dueño</label>
          <input
            type="email"
            id="OwnerEmail"
            placeholder="Email del dueño"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={Ownermail}
            onChange={(e) => setOwnermail(e.target.value)} />
        </div>

        <div className="mx-2 mb-2">
          <label htmlFor="PetName" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input
            type="text"
            id="PetName"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={Petname}
            onChange={(e) => setPetname(e.target.value)} />
        </div>


        <div className="mx-2 mb-2">
          <label htmlFor="" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
          <input
            type="date"
            id=""
            placeholder=""
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={Date}
            onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="mx-2 mb-2">
          <label htmlFor="Symptoms" className="block text-gray-700 uppercase font-bold">Sintomas de la mascota</label>
          <textarea name="" id="Symptoms" className="border-2 w-full p-2 mt-2 rounded-md"
            value={Symptoms}
            onChange={(e) => setSymptoms(e.target.value)}></textarea>
        </div>

        <div className="mx-2 mb-2 ">
          <input type="submit"
            value={Patient.id ? 'Modificar paciente' : 'Agregar paciente'}
            className="w-full p-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all" />
        </div>

      </form>
    </div>
  )
}

export default Form


