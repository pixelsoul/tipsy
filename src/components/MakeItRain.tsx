import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import * as THREE from "three"

type MoneySignProps = {
    speed: number
    color: string
    size: number
    zDepth: number
    opacity: number
    drift: number
}

const MoneySign = ({ speed, color, size, zDepth, opacity, drift }: MoneySignProps) => {
    const mesh = useRef<THREE.Mesh>(null)
    const startY = Math.random() * 10 + 5 // Random starting height
    const startX = Math.random() * 10 - 5 // Random X position
    const offset = Math.random() * Math.PI * 2 // Random phase offset for drift

    useEffect(() => {
        if (!mesh.current) return
        mesh.current.position.set(startX, startY, zDepth) // Set initial position
    }, [startX, startY, zDepth])

    useFrame(({ clock }) => {
        if (mesh.current) {
            const time = clock.getElapsedTime()

            // Apply drift using a sine wave
            mesh.current.position.x = startX + Math.sin(time * drift + offset) * 0.5

            // Move downward at a constant speed
            mesh.current.position.y -= speed

            // Adjust opacity based on position (fade out near bottom)
            const yPosition = mesh.current.position.y
            const fadeStart = -2 // Start fading out
            const fadeEnd = -5 // Fully transparent when below this point
            const newOpacity = THREE.MathUtils.clamp(
                (yPosition - fadeEnd) / (fadeStart - fadeEnd),
                0,
                opacity
            )

            if (mesh.current.material instanceof THREE.MeshBasicMaterial) {
                mesh.current.material.opacity = newOpacity
            }

            // Reset position when fully transparent or off-screen
            if (yPosition < fadeEnd) {
                mesh.current.position.y = startY
                mesh.current.position.x = Math.random() * 10 - 5 // Reset to new random X
            }
        }
    })

    return (
        <Text
            ref={mesh}
            color={color}
            fontSize={size}
            position={[startX, startY, zDepth]}
            material-transparent // Allow transparency
        >
            🤑
        </Text>
    )
}

const MakeItRain = ({ count = 50, color = "green" }) => {
    return (
        <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {Array.from({ length: count }).map((_, i) => {
                // Random properties for each sign
                const speed = Math.random() * 0.02 + 0.001 // Random speed between 0.01 and 0.03
                const size = Math.random() * 0.5 + 0.2 // Random size between 0.2 and 0.7
                const zDepth = Math.random() * -10 // Random depth (further away = negative z)
                const opacity = Math.max(0.3, 1 + zDepth / 10) // Transparency based on depth
                const drift = Math.random() * 0.5 + 0.5 // Random drift intensity

                return (
                    <MoneySign
                        key={i}
                        speed={speed}
                        color={color}
                        size={size}
                        zDepth={zDepth}
                        opacity={opacity}
                        drift={drift}
                    />
                )
            })}
        </Canvas>
    )
}

export default MakeItRain
