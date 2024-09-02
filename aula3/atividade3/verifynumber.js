function verify(numjogador, numaleatorio) {
    if (numjogador > numaleatorio) {
        return "maior"
    } else if (numjogador < numaleatorio) {
        return "menor"
    } else {
        return "igual"
    }
}

export default verify