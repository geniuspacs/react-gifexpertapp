import { useState } from 'react';

import { AddCategory } from './components/add-category';
import { GifGrid } from './components/gif-grid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Nuevo']);
    //     setCategories(cats => [...cats, 'Nuevo'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>{
                categories.map(category => 
                    <GifGrid
                        key={category}
                        category={category} />
                )
            }</ol>
        </>
    );
}