import Hobbies from './components/Hobbies.jsx';

function App() {

  const hobbyList = ["Big game hunting", "Roller Skating", "Taxidermy", "Cross stitch", "Watching (people/birds)"];

  return (
    <div className="hobby-list">
      <Hobbies hobbyList={hobbyList}/>
    </div>
  )
}

export default App
