import React, {useState } from 'react'
import { css } from '@emotion/core';

const Wave = () => {
    const [waves, setwaves] = useState(0);
    const label = ` ${waves} ${waves > 1? 'waves': 'wave'}`
    return (
        <button 
            css={css`
                background-color: rebeccapurple;
                border: none;
                color: white;
                font-size: 1.25rem;
                cursor: pointer
            `}
            onClick={() => setwaves(waves+ 1)}>{label}</button>
    )
}

export default Wave;