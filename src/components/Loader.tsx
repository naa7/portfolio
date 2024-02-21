import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

const Loader = () => {
  const { progress } = useProgress();
  const [width, setWidth] = useState(0);
  const [barColor, setBarColor] = useState("#4285F4");

  useEffect(() => {
    setWidth(progress);
    updateBarColor(progress);
  }, [progress]);

  const updateBarColor = (progress: number) => {
    if (progress < 0.25) {
      setBarColor("#FF5722");
    } else if (progress >= 0.25 && progress < 0.75) {
      setBarColor("#FFEB3B");
    } else {
      setBarColor("#4CAF50");
    }
  };

  return (
    <Html center>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-64 h-4 bg-gray-200 rounded-lg">
          <div
            className="h-full rounded-lg"
            style={{ width: `${width}%`, backgroundColor: barColor }}
          ></div>
        </div>
        <p className="ml-2 text-white">{Math.round(progress)}%</p>
      </div>
    </Html>
  );
};

export default Loader;
