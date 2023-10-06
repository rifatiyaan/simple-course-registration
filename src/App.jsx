import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [carts, setCarts] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [remainingCredits, setRemainingCredits] = useState(20);

  const handleCarts = course => {
    const isExist = carts.find(x => x.id == course.id);
    let totalCredit = course.credit;
    if (isExist) {
      toast.error('The course is already registered', {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else {
      carts.forEach((x) => {
        totalCredit = totalCredit + x.credit;
      })
        
        const totalRemaining = 20 - totalCredit;
        
        if(totalCredit > 20){
         return toast.error('🦄Exceeding the credit limits!', {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
  
        }
        else{
        setTotalCredits(totalCredit);
        setRemainingCredits(totalRemaining);
        setCarts([...carts, course]);
        }     
    }
  }
  return (
    <>
      <nav className='pt-4 mx-[60px] my-4'><Header></Header></nav>
      <main className='mx-[60px] my-12 flex justify-between'>
        <div className='w-3/4 mt-4 ml-8'>
          <Courses handleCarts={handleCarts}></Courses>
        </div>
        <div className='mr-8 mt-8'>
          <Carts carts={carts} totalCredits={totalCredits} 
          remainingCredits={remainingCredits}></Carts>
        </div>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
