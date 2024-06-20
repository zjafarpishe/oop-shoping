export const GetData = async () => {
    console.log("1");
    const fetchdata = await fetch('data.json')
    const json = await fetchdata.json()
    return json
}

