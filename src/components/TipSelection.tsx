import { useEffect } from "react"

type TipSelectionProps = {
    tip: number
    amount: number
    setTip: (tip: number) => void
    tipTotal: (amount: number) => void
}

const TipSelection = ({ tip, amount, setTip, tipTotal }: TipSelectionProps) => {
    const tips = [0, 15, 18, 20, 25]

    useEffect(() => {
        const tipAmount = amount * (tip / 100)
        tipTotal(tipAmount)
    }, [tip, amount, setTip, tipTotal])

    return (
        <div className="flex justify-center">
            <div className="flex flex-row gap-4">
                {tips.map((value) => (
                    <button
                        key={value}
                        className={`${
                            tip === value
                                ? "bg-green-700 text-white"
                                : "dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-white bg-neutral-100 hover:bg-neutral-200 text-black"
                        } p-2 rounded-md min-w-12`}
                        onClick={() => setTip(value)}>
                        {value}%
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TipSelection
