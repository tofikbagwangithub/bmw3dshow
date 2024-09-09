import {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";  

function Model(props){
  const {scene} = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props}/>
}

function App() {
  return (
    <h1> 3-D BMW CAR SHOWCASE
    <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{"position": "absolute"}}>
      <color attach="background" args={["#101010"]}/> 
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
      <Stage environment={"sunset"}> 
        <Model scale={0.1}/>
        </Stage> 
      </PresentationControls>
    </Canvas> </h1>
  );
}

export default App;
