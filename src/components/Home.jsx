import { LuArrowRightCircle } from "react-icons/lu";
function Home() {
  return (
    <div>
      <div className="text-white mt-32  px-4 flex flex-col gap-3">
        <div>
          <p className="text-4xl sm:text-7xl  grad   font-semibold">The Beauty of</p>
          <p className="text-4xl sm:text-7xl  grad   font-semibold">Architectural Design</p>
        </div>
        <div className="flex items-center gap-2 text-lg  px-3">
          <button>Projects</button> <span><LuArrowRightCircle /></span>
        </div>
        <div className="w-96">
          <p className="tracking-wide grad2">Discover the beauty of architectural design in our projects. From residential havens to commercial landmarks, each design showcases sophistication, functionality, and timeless elegance.</p>
        </div>
      </div>
    </div>
  )
}

export default Home