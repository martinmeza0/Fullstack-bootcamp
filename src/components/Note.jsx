
const Note = ({ id, content, date }) => {

    return ( 
      <li>
        <p>
            {id}
            <br/>
            {content} 
            <br/>
            <time>{date}</time>
        </p>
      </li>
    )
}

export default Note
