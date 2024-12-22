import { useEffect } from "react"
import { Input } from "@/components/ui/input"

type AmountInputProps = {
    value: number
    onChange: (value: number) => void
}

const AmountInput = ({ value, onChange }: AmountInputProps) => {
    useEffect(() => {
        if (value === 0) {
            return
        }

        // const currencyFormatter = new Intl.NumberFormat("en-US", {
        //     style: "currency",
        //     currency: "USD",
        //     minimumFractionDigits: 2,
        // })

        // const formattedValue = currencyFormatter.format(value)
        // onChange(parseFloat(formattedValue.replace("$", "")))

        onChange(parseFloat(value.toFixed(2)))
    }, [value, onChange])

    return (
        <div className="flex justify-center">
            <div className="relative">
                <Input
                    id="Amount"
                    className="peer ps-6 !text-4xl font-bold text-center h-14 border-0 bg-neutral-100 text-neutral-900 dark:bg-slate-900 dark:text-neutral-100"
                    placeholder="0.00"
                    value={value}
                    type="number"
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                />
                <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-2xl text-muted-foreground peer-disabled:opacity-50">
                    $
                </span>
            </div>
        </div>
    )
}

export default AmountInput
