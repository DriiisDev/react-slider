import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import { useState } from 'react/cjs/react.production.min';

function Slides({slides}) {
    const [active, setActive] = React.useState(0)
    const allslides = slides;

    const reset = ()=>{
        return(setActive(0));
    }
    const next = ()=>{
        let click = active
        return(setActive(++click));
    }
    const previous = ()=>{
        let click = active
        return(setActive(--click));
    }
    const slideContent=()=>{
        let data = allslides[active]
        let{title, text} = data
        return(
            <>
                <div id="slide" className="card text-center">
                    <h1 data-testid="title">{title}</h1>
                    <p data-testid="text">{text}</p>
                </div>
            </>
        );
    }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={()=>reset()} disabled={active===0}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={()=>previous()} disabled={active===0}>Prev</button>
                <button data-testid="button-next" className="small" onClick={()=>next()} disabled={active=== allslides.length - 1}>Next</button>
            </div>
            {slideContent()}
        </div>
    );

}

export default Slides;
