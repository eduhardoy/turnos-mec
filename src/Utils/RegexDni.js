export function regexCuit(cuit) {
    if ((/^\d{10}[0-9]$/.test(cuit))) {
        return true
    }
}

export function regexDni(dni) {
    if ((/^\d{7}[0-9]$/.test(dni))) {
        return true
    }
}