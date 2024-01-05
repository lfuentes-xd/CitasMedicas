import Patientinfo from "./Patientinfo"

const PatientList = ({ Patients, setPatient, deletePatient }) => {

  return (
    <div className="w-full md:w-1/2 xl:w-3/5 md:overflox-y-scroll ">
      {Patients && Patients.length ? (
        <>
          <p className="mt-5 font-black text-center">
            Administra y crea <span className="text-indigo-600"> Pacientes</span>
          </p>
          <div className="mx-2 mb-2 md:flex justify-center w-full ">

            <div className="w-full md:w-1/3">
              <label htmlFor="" className="block text-gray-700 uppercase font-bold">Buscar</label>
              <input
                type="text"
                id=""
                placeholder="Buscar paciente"
                className="border-2 w-full p-2 rounded-md" />
            </div>

            <div className="w-full md:w-1/3">
              <label htmlFor="" className="block text-gray-700 uppercase font-bold">Filtrar por fecha</label>
              <input
                type="date"
                id=""
                placeholder="Buscar paciente"
                className="border-2 w-full p-2 rounded-md " />
            </div>

          </div>
          <div className="">
            {Patients.map((Patient) => (
              <Patientinfo key={Patient.id} Patient={Patient} setPatient={setPatient} deletePatient={deletePatient}/>
            ))}
          </div>

        </>
      ) : (
        <>
          <h1 className="font-black text-center">Sin pacientes, crea uno para verlo aqui</h1>
        </>
      )}
    </div>
  )
}

export default PatientList