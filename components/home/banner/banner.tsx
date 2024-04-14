import { Button } from "@/components/ui/button";
import React from "react";

const Banner = () => {
  return (
    <div className="md:my-32 my-8">
      <div className="text-center">
        <h1 className="md:text-5xl text-2xl font-semibold md:leading-[60px] md:mx-80">
          The best way for content <br></br> creators <br></br>to track project goals. 
        </h1>
        <p className="md:text-xl mt-8 md:leading-8 md:mx-64">
          As makers we often work on multiple projects at similar timeline. MakersTracker helps you to efficiently track, manage and analyse all your project goals in one place.
        </p>
        <Button className="mt-8">Get Started For Free</Button>
      </div>
    </div>
  );
};

export default Banner;
