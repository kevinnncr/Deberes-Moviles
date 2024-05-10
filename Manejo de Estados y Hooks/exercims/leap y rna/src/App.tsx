import Leapyear from "./components/Leap"
import RnaConverter from "./components/RAN"


export const App = () => {
  return (
    <>
    <h2>¿Is it a leap year?</h2>
    <Leapyear />
    <h2>ARN</h2>
    <RnaConverter/>
    </>
  )
}

export default App