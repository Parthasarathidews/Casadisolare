import CustomImage from "@assets/components/CustomImage";
import rightArrow from "@assets/images/icons/right-arrow.png";
import logo from "@assets/images/svgexport-2.svg";
const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar fixed w-full top-0 z-[100] px-[2%] flex justify-between py-[1%]">
      <div className="w-[30%] flex items-center gap-[2rem]">
        <button
          className="text-(--navMenu) text-[1.4rem] font-medium"
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>
        <button
          className="text-(--navMenu)  text-[1.4rem] font-medium"
          onClick={() => scrollToSection("hero")}
        >
          About
        </button>
        <button
          className="text-(--navMenu)  text-[1.4rem] font-medium"
          onClick={() => scrollToSection("services")}
        >
          Services
        </button>
        <button
          className="text-(--navMenu)  text-[1.4rem] font-medium"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </div>
      <h2 className="w-[30%] flex items-center justify-center">
        <div className="brightness-[100] w-[18rem]">
          <CustomImage src={logo} alt="logo" />
        </div>
      </h2>
      <div className="w-[30%] flex  items-center justify-end">
        <button
          type="button"
          className="rounded-full bg-white px-8 text-[1.4rem] py-[1rem] font-medium"
        >
          Purchase Solare
        </button>
        <div className="w-[4rem] h-[4rem] flex items-center justify-center bg-[#FEB445] rounded-[100%]">
          <div className="w-[2rem] h-[2rem]">
            <CustomImage src={rightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
