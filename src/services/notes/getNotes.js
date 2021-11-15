import axios from 'axios';

export const getNotes = () => {
    return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        const { data } = response
        return data;
    })
}