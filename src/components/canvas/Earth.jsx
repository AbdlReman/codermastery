import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Define a functional component named Earth
const Earth = () => {
  // useGLTF is a hook to load a GLTF model (in this case, "./planet/scene.gltf") and returns its contents
  const earth = useGLTF("./planet/scene.gltf");

  // Return a primitive component with the loaded 3D model, scaled, positioned, and rotated
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// Define a functional component named EarthCanvas
const EarthCanvas = () => {
  // Return a Canvas component from @react-three/fiber to render 3D content
  return (
    <Canvas
      shadows // Enable shadows in the 3D scene
      frameloop="demand" // Specify the frame loop mode as 'demand'
      dpr={[1, 2]} // Set the device pixel ratio range
      gl={{ preserveDrawingBuffer: true }} // Configure the WebGL context options
      camera={{
        // Define camera settings
        fov: 45, // Field of view
        near: 0.1, // Near clipping plane
        far: 200, // Far clipping plane
        position: [-4, 3, 6], // Camera position
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {" "}
        {/* Use Suspense for async loading with a fallback component */}
        <OrbitControls
          autoRotate // Enable auto-rotation of the scene
          enableZoom={false} // Disable zooming via mouse/touch
          maxPolarAngle={Math.PI / 2} // Set maximum polar angle for OrbitControls
          minPolarAngle={Math.PI / 2} // Set minimum polar angle for OrbitControls
        />
        <Earth /> {/* */}
        <Preload all />{" "}
        {/* Render the Earth component defined above Preload all assets/components inside the Suspense */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas; // Export the EarthCanvas component
