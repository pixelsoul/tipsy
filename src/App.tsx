import { ThemeProvider } from "@/components/ThemeProvider"
import ThemeToggle from "@/components/ThemeToggle"

const App = () => {
    return (
        <ThemeProvider>
            <header>
                <h1>Vite + React + TypeScript + Tailwind CSS</h1>
                <ThemeToggle />
            </header>
            <main>
                <section>
                    <p>
                        Edit <code>App.tsx</code> and save to test HMR updates.
                    </p>
                </section>

                <section>
                    <p>
                        <a
                            href="https://tailwindcss.com/docs"
                            target="_blank"
                            rel="noopener noreferrer">
                            Tailwind CSS Docs
                        </a>
                    </p>
                </section>
            </main>
            <footer>
                <p>
                    <a
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        Vite Docs
                    </a>
                </p>
            </footer>
        </ThemeProvider>
    )
}

export default App
