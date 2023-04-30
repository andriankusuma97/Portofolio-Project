
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/action/actionCreator";

function HomePage() {
 

  return (
    <div>
      <h1 className="text-3xl font-bold underline">HELLLO WORLD</h1>
      <img src="https://png.pngtree.com/png-clipart/20230102/original/pngtree-3d-boy-head-portrait-png-image_8855190.png" alt="" height={300} width={300}/>
    </div>
  );
}

export default HomePage;
