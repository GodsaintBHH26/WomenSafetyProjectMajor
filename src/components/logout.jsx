import React from 'react'
import { useFirebase } from '../contexts/firebase'

function Logout() {
    const firebase = useFirebase();

  return (
    <>
    <button className='bg-red-700 w-7 h-7 rounded hover:outline-3 hover:bg-white hover:outline-amber-600 hover:text-black'
    onClick={()=>{
        firebase.logOutUser();
    }}
    ><i class="ri-logout-box-r-line"></i></button>
    </>
  )
}

export default Logout