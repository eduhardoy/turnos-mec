export default function regexDni(dni) {
    if ((/^\d{7}[0-9]$/.test(dni))) {
        return true
    }
}