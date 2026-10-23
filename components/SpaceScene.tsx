"use client";
import {Canvas,useFrame} from "@react-three/fiber";
import {Float,Stars} from "@react-three/drei";
import {useRef} from "react";
import * as THREE from "three";
function Raccoon({still}:{still:boolean}) {
 const group=useRef<THREE.Group>(null);
 useFrame(({clock})=>{if(group.current&&!still)group.current.rotation.y=Math.sin(clock.elapsedTime*.35)*.16});
 return <group ref={group} position={[0,-.15,0]}>
 <mesh position={[0,-.9,0]} scale={[.72,.85,.54]}><sphereGeometry args={[1,32,24]}/><meshStandardMaterial color="#e8dfff" metalness={.25}/></mesh>
 <mesh position={[0,.43,.05]} scale={[.91,.82,.76]}><sphereGeometry args={[1,40,32]}/><meshStandardMaterial color="#917b9e"/></mesh>
 {[-1,1].map(s=><group key={s}>
 <mesh position={[s*.7,1.1,0]} rotation={[0,0,s*-.4]}><coneGeometry args={[.3,.55,4]}/><meshStandardMaterial color="#917b9e"/></mesh>
 <mesh position={[s*.37,.46,.7]} scale={[.36,.3,.13]}><sphereGeometry args={[1,24,16]}/><meshStandardMaterial color="#291833"/></mesh>
 <mesh position={[s*.36,.48,.81]} scale={[.18,.15,.07]}><sphereGeometry args={[1,24,16]}/><meshStandardMaterial color="#e9c7ff" emissive="#a466ee" emissiveIntensity={.5}/></mesh>
 <mesh position={[s*.82,-.92,.05]} rotation={[0,0,s*.35]} scale={[.23,.56,.25]}><capsuleGeometry args={[1,1,6,12]}/><meshStandardMaterial color="#eee6ff"/></mesh>
 <mesh position={[s*.4,-1.67,.08]} scale={[.27,.38,.33]}><sphereGeometry args={[1,20,16]}/><meshStandardMaterial color="#6e4b9f"/></mesh>
 </group>)}
 <mesh position={[0,.14,.75]} scale={[.37,.28,.23]}><sphereGeometry args={[1,24,16]}/><meshStandardMaterial color="#ddc3d9"/></mesh>
 <mesh position={[0,.25,.95]} scale={[.13,.1,.12]}><sphereGeometry args={[1,24,16]}/><meshStandardMaterial color="#25152b"/></mesh>
 <mesh position={[0,.4,.08]} scale={[1.08,1,.91]}><sphereGeometry args={[1,48,32]}/><meshPhysicalMaterial color="#b48bff" transparent opacity={.13} roughness={.04} metalness={.3} side={THREE.DoubleSide}/></mesh>
 <mesh position={[0,-.32,.02]} rotation={[Math.PI/2,0,0]}><torusGeometry args={[.87,.09,12,64]}/><meshStandardMaterial color="#ffcc72" metalness={.8} roughness={.2}/></mesh>
 <mesh position={[0,-.9,.54]}><cylinderGeometry args={[.23,.23,.08,6]}/><meshStandardMaterial color="#ffcc72" metalness={.8}/></mesh>
 </group>
}
export default function SpaceScene({reducedMotion=false}:{reducedMotion?:boolean}){
 return <Canvas dpr={[1,1.5]} camera={{position:[0,.1,5.5],fov:43}} gl={{antialias:true,powerPreference:"high-performance"}} frameloop={reducedMotion?"demand":"always"}>
 <color attach="background" args={["#09041c"]}/><ambientLight intensity={1.8} color="#b89cff"/>
 <directionalLight position={[3,6,6]} intensity={3.5} color="#ffd38a"/>
 <pointLight position={[-3,1,2]} intensity={30} color="#9748ff"/>
 <Stars radius={90} depth={60} count={reducedMotion?500:1200} factor={3} fade speed={reducedMotion?0:.3}/>
 <mesh position={[-3.4,1,-8]}><sphereGeometry args={[2.4,40,32]}/><meshStandardMaterial color="#5c2e9b" emissive="#44227a" emissiveIntensity={.7}/></mesh>
 {reducedMotion?<Raccoon still/>:<Float speed={1.2} rotationIntensity={.1} floatIntensity={.3}><Raccoon still={false}/></Float>}
 <mesh position={[0,-2.55,0]}><cylinderGeometry args={[2.5,3.2,.6,48]}/><meshStandardMaterial color="#34234c"/></mesh>
 </Canvas>
}
