import { useState } from "react"

export const useCounter = (initialValue: number = 0) => {
    const [value, setValue] = useState<number>(initialValue)

    const accumulate = (num: number) => {
        setValue(value + num)
    }

    return {
        value,
        accumulate
    }
}
