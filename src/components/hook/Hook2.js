import React, { useState } from 'react'

export default function Hook2() {
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [kq, setKq] = useState("")
    // function calc(v) {
    //     if (v == "+") {
    //         setKq(parseInt(a) + parseInt(b))
    //     } else if (v == "-") {
    //         setKq(parseInt(a) - parseInt(b))
    //     }
    //     else if (v == "/") {
    //         setKq(parseInt(a) / parseInt(b))
    //     }
    //     else if (v == "*") {
    //         setKq(parseInt(a) * parseInt(b))
    //     }
    // }
    return (
        <div>
            <input className='' type='number' value={a} onChange={(e) => setA(e.target.value * 1)} /><br />
            <input className='' type='number' value={b} onChange={(e) => setB(e.target.value * 1)} />
            <button onClick={() => setKq(a + b)}>+</button>
            <button onClick={() => setKq(a - b)}>-</button>
            <button onClick={() => setKq(a / b)}>/</button>
            <button onClick={() => setKq(a * b)}>*</button>
            <p>{kq}</p>
        </div>
    )
}
