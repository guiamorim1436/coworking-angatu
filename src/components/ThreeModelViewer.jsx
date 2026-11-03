import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw } from 'lucide-react';

export default function ThreeModelViewer() {
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 420;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFAF8F5);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(12, 10, 14);
    camera.lookAt(0, 1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight.position.set(15, 20, 12);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.001;
    scene.add(dirLight);

    const fillLight = new THREE.PointLight(0x88B04B, 0.6, 20);
    fillLight.position.set(-6, 8, -4);
    scene.add(fillLight);

    // Materials
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xF0ECE1, roughness: 0.6 });
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xE5EDE7, roughness: 0.5 });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xE0F2FE,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      transmission: 0.8,
      thickness: 0.5
    });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0xC48B54, roughness: 0.4 });
    const greenMat = new THREE.MeshStandardMaterial({ color: 0x4A7C59, roughness: 0.5 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1E3F35, roughness: 0.3 });
    const leatherMat = new THREE.MeshStandardMaterial({ color: 0x2A573F, roughness: 0.7 });

    // Group for room assembly
    const roomGroup = new THREE.Group();

    // 1. Floor (Consultório 25m²)
    const floorGeo = new THREE.BoxGeometry(10, 0.3, 8);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -0.15;
    floor.receiveShadow = true;
    roomGroup.add(floor);

    // 2. Back Wall with Safari Accent
    const backWallGeo = new THREE.BoxGeometry(10, 4, 0.3);
    const backWall = new THREE.Mesh(backWallGeo, wallMat);
    backWall.position.set(0, 2, -4);
    backWall.receiveShadow = true;
    roomGroup.add(backWall);

    // Safari decorative wood slatted panel
    const slatGeo = new THREE.BoxGeometry(0.12, 3.4, 0.08);
    for (let i = -4.2; i <= -1.8; i += 0.3) {
      const slat = new THREE.Mesh(slatGeo, woodMat);
      slat.position.set(i, 2, -3.8);
      slat.castShadow = true;
      roomGroup.add(slat);
    }

    // 3. Side Wall
    const sideWallGeo = new THREE.BoxGeometry(0.3, 4, 8);
    const sideWall = new THREE.Mesh(sideWallGeo, wallMat);
    sideWall.position.set(-5, 2, 0);
    sideWall.receiveShadow = true;
    roomGroup.add(sideWall);

    // 4. Front Glass Wall
    const glassWallGeo = new THREE.BoxGeometry(10, 3.8, 0.1);
    const glassWall = new THREE.Mesh(glassWallGeo, glassMat);
    glassWall.position.set(0, 1.9, 4);
    roomGroup.add(glassWall);

    // 5. Doctor Desk (Mesa ampla com acabamento madeira)
    const deskTopGeo = new THREE.BoxGeometry(3.2, 0.12, 1.6);
    const deskTop = new THREE.Mesh(deskTopGeo, woodMat);
    deskTop.position.set(1.5, 1.5, 0);
    deskTop.castShadow = true;
    roomGroup.add(deskTop);

    // Desk legs (Dark Metal)
    const legGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.5, 12);
    [[-1.4, -0.6], [1.4, -0.6], [-1.4, 0.6], [1.4, 0.6]].forEach(([ox, oz]) => {
      const leg = new THREE.Mesh(legGeo, darkMat);
      leg.position.set(1.5 + ox, 0.75, oz);
      leg.castShadow = true;
      roomGroup.add(leg);
    });

    // Laptop on desk
    const laptopGeo = new THREE.BoxGeometry(0.6, 0.04, 0.45);
    const laptop = new THREE.Mesh(laptopGeo, darkMat);
    laptop.position.set(1.5, 1.58, -0.1);
    roomGroup.add(laptop);

    // 6. Doctor Ergonomic Chair (Flexform)
    const chairSeatGeo = new THREE.BoxGeometry(0.8, 0.1, 0.8);
    const chairSeat = new THREE.Mesh(chairSeatGeo, darkMat);
    chairSeat.position.set(1.5, 0.9, -1.1);
    chairSeat.castShadow = true;
    roomGroup.add(chairSeat);

    const chairBackGeo = new THREE.BoxGeometry(0.75, 1, 0.1);
    const chairBack = new THREE.Mesh(chairBackGeo, darkMat);
    chairBack.position.set(1.5, 1.45, -1.45);
    chairBack.castShadow = true;
    roomGroup.add(chairBack);

    // 7. Pediatric Examination Couch (Maca Pediátrica)
    const bedGeo = new THREE.BoxGeometry(2.4, 0.35, 1.1);
    const bed = new THREE.Mesh(bedGeo, leatherMat);
    bed.position.set(-3.2, 1.2, 1.2);
    bed.castShadow = true;
    roomGroup.add(bed);

    const bedLegGeo = new THREE.BoxGeometry(2.2, 1.0, 0.95);
    const bedLeg = new THREE.Mesh(bedLegGeo, wallMat);
    bedLeg.position.set(-3.2, 0.5, 1.2);
    bedLeg.castShadow = true;
    roomGroup.add(bedLeg);

    // 8. Baby Scale on Stand (Balança Pediátrica)
    const scaleStandGeo = new THREE.BoxGeometry(0.8, 1.2, 0.7);
    const scaleStand = new THREE.Mesh(scaleStandGeo, wallMat);
    scaleStand.position.set(-3.2, 0.6, -1.8);
    scaleStand.castShadow = true;
    roomGroup.add(scaleStand);

    const scalePanGeo = new THREE.CylinderGeometry(0.35, 0.3, 0.08, 16);
    const scalePan = new THREE.Mesh(scalePanGeo, darkMat);
    scalePan.position.set(-3.2, 1.25, -1.8);
    roomGroup.add(scalePan);

    // 9. Smart TV on Wall
    const tvGeo = new THREE.BoxGeometry(1.8, 1.1, 0.05);
    const tv = new THREE.Mesh(tvGeo, darkMat);
    tv.position.set(1.5, 2.5, -3.8);
    roomGroup.add(tv);

    // 10. Pediatric Plant / Nature Touch
    const potGeo = new THREE.CylinderGeometry(0.35, 0.25, 0.6, 16);
    const pot = new THREE.Mesh(potGeo, woodMat);
    pot.position.set(-4.2, 0.3, -3.2);
    roomGroup.add(pot);

    const plantLeavesGeo = new THREE.SphereGeometry(0.5, 12, 12);
    const plantLeaves = new THREE.Mesh(plantLeavesGeo, greenMat);
    plantLeaves.position.set(-4.2, 0.85, -3.2);
    plantLeaves.scale.set(1, 1.3, 1);
    plantLeaves.castShadow = true;
    roomGroup.add(plantLeaves);

    scene.add(roomGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 1.2;
      mouseY = y * 0.5;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth camera sway around isometric view
      targetRotationY += (mouseX - targetRotationY) * 0.05;
      targetRotationX += (mouseY - targetRotationX) * 0.05;

      roomGroup.rotation.y = targetRotationY * 0.8;
      roomGroup.rotation.x = targetRotationX * 0.4;

      // Subtle breathing float
      roomGroup.position.y = Math.sin(Date.now() * 0.0015) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 420;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full h-[420px] rounded-3xl bg-[#FAF8F5] border border-[#E2DBCF] overflow-hidden shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Badges */}
      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E2DBCF] shadow-sm pointer-events-none">
        <Eye className="w-4 h-4 text-[#4A7C59]" />
        <span className="text-xs font-bold text-[#1E3F35]">
          Maquete 3D Interativa • Consultório 25m²
        </span>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-[#1E3F35]/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium shadow-md pointer-events-none">
        <RotateCw className="w-3.5 h-3.5 text-[#C48B54] animate-spin" style={{ animationDuration: '6s' }} />
        <span>Mova o mouse para orbitar o ambiente</span>
      </div>
    </div>
  );
}
