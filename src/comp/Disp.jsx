import React, { useState } from 'react'
import Button from './Button';

function Disp () {
    const [value, setValue] = useState(0);

   function add(){
        const total = value + 1;
        setValue(total)
    };

    function dec(){
        const total = value - 1;
        setValue(total)
    }

        return(
            <div>
                <Button action={add} name='+'/>
                <h1>{value}</h1>
                <Button action={dec} name='-'/>
            </div>
        )
}

export default Disp