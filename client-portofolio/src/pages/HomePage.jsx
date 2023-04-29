
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/action/actionCreator";

function HomePage() {
 

  return (
    <div>
      <h1 className="text-3xl font-bold underline">HELLLO WORLD</h1>
    </div>
  );
}

export default HomePage;
