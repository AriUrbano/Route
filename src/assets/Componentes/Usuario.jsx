import { useParams } from "react-router-dom";

function Usuario(mayoriaEdad) {
    const { id } = useParams();
    const { nombre } = useParams();
    const { apellido } = useParams();
    const { edad } = useParams();
    const { email } = useParams();
    return (
        <div>
            <h2>Perfil del usuario</h2>
            <p>El ID del usuario es {id}</p>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Edad: {edad}</p>
            <p>Mail: {email}</p>
            <p>Mayoria de edad: {mayoriaEdad}</p>
        </div>
    );
}
export default Usuario;