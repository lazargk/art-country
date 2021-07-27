import './Picture.css'

const Picture = ({p}) =>{        
    return <article className="Picture">
        <img src={p} alt="painting"/>
        <p></p>
    </article>
}

export default Picture;