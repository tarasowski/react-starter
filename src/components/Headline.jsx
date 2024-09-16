function Headline({ myHeadlineText, myColor }) {
    return (
        <h1 style={{ color: myColor }}  >
            {myHeadlineText} - {myColor}
        </h1>
    )
}

export default Headline