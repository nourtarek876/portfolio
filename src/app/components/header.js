import Spline from "@splinetool/react-spline";

const Header = () => {
  return (
    <div className="flex justify-center header-nav">
      <div className=" flex text-header-nav">
        <div className="text-white flex justify-center items-center align-middle">
          <a href="#">About</a>
        </div>
        <div className="text-white flex justify-center items-center">
          <a href="#">Work</a>
        </div>
        <div className="header font-bold text-3xl flex justify-center items-center text-slate-100">
          <h1>Nour Elden</h1>
        </div>
        <div className="text-white flex justify-center items-center">
          <a href="#">CV</a>
        </div>
        <div className="text-white flex justify-center items-center contact-nav">
          <a href="#">Contact US</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
