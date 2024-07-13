import Spline from "@splinetool/react-spline";

const Header = () => {
  return (
    // <!-- component -->
    <nav class="bg-main shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* <!-- Logo --> */}
        <div class="text-text-hover md:order-1">
          {/* <!-- Heroicon - Chip Outline --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="square"
              stroke-linejoin="miter"
              stroke-width="3"
              d="M5 19V5l7 14V5"
            />
          </svg>
        </div>
        </div>
      </div>
  );
};

export default Header;
