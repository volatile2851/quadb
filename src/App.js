import {useEffect} from "react"
import './App.css';
import Card from "./components/card"
import {useGlobalState} from './GlobalContext'
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const{globalState, setGlobalState} = useGlobalState()
  
  async function getdata(){
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all", {method:"GET"})
    if(res.ok){
      return res.json()
    }else{
      const err = await res.json()
      const em = err.error;
      throw Error(em)
    }
  
  }
  useEffect(() => {
    async function fetchLoggedinuser() {
      try {
        const res = await getdata();
        setGlobalState(prevState => ({
          ...prevState,
          body: res,
        }));
        let arr = []
        localStorage.setItem('bookings', JSON.stringify(arr))
      } catch (error) {
        console.error(error);
      }
    }
    fetchLoggedinuser();
  }, []);
  return (
    <>
     <h1 className="h-app">Show Explorer</h1>
      <div className="cont">
        {
          globalState.body &&
          globalState.body.map((m, index)=>{
            
            return(
              <Card name = {m.show.name}  language = {m.show.language} score = {m.score} key = {index} genre = {m.show.genres} link = {m.show.image? m.show.image.medium : "https://www.allianceplast.com/wp-content/uploads/no-image-1024x1024.png"}clickfunc={()=> {
                setGlobalState(prevState => ({
                  ...prevState,
                  key: index+1
                }));
                navigate("/components")

              }}
              
              />
            )
          })
        }
      </div>
    </>
  );
}

export default App;
