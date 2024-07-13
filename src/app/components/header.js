import Spline from "@splinetool/react-spline";

const Header = () => {
  return (
    <div className="flex justify-around header-nav">
      <div className="header font-bold text-3xl flex justify-center items-center text-slate-100">
        <a href="/">
          <h1>Nour Elden</h1>
        </a>
      </div>
      <div className=" flex text-header-nav text-white">
        <div className=" flex justify-center items-center">
          <a href="/work">Work</a>
        </div>
        <div className="text-white flex justify-center items-center contact-nav">
          <a href="/Contact">Contact ME</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
