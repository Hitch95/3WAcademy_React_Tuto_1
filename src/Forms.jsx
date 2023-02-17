import { useRef } from "react"

export default function Forms() {
    const titleRef = useRef(null)

    function handleChange(e) {
        titleRef.current.innerText = e.currentTarget.value
    }

    return <>
        <h2 ref={titleRef}>{}</h2>
        <input type="text" onChange={handleChange} />
    </>
}