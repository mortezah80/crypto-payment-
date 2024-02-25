import React from 'react';
import {FC} from 'react'

interface CategoryInt {
    name : string
}

const Category : FC<CategoryInt> = (props) => {
    return (
        <div className='py-[6px] px-[12px] rounded-[12px] bg-primary_light text-primary'>
            <span>{props.name}</span>
        </div>
    );
};

export default Category;