import React from 'react';
import s from './Content.module.css';

const Content = () => {
    console.log('S', s);
    return(
        <div className={s.divMain}>
            Content
        </div>
    );
};

export default Content;