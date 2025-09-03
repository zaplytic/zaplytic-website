import Idiots from "@/assets/three_idiots.png"

export default function Hero() {
  return (
    <>
      <div className="w-3/4 mx-auto p-4 mx-auto my-4 grid grid-cols-2">
        <div className="w-full">
          <h1 className="mt-1 font-bold fs--2xl">Zaplytic: The Modern Day Solution</h1>
          <p>Work like professionals with own website and mobile application.</p>
          <a className="my-4 cursor-pointer text-white" href="#works"><button className="my-4 cursor-pointer bg-blue-500 hover:bg-blue-700 font-bold p-2 rounded" type="button">Our Works</button></a>
        </div>
        <img className="w-1/2 rounded justify-self-center" src={Idiots} alt="Company Founders"></img>
      </div>
    </>
  );
}
