import Hobbies from './components/Hobbies';
function App() {

  const hobbyList = ["Big game hunting", "Roller Skating", "Taxidermy", "Cross stitch", "Watching (people/birds)"];

  return (
    <>
      <Hobbies hobbyList={hobbyList}/>
    </>
  )
}

export default App
