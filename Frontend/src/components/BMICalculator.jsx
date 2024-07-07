import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React,{useState} from 'react'

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) =>{
    e.preventDefault();
    if(!height || !weight || !gender){
      toast.error("Please enter a height, weight and a gender");
      return;
    }
    const heightInMeters = (height) / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    
    if(bmiValue < 18.5){
      toast.warning("BMI is "+bmi+".You are Underweight. Consider seeking advice from a healthcare provider");
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9
    ){
      toast.success("You are Normal Weight. Keep it up, BMI is "+bmi);
    }
    else if (bmiValue >= 25 && bmiValue <= 29.9){
      toast.warning("You are Overweight. Consider seeking advice from a healthcare provider, BMI is "+bmi);
    }
    else{
      toast.error("You are Obese. Consider seeking advice from a healthcare provider, BMI is "+bmi );
    }
  }

  return (
    <>
<section className='bg-slate-900 bmi '>
  <h1>BMI CALCULATOR</h1>
  <div className="container">
    <div className="wrapper">
      <form onSubmit={calculateBMI}>
        <div>
          <label htmlFor='h' >Height (cm)</label>
          <input 
          id='h'
          type='number'
          value={height}
          onChange={(e)=> setHeight(e.target.value)}
           />
        </div>
        <div>
          <label htmlFor='w' >Weight (Kg)</label>
         <input
         id='w'
         type="number"
         value={weight}
         onChange={(e)=>setWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='g'>Gender</label>       
          <select 
          id='g'
           type='number'
          value={gender}
          onChange={(e)=> setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
       
        <button 
        className='bg-slate-900 text-white p-2 rounded-lg duration-100 hover:bg-slate-800 text-2xl'
        type="submit">Calculate</button>
      </form>
    </div>
    <div className="wrapper">
      <img src="/therock1.jpg" alt="" />
    </div>
  </div>
</section>
    </>
  )
}

export default BMICalculator