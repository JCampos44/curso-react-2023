const MyButton = ({ text }) => {

    const handleClick = (title) => {
        console.log('Me diste click: ' + title)
    }

    return (
        <button onClick={() => handleClick(text)}>{text}</button>
    )
}

export default MyButton