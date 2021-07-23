import './Picture.css'
import CatPhoto from '../img/cat.jpg'

const Picture = () =>{
    return <article className="Picture">
        <img src={CatPhoto} alt="cat"/>
        <p>Cat is on the snow</p>
    </article>
}

export default Picture;