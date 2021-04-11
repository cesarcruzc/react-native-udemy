import { useState } from "react"

export const Counter = () => {

    const [value, setValue] = useState<number>(0)

    const accumulate = (num: number) => {
        setValue(value + num)
    }

    return (
        <>
            <h3>Counter: <span>{value}</span> </h3>
            <button className="btn btn-primary" onClick={() => accumulate(1)}>+1</button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => accumulate(-1)}>-1</button>
        </>
    )
}
