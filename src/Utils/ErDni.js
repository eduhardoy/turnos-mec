export default function ErDni(dni) {
    if ((/^\d{7}[0-9]$/.test(dni))) {
        return true
    }
}