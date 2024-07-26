import { usePatientStorage } from '../store';
import PatientDetails from './PatientDetails';

export default function PatientList() {
  const patients = usePatientStorage((state) => state.patients);

  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {patients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus
              <span className="text-indigo-600 font-bold ml-1">pacientes y citas</span>
            </p>
            {patients.map((patient) => (
              <PatientDetails key={patient.id} patient={patient} />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes registrados</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes
              <span className="text-indigo-600 font-bold ml-1">y aparacerán en este lugar</span>
            </p>
          </>
        )}
      </div>
    </>
  );
}
