import fetch from 'node-fetch';

const API = 'https://plankton-app-xhkom.ondigitalocean.app/api';

//all movies
export async function allMovies() {
    const res = await fetch(API + '/movies');
    const content = await res.json();
    const newArrayContent = content.data.map((obj) => {
        return {
            id: obj.id,
            ...obj.attributes,
        };
    });
    return newArrayContent;
}

//one movie
export async function oneMovie(id) {
    const res = await fetch(API + '/movies/' + id);
    const content = await res.json();
    return {
        id: content.data.id,
        ...content.data.attributes,
    };
}
