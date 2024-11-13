import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from '../GlobalProvider';

const Navigation = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(GlobalContext);

  const handleLogout = () => {
    // Clear user data from localStorage and update authentication status
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);

    // Display toast message
    toast.success('Logout successful.');
  };

  return (
    <Navbar>
    <NavbarBrand>
      <p className="font-bold text-inherit text-xl lg:text-2xl">
        <span className="text-primary">e</span>
        <span className="text-secondary">S</span>
        <span className="text-tertiary">hiksha</span>
      </p>
    </NavbarBrand>
  
    <NavbarContent className="sm:flex sm:gap-4 sm:justify-center">
      <NavbarItem>
        <Link to="/" color="foreground">Home</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to="/about" color="foreground">About</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to="/service" color="foreground">Services</Link>
      </NavbarItem>
      <NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <Link to="/course" color="foreground">Courses</Link>
          </DropdownTrigger>
          <DropdownMenu aria-label="Courses" variant="flat">
            {/* Add your dropdown items here */}
            <DropdownItem>
              <Link to="/course/Placement">Placement</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/course/Engineering">Engineering</Link>
            </DropdownItem>
            {/* Add more courses as needed */}
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
      <NavbarItem>
        <Link to="/Mentors" color="foreground">One to One Mentorship</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to="/Content" color="foreground">Study Materials</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to="/loan" color="foreground">Scholarship</Link>
      </NavbarItem>
    </NavbarContent>
  
    <NavbarContent as="div" justify="end">
      {isLoggedIn ? (
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              isBordered
              className="transition-transform"
              color="secondary"
              name={JSON.parse(localStorage.getItem('user'))?.firstName?.charAt(0)}
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{JSON.parse(localStorage.getItem('user'))?.email}</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <>
          <NavbarItem>
            <Link to="/signin" color="foreground">Sign up</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/login" color="foreground">Login</Link>
          </NavbarItem>
        </>
      )}
    </NavbarContent>
    <ToastContainer />
  </Navbar>
  
  );
};

export default Navigation;
