import React, { FC } from 'react';
import { TagStyle } from './Style';

export type Tag = {
    title: string;
} 

const Tag = ({ title }: Tag) => {
    return(
        <TagStyle>{title}</TagStyle>
    );
}

export default Tag;