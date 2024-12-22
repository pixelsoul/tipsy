import { useState } from "react"
import { ThemeProvider } from "@/components/ThemeProvider"
import AmountInput from "@/components/AmountInput"
import SplitAmount from "@/components/SplitAmount"
import TipSelection from "@/components/TipSelection"
import ThemeToggle from "@/components/ThemeToggle"
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from "@/components/ui/card"

const App = () => {
    const [amount, setAmount] = useState(0)
    const [splitAmount, setSplitAmount] = useState(0)
    const [tip, setTip] = useState(15)
    const [tipTotal, setTipTotal] = useState(0)

    return (
        <ThemeProvider>
            <div className="container h-screen border flex flex-col md:justify-center px-4">
                <Card className="px-4 mt-4 md:mt-0 dark:bg-neutral-950">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl">Tip Calculator</CardTitle>
                        <ThemeToggle />
                    </CardHeader>

                    <div className="mb-4">
                        <AmountInput value={amount} onChange={(value) => setAmount(value)} />
                    </div>

                    <CardContent className="border rounded-lg py-4 mb-4">
                        <TipSelection
                            tip={tip}
                            amount={amount}
                            setTip={(tip) => {
                                setTip(tip)
                            }}
                            tipTotal={(tipTotal) => {
                                setTipTotal(tipTotal)
                            }}
                        />
                    </CardContent>

                    <CardContent className="border rounded-lg py-4 mb-4">
                        <SplitAmount
                            perPerson={(amount) => {
                                setSplitAmount(amount)
                            }}
                        />
                    </CardContent>

                    <CardContent className="flex flex-col border p-4 rounded-lg">
                        <div className="flex flex-row justify-between">
                            <span>Tip total</span>
                            <span>${tipTotal.toFixed(2)}</span>
                        </div>

                        <div className="flex flex-row justify-between">
                            <span>Total per person</span>
                            <span>${((amount + tipTotal) / splitAmount).toFixed(2)}</span>
                        </div>
                    </CardContent>

                    {/* <CardContent>
                        <div className="flex m-auto w-fit">
                            <button
                                className="bg-primary-500 text-white p-2 rounded-md"
                                onClick={() => {
                                    setAmount(0)
                                    setSplitAmount(1)
                                    setTip(15)
                                    setTipTotal(0)
                                }}>
                                Reset
                            </button>
                        </div>
                    </CardContent> */}

                    <CardFooter className="flex items-center justify-center mt-20">
                        &copy; {new Date().getFullYear()} Pixelsoul
                    </CardFooter>
                </Card>
            </div>
        </ThemeProvider>
    )
}

export default App
