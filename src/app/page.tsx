"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [counter ,setCounter] = useState(0);

  return (
   <div>
    <h1>Hello World!!!</h1>
    <button className="btn btn-accent" onClick={()=>{setCounter(counter+10)}}>Accent</button>

{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

<div className="radial-progress" style={{ "--value": counter }} role="progressbar">
  {counter}
</div>
   </div>
  );
}


