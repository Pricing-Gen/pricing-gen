import { Button } from "@/components/ui/button";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-violet-800">
      <div className="container mx-auto ">
        <div className="flex justify-between py-4 text-white">
          <div className="text-2xl">Pricing Gen</div>
          <div className="flex">
            <div className="mr-2">
              <Button>Login</Button>
            </div>
            <div>
              <Button>SignUp</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
