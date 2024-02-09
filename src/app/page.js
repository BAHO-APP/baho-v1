'use client'
import Image from 'next/image'
import HomeDiv from './components/Home/home'
import Mission from './components/mission/mission'
import Product from './components/product/product'
import Team from './components/team/team'
import { Footer } from './components/footer/footer'
import styles from './styles/HomeDiv.module.css'; // Import the styles

export default function Home() {
  return (
    <main className=' overflow-x-hidden bg-black '>
 <div className="relative">
      <video
        className="w-full h-full fixed object-cover  top-0 left-0 z-0"
        autoPlay
        loop
        muted
      >
        <source src="/butterfly.mp4" type="video/mp4" />
  
      </video>
      <div className="relative z-10">
      
  <HomeDiv/>
<Mission></Mission>
<Product/>
<Team></Team>
<Footer></Footer>
      </div>
    </div>
     <div >



     </div>
    </main>
  )
}
