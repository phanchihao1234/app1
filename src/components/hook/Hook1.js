import React, { useState } from 'react'

export default function Hook1() {
    const [name, setName] = useState("")
    return (
        <div>
            <h1>Hook name: {name}</h1>
            <input type='text' placeholder='nhap ten deii' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
