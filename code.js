const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contra: /^.{8,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	celular: /^\d{9}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	contra: false,
	correo: false,
	celular: false
}

const validarFormulario = (e) => {
	switch (e.target.id) {
		case "firstName":
			validarCampo(expresiones.nombre, e.target, 'firstName');
		break;
		case "lastName":
			validarCampo(expresiones.nombre, e.target, 'lastName');
		break;
		case "emailAddress":
			validarCampo(expresiones.correo, e.target, 'emailAddress');
		break;
		case "phone":
			validarCampo(expresiones.celular, e.target, 'phone');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
    const iconSuccess = document.createElement("i")
    const iconDanger = document.createElement("i")
    iconSuccess.classList.add('bi-check-circle-fill')
	iconDanger.classList.add('bi-x-circle-fill')
    const inputCampo = document.getElementById(`${campo}`)
    if(expresion.test(input.value)){
        console.log("correcto")
        inputCampo.classList.remove('text-danger');
        inputCampo.classList.add('text-success');
        ///inputCampo.append(iconSuccess)
        // document.getElementById(`${campo}`).classList.remove('text-danger');
		// document.getElementById(`${campo}`).classList.add('text-success');
        // document.querySelector("h1").append(iconSuccess)
    
	} else {
		console.log("incorrecto")
        document.getElementById(`${campo}`).classList.add('text-danger');
		document.getElementById(`${campo}`).classList.remove('text-success');

	}
}

inputs.forEach((input) =>{
    input.addEventListener('keyup',validarFormulario)
})