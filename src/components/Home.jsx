import { LuArrowRightCircle } from "react-icons/lu";
function Home() {
  return (
    <div>
      <div className="text-white mt-32  px-3 flex flex-col gap-3">
        <div>
          <p className=" text-7xl tracking-wider">The Beauty of</p>
          <p className=" text-7xl tracking-wide">Architectural Design</p>
        </div>
        <div className="flex items-center gap-2 text-lg  px-3">
          <button className="">Projects</button> <span><LuArrowRightCircle /></span>
        </div>
        <div className="w-96">
          <p className="tracking-wide">Discover the beauty of architectural design in our projects. From residential havens to commercial landmarks, each design showcases sophistication, functionality, and timeless elegance.</p>
        </div>
      </div>
    </div>
  )
}

export default Home