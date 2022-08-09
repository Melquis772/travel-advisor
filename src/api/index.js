import axios from "axios";


export const getPlacesData = async (type, sw, ne) => {

    const options = {
        params: {
            /* bl_latitude: '11.847676',
            tr_latitude: '12.838442',
            bl_longitude: '109.095887',
            tr_longitude: '109.149359', */
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng

        }

        ,
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, options);

        return await data;


    } catch (error) {
        console.log(error.message)
    }
}