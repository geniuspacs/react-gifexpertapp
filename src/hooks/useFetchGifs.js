import { useEffect, useState } from "react";
import { getGifs } from '../helpers/get-gifts';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Los efectos NO pueden ser async
    useEffect(() => {
        getGifs(category).then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
        });
    }, [category]);

    return state; // { data: [], loading: true }
}

/*
# HOOKS: Son funciones que pueden actuar igualmente como un functional component.
*/