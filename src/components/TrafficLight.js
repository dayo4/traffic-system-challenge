export default function TrafficLight({ status, yellow, className, children }) {

  return (
    <section className={`${className} absolute bg-yellow-600 p-1.5 rounded-xl`}>
      {/* Red Light */}
      <div
        className={`${
          !status && !yellow ? "bg-red-700 " : "bg-yellow-700 "
        } w-6 h-6  rounded-full mb-2`}
      ></div>

      {/* Orange Light */}
      <div
        className={`${
          yellow ? "bg-orange-700 " : "bg-yellow-700 "
        } w-6 h-6  rounded-full mb-2`}
      ></div>

      {/* Orange Light */}
      <div
        className={`${
          status && !yellow ? "bg-green-700 " : "bg-yellow-700 "
        } w-6 h-6  rounded-full`}
      ></div>
      {children}
    </section>
  );
}
