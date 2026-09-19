const API_BASE = import.meta.env.VITE_API_URL + "/reservas";

export async function getReservas() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error("No se pudieron cargar las reservas");
  return res.json();
}

export async function getReserva(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error("No se pudo cargar la reserva");
  return res.json();
}

export async function createReserva(datos) {
 const response = await fetch(`${API_BASE}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(datos),
})

const data = await response.json()

console.log('STATUS:', response.status)
console.log('RESPUESTA:', data)

if (!response.ok) {
    throw new Error(data.message || 'Error al crear la reserva')
}

return data
}
