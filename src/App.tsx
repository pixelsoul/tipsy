import { useState } from "react"
import { ThemeProvider } from "@/components/ThemeProvider"
import AmountInput from "@/components/AmountInput"
import SplitAmount from "@/components/SplitAmount"
import TipSelection from "@/components/TipSelection"
import ThemeToggle from "@/components/ThemeToggle"
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from "@/components/ui/card"
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { motion, AnimatePresence } from "motion/react"
import AnimatedNumber from "@/components/AnimatedNumber"

const App = () => {
    const [amount, setAmount] = useState(0)
    const [splitAmount, setSplitAmount] = useState(0)
    const [tip, setTip] = useState(15)
    const [tipTotal, setTipTotal] = useState(0)

    return (
        <ThemeProvider>
            <div className="container h-auto lg:h-screen border flex flex-col justify-center px-4 py-4">
                <Card className="px-4 bg-transparent backdrop-blur overflow-auto">
                    <CardHeader className="flex flex-row items-center justify-between px-0">
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <span className="text-4xl text-green-500">
                                <RiMoneyDollarCircleFill />
                            </span>{" "}
                            Tip Calculator
                        </CardTitle>
                        <ThemeToggle />
                    </CardHeader>

                    <div className="mb-4">
                        <AmountInput value={amount} onChange={(value) => setAmount(value)} />
                    </div>

                    <CardContent className="border rounded-lg pb-4 px-0 mb-4 flex flex-col gap-4">
                        <span className="text-sm relative bg-neutral-100 text-black dark:bg-slate-900 dark:text-white px-2 py-1 rounded-t-lg">
                            Tip
                        </span>
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

                    <CardContent className="border rounded-lg pb-4 px-0 mb-4 flex flex-col gap-4">
                        <span className="text-sm relative bg-neutral-100 text-black dark:bg-slate-900 dark:text-white px-2 py-1 rounded-t-lg">
                            Split
                        </span>
                        <SplitAmount
                            perPerson={(amount) => {
                                setSplitAmount(amount)
                            }}
                        />
                    </CardContent>

                    <CardContent className="flex flex-col border p-4 rounded-lg gap-3">
                        <div className="flex flex-row justify-between">
                            <span>Tip total</span>
                            <span className="font-bold">
                                <AnimatedNumber value={tipTotal || 0} duration={0.2} />
                            </span>
                        </div>

                        <div className="flex flex-row justify-between">
                            <span className="flex items-center gap-2">
                                Total{" "}
                                {splitAmount > 1 ? (
                                    <AnimatePresence>
                                        <motion.span
                                            initial={{
                                                opacity: 0,
                                                y: -10,
                                                scale: 0.9,
                                                display: "none",
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                display: "block",
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -10,
                                                scale: 0.9,
                                                display: "none",
                                            }}
                                            transition={{
                                                duration: 0.2,
                                                ease: "easeInOut",
                                                delay: 0.1,
                                            }}
                                            className="text-green-500">
                                            / {splitAmount} people
                                        </motion.span>
                                    </AnimatePresence>
                                ) : null}
                            </span>
                            <span className="font-bold">
                                <AnimatedNumber
                                    value={(amount + tipTotal) / splitAmount || 0}
                                    duration={0.1}
                                />
                            </span>
                        </div>
                    </CardContent>

                    <CardFooter className="flex gap-3 items-center justify-center mt-10 text-sm text-slate-500">
                        <a
                            href="https://pixelsoul.com"
                            target="_blank"
                            className="hover:underline"
                            aria-label="pixelsoul.com">
                            pixelsoul.com
                        </a>
                    </CardFooter>
                </Card>
            </div>
        </ThemeProvider>
    )
}

export default App
