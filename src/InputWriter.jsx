import { useRef } from "react"

export default function InputWriter() {
    const containerRef = useRef(null)

    function handleChange(e) {
        containerRef.current.innerText = e.currentTarget.value
    }

    return <>
        <h2>Write here: <span ref={containerRef}></span></h2>
        <input onChange={handleChange} className="form-control" type="text" />
    </>
}