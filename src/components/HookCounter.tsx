import { useState } from "react"
import { useCounter } from '../hooks/useCounter';

export const HookCounter = () => {

    const { value, accumulate } = useCounter(0)

    return (
        <>
            <h3>Hook counter: <span>{value}</span> </h3>
            <button className="btn btn-primary" onClick={() => accumulate(-1)}>-1</button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => accumulate(1)}>+1</button>
        </>
    )
}
