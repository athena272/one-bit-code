import { useState } from "react";

function getInitialValue() {
    console.log("obtendo valor inicial")
    return 1 + 1
}

export function useAdd() {
    const [count, setCount] = useState(() => getInitialValue())

    const increment = () => {
        setCount((previusCount) => previusCount + 1)
        setCount((previusCount) => previusCount + 1)
    }

    return [count, increment]
}

export function useSub() {
    const [count, setCount] = useState(0)

    const decrement = () => setCount(count - 1)

    return [count, decrement]
}

