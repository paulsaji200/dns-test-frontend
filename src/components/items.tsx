import LeftComponent from "./leftMain";
import RightComponent from "./rightMain";
import CenterComp from "./centerComp";
const MainMenu = () => {
  return (
    <div
      className="relative w-full min-h-[25vh] text-white flex justify-center items-center" 
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dasqrolmh/image/upload/v1742906049/f37f4a258b3eea846bf145fb95b71dfd_bgxnl0.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

    
      <div className="relative z-10 w-full flex flex-col md:flex-row items-stretch min-h-[25vh]"> {/* 🔻 Adjusted */}
       
        <div className="hidden md:flex w-[15%]">
          <LeftComponent />
        </div>

    
        <div className="w-full md:w-[70%] flex justify-center items-center">
          <CenterComp />
        </div>

       
        <div className="hidden md:flex w-[15%]">
          <RightComponent />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
