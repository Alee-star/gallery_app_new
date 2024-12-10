import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <div
        className="relative flex items-center justify-center text-center bg-cover bg-center h-65 xl:h-70"
        style={{
          backgroundImage: "url(/assets/happy-woman-with-smartphone.jpg)",
        }}
      >
        <div className="relative z-2">
          <h1 className="text-5xl">Gallery App</h1>
          <p className="text-2xl">Explore the contents</p>
        </div>
      </div>
    </div>
  );
};

export default Home;