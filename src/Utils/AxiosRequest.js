import axios from "axios";

const codeMessage = {
  200: "El servidor devolvió correctamente los datos solicitados.",
  201: "Los datos nuevos o modificados son exitosos.",
  202: "Una solicitud ha ingresado a la cola de fondo (tarea asíncrona).",
  204: "La información fue eliminada exitosamente",
  400: "La solicitud se realizó con un error y el servidor no realizó ninguna operación de datos nueva o modificada.",
  401: "El usuario no tiene permiso (el token, el nombre de usuario, la contraseña son incorrectos).",
  403: "El usuario está autorizado, pero el acceso está prohibido.",
  404: "La solicitud se realiza para un registro que no existe y el servidor no funciona.",
  406: "El formato de la solicitud no está disponible.",
  410: "El recurso solicitado se elimina permanentemente y no se recuperará.",
  422: "Se produjo un error de validación al crear un objeto.",
  500: "Se produjo un error en el servidor. Compruebe el servidor.",
  502: "Error de puerta de enlace",
  503: "El servicio no está disponible y el servidor está temporalmente sobrecargado o mantenido.",
  504: "La puerta de enlace agotó el tiempo de espera."
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const errortext = codeMessage[response.status] || response.statusText;
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

export function axiosRequest(url, option) {
  return axios({
    url: url,
    method: option.method,
    headers: option.headers,
    data: option.body
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    })
}