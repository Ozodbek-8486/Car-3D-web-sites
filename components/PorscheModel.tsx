// components/PorscheModel.tsx
import { useGLTF } from "@react-three/drei"

export default function PorscheModel() {
  const { scene } = useGLTF("/models/porsche-2022.glb") // public/models ichidan yuklayapti
  return <primitive object={scene} scale={0.008} position={[0, -1.5, 0]} />
}

useGLTF.preload("/models/porsche-2022.glb") // ⚡ oldindan yuklash uchun
