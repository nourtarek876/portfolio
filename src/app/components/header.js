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
        <div class="text-text-color order-3 w-full md:w-auto md:order-2">
          <ul class="flex font-semibold justify-between">
            {/* <!-- Active Link = text-indigo-500
                    Inactive Link = hover:text-indigo-500 --> */}
            <li class="md:px-4 md:py-2 hover:text-text-hover">
              <a href="/">Home</a>
            </li>
            <li class="md:px-4 md:py-2 hover:text-text-hover">
              <a href="/work">Work</a>
            </li>
            <li class="md:px-4 md:py-2 hover:text-text-hover">
              <a href="/cv">CV</a>
            </li>
            <li class="md:px-4 md:py-2 hover:text-text-hover">
              <a href="/cotact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
