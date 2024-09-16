function Button({ text, url }) {
    return (
        <a href={url}>
            <button>{text}</button>
        </a>
    )
}

export default Button