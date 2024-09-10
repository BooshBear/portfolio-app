"use client"
import { Canvas } from "@react-three/fiber";
import Floor from "@/components/modules/Floor";
import Box from "@/components/modules/Box";
import LightBulb from "@/components/modules/LightBulb"

export default function Home() {
  return (
    <main className="min-w-lvw min-h-lvh">
      <Canvas
        shadows={true}
        className="bg-background"
        camera={{
          position: [0, 1, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 3, 0]} />
        <Box rotateX={3} rotateY={0.2} />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </main>
  );
}
