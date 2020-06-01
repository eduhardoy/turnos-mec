export default function ErPasaporte(pasaporte) {
    if ((/^\d{5}[0-9]$/.test(pasaporte))) {
        return true
    }
}