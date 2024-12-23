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

    const buttonStyles =
        "dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-white bg-neutral-100 hover:bg-neutral-200 text-black p-2 rounded-md focus:outline-none "

    return (
        <div className="flex justify-center">
            <div className="flex flex-row gap-4">
                <Button className={buttonStyles} onClick={() => setSplit(split - 1)}>
                    <FaMinus />
                </Button>
                <div className="text-2xl">{split}</div>
                <Button className={buttonStyles} onClick={() => setSplit(split + 1)}>
                    <FaPlus />
                </Button>
            </div>
        </div>
    )
}

export default SplitAmount
