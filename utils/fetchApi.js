import axios from "axios";

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': '6449927b57mshf4b9b67f700ff35p1f5947jsna3a7177b52c4'
//   }

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '6449927b57mshf4b9b67f700ff35p1f5947jsna3a7177b52c4'
        }
        
    });

    return data;
}