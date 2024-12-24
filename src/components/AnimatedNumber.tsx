import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { formatCurrency } from "@/lib/utils"

interface AnimatedNumberProps {
    value: number // The value to animate to
    duration?: number // Animation duration in seconds
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 0.5 }) => {
    const [displayValue, setDisplayValue] = useState(value)

    useEffect(() => {
        if (displayValue === value) return // Avoid unnecessary updates

        const startValue = displayValue
        const delta = value - startValue
        const steps = 30 // Number of steps for the animation
        const stepTime = (duration * 1000) / steps // Time per step in milliseconds
        let currentStep = 0

        const interval = setInterval(() => {
            currentStep++
            const newValue = startValue + (delta * currentStep) / steps
            setDisplayValue(Math.round(newValue))

            if (currentStep >= steps) {
                clearInterval(interval)
                setDisplayValue(value) // Ensure the final value is set exactly
            }
        }, stepTime)

        return () => clearInterval(interval)
    }, [value, duration, displayValue])

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}>
            {formatCurrency(displayValue)}
        </motion.span>
    )
}

export default AnimatedNumber
