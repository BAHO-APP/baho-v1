import HomeDiv from "./components/Home/home";
import Team from "./components/team/team"
import {Footer} from "./components/footer/footer"
import Product from "./components/product/product";
import Mission from "./components/mission/mission";



export default function Home() {
  return (
    <div className=" h-[100vh] ">
      <video
      src="/butterfly.mp4"
          className=" vid "
          autoPlay
          loop
          muted
        />
        
        <div className="content">
        <HomeDiv />
          <Mission></Mission> 
           <Product />
          <Team></Team>
          <Footer></Footer>
        </div>
    
    </div>
   

  );
}
