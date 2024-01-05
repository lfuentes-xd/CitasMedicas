import Swal from 'sweetalert2'

const Patientinfo = ({ Patient, setPatient, deletePatient }) => {
    // console.log(Patient)

    const deletedpatient = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Seguro? esto no se podrá deshacer. ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'cancelar',
            confirmButtonText: 'Si, borrar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Borrado!',
                    'El registro ha sido borrado.',
                    'success'
                )
                deletePatient(id);
            }
        })
    }
    return (
        <div>
            <div className="m-3 bg-white shadow-sm px-5 py-10 rounded-xl ">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre del propietario: {' '} <span className="font-normal normal-case">{Patient.Ownername}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Telefono del propietario: {' '} <span className="font-normal normal-case">{Patient.Ownerphone}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email del propietario: {' '} <span className="font-normal normal-case">{Patient.Ownermail}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre de la mascota:  {' '} <span className="font-normal normal-case">{Patient.Petname}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha de alta: {' '} <span className="font-normal normal-case">{Patient.Date}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas de la mascota: {' '} <span className="font-normal normal-case">{Patient.Symptoms}</span>
                </p>
                <div className="">
                    <div>
                        <button class="w-full mx-2 mb-2 xl:w-1/3 transition ease-in-out delay-150 p-2 uppercase font-bold text-white rounded-lg bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 ..."
                            onClick={() => setPatient(Patient)}>
                            editar
                        </button>

                        <button class="w-full mx-2 xl:w-1/3 transition ease-in-out delay-150 p-2 uppercase font-bold text-white rounded-lg bg-violet-500 hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-300 ..."
                            onClick={() => deletedpatient(Patient.id)}>
                            eliminar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Patientinfo