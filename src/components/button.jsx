function Button(props) {
    const { value } = props;
    return (<button className="btn">
        {value}
    </button>
    );
}

export default Button;