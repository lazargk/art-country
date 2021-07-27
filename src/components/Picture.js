import './Picture.css'
import CatPhoto from '../img/cat.jpg'

const Picture = ({p}) =>{    
    if (null == p) {
        p = CatPhoto
    }
    return <article className="Picture">
        <img src={p} alt="picture"/>
        <p></p>
    </article>
}

export default Picture;