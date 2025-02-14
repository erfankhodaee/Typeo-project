import { useState } from "react"

const Typing = () => {

  const [typeText,setTypeText] = useState("سلام")

  

  return (
    <div><textarea  name="" id="" value={typeText}></textarea></div>
  )
}

export default Typing