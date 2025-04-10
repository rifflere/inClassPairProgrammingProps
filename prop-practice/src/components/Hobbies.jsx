import Hobby from './Hobby.jsx';
const Hobbies = ({hobbyList}) => {
    return(
        <div>
            <ul>
                {hobbyList.map((hobby, index) => <Hobby key={`${index}${hobby}`} hobby={hobby}/>)}
            </ul>
        </div>
    )
}

export default Hobbies;