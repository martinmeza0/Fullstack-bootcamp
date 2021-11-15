
const Note = ({ title, body }) => {

    return ( 
      <li>
        <h4>{title}</h4>
        <br/>
        <p>
            <time>{body}</time>
        </p>
      </li>
    )
}

export default Note
