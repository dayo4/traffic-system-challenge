import Icon from "@mdi/react";
import { Button } from "@material-tailwind/react";
import { mdiShoePrint, mdiHandBackLeft } from "@mdi/js";
import { useState, useRef } from "react";
import TrafficLight from "./TrafficLight";

export default function TrafficSystem() {
  const [streetA, setStreetA] = useState(true); // Street A light
  const [streetB, setStreetB] = useState(false); // Street B light
  const [yellow, setYellow] = useState(false); // Yellow light
  const timer = useRef(null);

  const toggleLights = () => {
    setYellow(false);
    setStreetA(true);
    setStreetB(false);

    timer.current = setTimeout(() => {
      setYellow(true);
      setStreetA(false);
      setStreetB(true);

      timer.current = setTimeout(() => {
        setYellow(false);
        timer.current = setTimeout(() => {
          setYellow(true);
          timer.current = setTimeout(() => {
            toggleLights();
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  };

  const start = () => {
    clearTimeout(timer.current);
    toggleLights();
  };
  const reset = () => {
    clearTimeout(timer.current);
    setStreetA(true);
    setStreetB(false);
    setYellow(false);
  };

  return (
    <div>
      <div className="relative flex justify-center items-center h-[450px] w-full my-8 p-5 rounded-xl">
        {/* STREET A */}
        <div className="relative w-[100px] h-full bg-blue-gray-900 rounded-md">
          <span className="absolute -left-[80px] top-1 font-bold">
            Street A
          </span>

          {/* Traffic Component */}
          <TrafficLight
            status={streetA}
            yellow={yellow}
            className="top-2 left-[calc(50%-16px)]"
          ></TrafficLight>
          {/* Signs */}
          <Icon
            path={!streetA && !yellow ? mdiShoePrint : mdiHandBackLeft}
            size={0.8}
            className="absolute top-[120px] left-[calc(50%-12px)] text-white"
          ></Icon>

          {/* Traffic Component */}
          <TrafficLight
            status={streetA}
            yellow={yellow}
            className="bottom-2 left-[calc(50%-16px)]"
          ></TrafficLight>
          {/* Signs */}
          <Icon
            path={!streetA && !yellow ? mdiShoePrint : mdiHandBackLeft}
            size={0.8}
            className="absolute bottom-[120px] left-[calc(50%-12px)] text-white"
          ></Icon>
        </div>

        {/* STREET B */}
        <div className="flex justify-center items-center absolute h-[100px] w-[calc(100%-20px)] md:max-w-[450px] mx-2 bg-blue-gray-900 rounded-md">
          <span className="absolute -top-[30px] right-2 font-bold">
            Street B
          </span>

          {/* Traffic Component */}
          <TrafficLight
            status={streetB}
            yellow={yellow}
            className="top-0 left-[calc(50%-120px)]"
          ></TrafficLight>
          {/* Signs */}
          <Icon
            path={!streetB && !yellow ? mdiShoePrint : mdiHandBackLeft}
            size={0.8}
            className="absolute left-[145px] top-[calc(50%-12px)] text-white"
          ></Icon>

          {/* Traffic Component */}
          <TrafficLight
            status={streetB}
            yellow={yellow}
            className="top-0 right-[calc(50%-120px)]"
          ></TrafficLight>
          {/* Signs */}
          <Icon
            path={!streetB && !yellow ? mdiShoePrint : mdiHandBackLeft}
            size={0.8}
            className="absolute right-[145px] top-[calc(50%-12px)] text-white"
          ></Icon>

          {/* Control Buttons */}
          <div className="flex justify-center flex-wrap w-[100px]">
            <Button
              onClick={() => start()}
              variant="text"
              className="text-white bg-green-700 py-1 mb-2"
            >
              Start
            </Button>
            <Button
              onClick={() => reset()}
              variant="text"
              className="text-white bg-green-700 py-1"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
