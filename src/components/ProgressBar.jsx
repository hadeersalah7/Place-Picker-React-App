import { useEffect, useState } from 'react'
const ProgressBar = ({timer}) => {
    const [remainingTime, setRemainingTime] = useState(timer)

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 10)
        }, 10)

        return () => {
            console.log("Cleaning Interval")
            clearInterval(interval)
        }
    }, [])
    return (
        <progress value={remainingTime} max={timer} />    )
}

export default ProgressBar