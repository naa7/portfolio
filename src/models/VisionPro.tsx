import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
// @ts-ignore
import visionProScene from "../assets/3d/apple_vision_pro.glb";

type Props = {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  isRotating: boolean;
  setIsRotating: (value: boolean) => void;
  currentStage: number | null;
  setCurrentStage: (value: number | null) => void;
};

const VisionPro = ({
  isRotating,
  setIsRotating,
  currentStage,
  setCurrentStage,
  ...props
}: Props) => {
  const visionProRef = useRef<any>();
  const { nodes, materials } = useGLTF(visionProScene);
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const lastY = useRef(0);
  const rotationSpeedX = useRef(0);
  const rotationSpeedY = useRef(0);
  const dampingFactor = 0.95;
  const autoRotationSpeed = 0.0035;

  const handlePointerMoveX = (clientX: number) => {
    const delta = (clientX - lastX.current) / viewport.width;
    visionProRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeedX.current = delta * 0.01 * Math.PI;
  };

  const handlePointerMoveY = (clientY: number) => {
    const delta = (clientY - lastY.current) / viewport.height;
    visionProRef.current.rotation.x += delta * 0.01 * Math.PI;
    lastY.current = clientY;
    rotationSpeedY.current = delta * 0.01 * Math.PI;
  };

  const handlePointerDown = (e: PointerEvent | TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    let clientX;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      lastY.current = e.touches[0].clientY;
    } else {
      lastX.current = e.clientX;
      lastY.current = e.clientY;
    }
  };

  const handlePointerUp = (e: PointerEvent | TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e: PointerEvent | TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      if ("touches" in e) {
        handlePointerMoveX(e.touches[0].clientX);
        handlePointerMoveY(e.touches[0].clientY);
      } else {
        handlePointerMoveX(e.clientX);
        handlePointerMoveY(e.clientY);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      visionProRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      visionProRef.current.rotation.y -= 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") setIsRotating(false);
  };

  useFrame(() => {
    if (!isRotating) {
      visionProRef.current.rotation.y += autoRotationSpeed;
      rotationSpeedX.current *= dampingFactor;
      if (Math.abs(rotationSpeedX.current) < 0.0005) {
        rotationSpeedX.current = 0;
      }
      visionProRef.current.rotation.y += rotationSpeedX.current;
    } else {
      visionProRef.current.rotation.y += rotationSpeedX.current;
      const rotation = visionProRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.0 && normalizedRotation <= 2.4:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    gl,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyDown,
    handleKeyUp,
  ]);

  return (
    <a.group {...props} ref={visionProRef}>
      <group scale={2} position={[0, 6, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NCTuWVhPfXbauhX.geometry}
          material={materials.cfENkBJbuidhJQR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MNXHJkKVjmbUNKU.geometry}
          material={materials.oTqiLbrwcjsRgMt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dbHbxcqmrAncXcC.geometry}
          material={materials.VphdCyWbkVqOTZM}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RMjnjXyMgoTxvNO.geometry}
          material={materials.vooHjZuayuJGiMQ}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PmnjxmiXJTgjNWb.geometry}
          material={materials.qDOcIjVpElQVnfu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.maRjJfyAOWUFfqI.geometry}
          material={materials.ZOxfklNhssATaVX}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.yHomCHSOPycwYvw.geometry}
          material={materials.MQCEVrylLIUQrVK}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ZpISlXViQsOjnoI.geometry}
          material={materials.AAfeebOMlIFREnV}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nSxxllOTLoQHyQZ.geometry}
          material={materials.AAfeebOMlIFREnV}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RfUlkBWLMcnnjDZ.geometry}
          material={materials.euiQmuWDHAWaTrM}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.QJrVTzJCWMTTMlr.geometry}
          material={materials.WSSwRvibmqaLYZi}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iSAWOSRcnEglMgD.geometry}
          material={materials.qJCgguKxFcHIxWa}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cZcyOzYlhNSplIL.geometry}
          material={materials.YfKnpdtpUYsluRm}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EbmJgvvXipWjEMi.geometry}
          material={materials.BCKXYWKgOWAMzzp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.xoJVrtkFfggFByx.geometry}
          material={materials.XKlUGvPEIYYLEPM}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NMVTgvZNMHRVFee.geometry}
          material={materials.ucekphvVRyoLWgE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.UDHdONgBtzYRwyk.geometry}
          material={materials.jOkVLpNIDGFLUJe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KCuSLrGBXunxbKi.geometry}
          material={materials.ucekphvVRyoLWgE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OuafqOjNBHbOxeM.geometry}
          material={materials.BCKXYWKgOWAMzzp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.onCnMAgiUfYghCa.geometry}
          material={materials.eFnCMDGzSpQJEdf}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DRUMenkquqOqPBB.geometry}
          material={materials.schaJKIVUmSWLQA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fYsQHZAKKxrBUHu.geometry}
          material={materials.uhSjoqjjxLxIJEp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bRkfhfzPFhAcloN.geometry}
          material={materials.xjMjLzeClXxPZiL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iQvheLuzdQkuSeJ.geometry}
          material={materials.aAXWAJGJAtUuAVC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.puLESYTHooXoUCA.geometry}
          material={materials.pqksKtWbSqRTkqv}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.XHIStvRRJuEGVeQ.geometry}
          material={materials.uhSjoqjjxLxIJEp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SxaGKaPygGiLcmN.geometry}
          material={materials.movFhSaNkSrNKyM}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.qKXRmmKkymmLTYt.geometry}
          material={materials.aAXWAJGJAtUuAVC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bJCbNxhrcmEdcCM.geometry}
          material={materials.cgOiivtAxUoeEfW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BAxMEALGGWqitaP.geometry}
          material={materials.aAXWAJGJAtUuAVC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HNXdaurOJgVpqwO.geometry}
          material={materials.uhSjoqjjxLxIJEp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cLqNTiqGrfBAsrs.geometry}
          material={materials.movFhSaNkSrNKyM}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wFzJvNXcWBRHhdQ.geometry}
          material={materials.xjMjLzeClXxPZiL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DAQxQnEgVbUVChn.geometry}
          material={materials.aAXWAJGJAtUuAVC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EnVjHvEbvGptqIc.geometry}
          material={materials.pqksKtWbSqRTkqv}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MJokNNForrVoctQ.geometry}
          material={materials.uhSjoqjjxLxIJEp}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.uHvofqgpMqlssnA.geometry}
          material={materials.lMzofmcJBoknbil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dmvkHjlAcBilttn.geometry}
          material={materials.lMzofmcJBoknbil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.UtxqCQdxFKUWTRG.geometry}
          material={materials.JMJEizFSpcnBLBu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iQgbGlzLYxmnkEJ.geometry}
          material={materials.lMzofmcJBoknbil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LucfwAzaOiBHGBs.geometry}
          material={materials.MyWTkmNpPcgwehb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tJsALhsZGYXQBFg.geometry}
          material={materials.IyRtefachzKUcBb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vjEAQNHpUyNbGVA.geometry}
          material={materials.dULQkYmOHsuNGwk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iFNIuSzIVSntlTY.geometry}
          material={materials.kgpBHanvuTGSAYr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IsQUyjZKDNlKKvu.geometry}
          material={materials.qDOcIjVpElQVnfu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RFwGWThZbNKmLgt.geometry}
          material={materials.gMuXNdoZqzJLAvR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lWAKZCzBqgMknbU.geometry}
          material={materials.IyRtefachzKUcBb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.VykuVRzGucARcnD.geometry}
          material={materials.lMzofmcJBoknbil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jNQJlphSrIRrBKf.geometry}
          material={materials.JMJEizFSpcnBLBu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.XXvXucwLAbdmpHX.geometry}
          material={materials.lMzofmcJBoknbil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aXNMDmcsLKgffRv.geometry}
          material={materials.MyWTkmNpPcgwehb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nWGkHaZOXZFJZKv.geometry}
          material={materials.dULQkYmOHsuNGwk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pOJkkptsLytmtVv.geometry}
          material={materials.kgpBHanvuTGSAYr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.xyVfpiYtqUaEsxm.geometry}
          material={materials.qDOcIjVpElQVnfu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bPmBAuLIgCpxfIo.geometry}
          material={materials.ILBWplikIEjpQFu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GkNcoDHRYmNOzNo.geometry}
          material={materials.ILBWplikIEjpQFu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.XRIeMaUGHSkJQqD.geometry}
          material={materials.JEqrlnZSfFxzXyR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOsOutQtwlhQDkr.geometry}
          material={materials.axobLmsfiYAnCsP}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jrDatUzPyHNlXIy.geometry}
          material={materials.ANqxLmGmmZDkKZr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.yaqXFfePSuyasqv.geometry}
          material={materials.JFsLNaKevrqxAHS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tyXDSqxGNFRcIOf.geometry}
          material={materials.JFsLNaKevrqxAHS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TQYwHoYhoHtCqfY.geometry}
          material={materials.JkJKKnxTIntgQHC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KGTPsmZXiKwUxBA.geometry}
          material={materials.JFsLNaKevrqxAHS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rFfmCkJAIfvvcoV.geometry}
          material={materials.JkJKKnxTIntgQHC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.kfFsvEDJevOTjOb.geometry}
          material={materials.CLxgtuDKMkHlfIs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.qjsWGaEQfNknQeo.geometry}
          material={materials.wHLUdvjLSAdAzpD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mgkXJLMmHQwAPUS.geometry}
          material={materials.QTWCiCCGMSxWgbc}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sFjRDkvMUTeoufu.geometry}
          material={materials.EgczyvedEqzqMFX}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GTNgXHvClILzWkZ.geometry}
          material={materials.wHLUdvjLSAdAzpD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.VJHFxSHDwMHWYbD.geometry}
          material={materials.JFsLNaKevrqxAHS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NFMjtFHlCmDDDye.geometry}
          material={materials.fwZBQTUFaZPSpvr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HvmhNBkcFNCkETn.geometry}
          material={materials.fwZBQTUFaZPSpvr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ljQqiMAOjJnstlz.geometry}
          material={materials.fwZBQTUFaZPSpvr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.UfCFTvPHobNYNuw.geometry}
          material={materials.fwZBQTUFaZPSpvr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RCtkcivgrajBiil.geometry}
          material={materials.gSPFLmkAjqDsDpN}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FtUZpgMrQeBuRwX.geometry}
          material={materials.JFsLNaKevrqxAHS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CjrSGiCPDxNIlLL.geometry}
          material={materials.fwZBQTUFaZPSpvr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cSSDqdAfWghogrf.geometry}
          material={materials.TOXCTGGcpkubhJV}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wAlSALURSIywUpI.geometry}
          material={materials.fwZBQTUFaZPSpvr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.huiqOZNSnkdxFNi.geometry}
          material={materials.hOQFVPUkStlnLZL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MlrGbWjzMhpBLgs.geometry}
          material={materials.JFsLNaKevrqxAHS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nZNcztTHfduCKSt.geometry}
          material={materials.rtSfIyWixTDVpUY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lEnYifWpSCJrErk.geometry}
          material={materials.pQhxnNuPXoHfCWe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.izLdmgMAtFNCERj.geometry}
          material={materials.bxAqWBgABbIjzMY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cSEmYvJalQNIQhs.geometry}
          material={materials.jsQvjteHecACAeR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.YbRoDtvjJInZyJV.geometry}
          material={materials.pQhxnNuPXoHfCWe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jWuDbHTaFBaDrrZ.geometry}
          material={materials.bxAqWBgABbIjzMY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FjuCyHASTTcZWMa.geometry}
          material={materials.jsQvjteHecACAeR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.XWpivUINjhZkYcr.geometry}
          material={materials.QTWCiCCGMSxWgbc}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ZfIqyVMdJBwdcCh.geometry}
          material={materials.QTWCiCCGMSxWgbc}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.QWWffXFZwcUtXBq.geometry}
          material={materials.EgczyvedEqzqMFX}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nFJQEQmmoUGBnDJ.geometry}
          material={materials.JFsLNaKevrqxAHS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.urVwmigsGssgzve.geometry}
          material={materials.JFsLNaKevrqxAHS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dxoUetmUtIBIVWe.geometry}
          material={materials.QTWCiCCGMSxWgbc}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.giroUgjRKWjGLZl.geometry}
          material={materials.EgczyvedEqzqMFX}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tCtMfEJwdLuvQGF.geometry}
          material={materials.KEnlbNmQcpvdozb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.yAsoSSImdAWHEeb.geometry}
          material={materials.KEnlbNmQcpvdozb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.esWBIEGuqiSJTxI.geometry}
          material={materials.KEnlbNmQcpvdozb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AoltIyCMGTXxbug.geometry}
          material={materials.KEnlbNmQcpvdozb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dXHoHaAUioufqIg.geometry}
          material={materials.ZwfmonZpLDaDbGy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SlAbfqkVZCCQOaf.geometry}
          material={materials.ZwfmonZpLDaDbGy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.qczdsxpvVWujaAs.geometry}
          material={materials.ZwfmonZpLDaDbGy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HBgvryqiUSEQVsz.geometry}
          material={materials.ZwfmonZpLDaDbGy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RVbVFOYkEoTWZJR.geometry}
          material={materials.lciUnRZYuzqSpWr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LqHGbWICfVuDiVa.geometry}
          material={materials.dvmeoUrdxtrSUKH}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.evAvupWGSpKoduy.geometry}
          material={materials.KEnlbNmQcpvdozb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tfoIbGUlplBnnGI.geometry}
          material={materials.KEnlbNmQcpvdozb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KbIuewYygqAXAOJ.geometry}
          material={materials.KEnlbNmQcpvdozb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.STnvEOzUJTbYYoX.geometry}
          material={materials.KEnlbNmQcpvdozb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pVZQtUhwcfzpspL.geometry}
          material={materials.ZwfmonZpLDaDbGy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ISzOYZOQvVfmQYC.geometry}
          material={materials.ZwfmonZpLDaDbGy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.yPLdQhxBlbsTdLZ.geometry}
          material={materials.ZwfmonZpLDaDbGy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KsxOHCkvAaPsioP.geometry}
          material={materials.ZwfmonZpLDaDbGy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GZLqLapefOYGUhv.geometry}
          material={materials.lciUnRZYuzqSpWr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY.geometry}
          material={materials.dvmeoUrdxtrSUKH}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NzfkbcPdvgFzApF.geometry}
          material={materials.KEnlbNmQcpvdozb}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WnfDwdqJiyacwNu.geometry}
          material={materials.JFsLNaKevrqxAHS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ulUHXepohBRrBai.geometry}
          material={materials.fmmGyvGJVnVViXe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bvBVGjqyifVGqeO.geometry}
          material={materials.OthgPpktWeqGgKp}
        />
      </group>
    </a.group>
  );
};

export default VisionPro;
