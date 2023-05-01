import { BASE_URL, FETCH_PROJECT,FETCH_DETAIL_PROJECT } from "./actionType";

export function  fetchProjectSucces (payload) {
  return {
    type: FETCH_PROJECT,
    payload,
  }
}
export function  fetchDetailNewsSucces (payload) {
  return {
    type: FETCH_DETAIL_PROJECT,
    payload,
  }
}

const Data = [
  {
    id: 1,
    name: "KaltimPost",
    img: "./src/assets/KaltimPost-User.png",
    description: "A News Portal website",
    link: "https://newspost-customer.web.app/",
    tags: ["React", "Redux", "TailwindCSS"],
  },
  {
    id: 2,
    name: "KaltimPost CMS",
    img: "./src/assets/KaltimPost-CMS.png",
    description: "This is KaltimPost CMS website",
    link: "https://newspost-45150.web.app/",
    tags: ["React", "Redux", "TailwindCSS"],
  },
  {
    id: 3,
    name: "My Exercise Gym",
    img: "./src/assets/MyGym-web.png",
    description: "A Gym website",
    link: "https://individual-project-f002a.web.app",
    tags: ["Vue", "Pinia", " bootstrap"],
  },
  {
    id: 4,
    name: "Rental Rooms",
    img: "./src/assets/Rental-Rooms.png",
    description: "A Gym website",
    link: "https://rentroom-3.web.app/",
    tags: ["Vue", "Pinia", " bootstrap"],
  },
  {
    id: 5,
    name: "Rental Rooms Challange",
    img: "./src/assets/Rental-Rooms-Challange.png",
    description: "A Gym website",
    link: " https://challange-2-rentroom.web.app/",
    tags: ["Vue", "Pinia", " bootstrap"],
  },
];

export function fetchData() {

  return async (dispatch,getState)=>{
    try {
      
      dispatch(fetchProjectSucces(Data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}

export function fetchDetailNews(id) {

  return async (dispatch,getState)=>{

    try {
     
      dispatch(fetchDetailNewsSucces(Data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}