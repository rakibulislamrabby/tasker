import './App.css'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import HeroSection from './components/HeroSection'
import TaskBoard from './components/task/TaskBoard'
function App() {

  return (
   <div className='px-28'>
    <Header />
    <div className='flex flex-col justify-center items-center'>
    <HeroSection />
    <TaskBoard />
    </div>
    <Footer />
   </div>
  )
}

export default App
