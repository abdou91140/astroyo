

export const fetchSign = async () => {
    const res = await fetch(`http://horoscope-api.herokuapp.com/horoscope/knowmore/` + props.signName)
    const data = await res.json()

    if (!data) {
        return res.status(404)

    }
    return data

}