import { useState } from "react";

export function useAdd() {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)

    return [count, increment]
}

export function useSub() {
    const [count, setCount] = useState(0)

    const decrement = () => setCount(count - 1)

    return [count, decrement]
}

