import Hobby from './Hobby.jsx';
const Hobbies = ({hobbyList}) => {
    return(
        <div>
            <ul>
                <Hobby hobbyList={hobbyList}/>
            </ul>
        </div>
    )
}

export default Hobbies;