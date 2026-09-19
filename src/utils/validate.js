const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validarFormulario(datos) {
	const errores = {};
	const nombre = datos.nombre_completo?.trim();
	const correo = datos.email?.trim();
	const fecha = datos.fecha_evento;
	const hora = datos.hora_entrada;
	const asistentes = Number(datos.numero_ninos);

	if (!nombre) {
		errores.nombre = 'El nombre es obligatorio.';
	} else if (nombre.length < 3) {
		errores.nombre = 'El nombre debe tener al menos 3 caracteres.';
	}

	if (!correo) {
		errores.email = 'El correo electrónico es obligatorio.';
	} else if (!correoValido.test(correo)) {
		errores.correo = 'Ingresa un correo electrónico válido.';
	}

	if (!fecha) {
		errores.fecha = 'La fecha es obligatoria.';
	} else {
		const fechaSeleccionada = new Date(`${fecha}T00:00:00`);
		const hoy = new Date();
		hoy.setHours(0, 0, 0, 0);

		if (Number.isNaN(fechaSeleccionada.getTime()) || fechaSeleccionada < hoy) {
			errores.fecha = 'Selecciona una fecha válida que no sea anterior a hoy.';
		}
	}

	if (!hora) {
		errores.hora = 'La hora es obligatoria y la hora de entrada debe ser anterior a la hora de salida.';
	}

	if (!datos.numero_ninos) {
		errores.asistentes = 'La cantidad de asistentes es obligatoria.';
	} else if (!Number.isInteger(asistentes) || asistentes < 1) {
		errores.asistentes = 'La cantidad de asistentes debe ser un número mayor que cero.';
	}

	if (datos.telefono && !/^\+?[0-9\s()-]{7,20}$/.test(datos.telefono.trim())) {
		errores.telefono = 'Ingresa un número de teléfono válido.';
	}

	return errores;
}

export const formularioEsValido = (datos) =>
	Object.keys(validarFormulario(datos)).length === 0;
