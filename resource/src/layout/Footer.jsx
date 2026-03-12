import { useContext } from 'react'
import '../assets/css/footer.css'
import { ModeContext } from '../pages/ModeProvider'

const Footer = () => {
  const[mode]=useContext(ModeContext);
  return (
    <>
<div class="container-fluid foot "> <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top"> <div class="col mb-3"> <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap"> 

                          <img style={{   height: "30px",
            width: "170px"}} src={mode === "light"
             ? "https://klbtheme.com/supgor/wp-content/uploads/2025/10/logo-dark-2.png":"https://klbtheme.com/supgor/wp-content/uploads/2025/10/logo-light-2.png" } className='me-5'></img>
            </a> <p class="text-body-secondary">© 2025</p> </div> <div class="col mb-3"></div> <div class="col mb-3"> <h5>Get to know us</h5> <ul class="nav flex-column"> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Careers for Supgor</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Careers for Supgor</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Careers for Supgor</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Careers for Supgor</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Careers for Supgor</a></li> </ul> </div> <div class="col mb-3"> <h5>Let Us Help You</h5> <ul class="nav flex-column"> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Your Orders</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Your Orders</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Your Orders</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Your Orders</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Your Orders</a></li> </ul> </div> <div class="col mb-3"> <h5>Make Money with Us</h5> <ul class="nav flex-column"> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Sell on Supgor</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Sell on Supgor</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Sell on Supgor</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Sell on Supgor</a></li> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Sell on Supgor</a></li> </ul> </div> 
            </footer> <div class="container"> <footer class="py-3 "> 
              <ul class="nav justify-content-center border-bottom pb-3 mb-3"> </ul> 
              <p class="text-center text-body-secondary">© 2025 Company, Inc</p> </footer>
             </div></div>
    
    </>
  )
}

export default Footer