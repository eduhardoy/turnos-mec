export default function regexNumber(value) {
    if ((/[0-9]$/.test(value))) {
        return true
    }
}