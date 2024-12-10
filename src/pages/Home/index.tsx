import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <div
        className="bg-cover bg-center flex items-center justify-center text-center relative h-[65vh] xl:h-[70vh]"
        style={{
          backgroundImage: "url(/assets/happy-woman-with-smartphone.jpg)",
        }}
      >
        <div className="relative z-2">
          <h1 className="text-[50px]">Gallery App</h1>
          <p className="text-[25px]">Explore the contents</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
