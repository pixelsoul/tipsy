import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FaMinus, FaPlus } from "react-icons/fa"

type SplitAmountProps = {
    perPerson: (amount: number) => void
}

const SplitAmount = ({ perPerson }: SplitAmountProps) => {
    const [split, setSplit] = useState(1)

    useEffect(() => {
        if (split < 1) {
            setSplit(1)
        }

        perPerson(split)
    }, [split, perPerson])

    return (
        <div className="flex justify-center">
            <div className="flex flex-row gap-4">
                <Button onClick={() => setSplit(split - 1)}>
                    <FaMinus />
                </Button>
                <div className="text-2xl">{split}</div>
                <Button onClick={() => setSplit(split + 1)}>
                    <FaPlus />
                </Button>
            </div>
        </div>
    )
}

export default SplitAmount
