import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar'
import Rating from './components/Rating/Rating'
import { ToastContainer } from 'react-toastify'
import GetStarted from './components/GetStarted/GetStarted'
import Subscription from './components/Subscription/Subscription'
import WorkFLow from './components/WorkFlow/WorkFLow'
import Footer from './components/Footer/Footer'

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const [cartBadge, setCartBadge] = useState(0)

  const dataPromise = fetchData();

  return (
    <>
      <NavBar cartBadge={cartBadge}></NavBar>
      <Banner></Banner>
      <Rating></Rating>

      <Suspense fallback={
        <div className='flex justify-center mt-20  min-h-screen'>
          <div className="flex w-52 flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="skeleton h-32 w-full"></div>
          </div>
        </div>
      }>
        <Card dataPromise={dataPromise} cartBadge={cartBadge} setCartBadge={setCartBadge}></Card>
      </Suspense>

      <GetStarted></GetStarted>
      <Subscription></Subscription>
      <WorkFLow></WorkFLow>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
