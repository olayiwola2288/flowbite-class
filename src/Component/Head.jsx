import {  Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img
            src="https://www.google.com/search?q=flowbite&tbm=isch&chips=q:flowbite,g_1:logo:-L1w-7We_cw%3D&rlz=1C1CHBD_enNG1080NG1080&hl=en&sa=X&ved=2ahUKEwj5ytvw5ayCAxVeuCcCHeOLBjwQ4lYoAHoECAEQLg&biw=1519&bih=703"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default App;
