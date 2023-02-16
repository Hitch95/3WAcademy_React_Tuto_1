export default function FormattedTime({ time }) {
    let output = `${time.hour.toString().padStart(2, "0")}`
    output += `:${time.min.toString().padStart(2, "0")}`
    output += `:${time.sec.toString().padStart(2, "0")}`

    return <div className="alert alert-info my-2">{output}</div>
}