import { useContext } from 'react'
import '../assets/css/hero.css'
import heroImg from '../assets/images/sakil.png'
import subHeroImg from '../assets/images/sub.png'
import { ModeContext } from './ModeProvider'
import MultipleItems from './MultipleItems'
import { ApiContext } from './ApiProvider'
const Home = () => {
  const [mode, setMode]=useContext(ModeContext);
  const [data,setData]=useContext(ApiContext);
  return (
 <>
 <div className="hero-con">
<div className="container  px-4 py-5 "> <div className="row flex-lg-row-reverse align-items-center g-5 py-5"> <div className="col-10 col-sm-8 col-lg-6">  </div> <div className="col-lg-6">     
   <img src={mode === "light" ? heroImg: subHeroImg } className='me-5 mb-3'></img>


  <h1 className="display-5 fw-bold  lh-1 mb-3 mb-5">Curated marketplace collections built for quality everyday living.</h1> 
  <p className="lead mb-4"> Carefully curated products from trusted sellers, designed to deliver quality, value, and a seamless shopping experience for everyday needs. </p> 
  <div className="d-grid gap-2 d-md-flex justify-content-md-start"> <button type="button" className="btn noney btn-lg px-4 me-md-2">Shop Now</button> <button type="button" className="btn loley ">$24.99</button> </div> </div> </div> </div>
 </div>
 
 <div style={{marginLeft:"160px",marginTop:"70px", marginBottom:"50px"}} className="slider" >
 <MultipleItems items={data} /> 
 
 </div>
 </>

 
  )
}

export default Home