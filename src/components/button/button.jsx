
function Button( {fetchData, url, title, disabled}) {
    return (
        <button type="button" onClick={() => fetchData(url)} disabled={disabled}>{title}</button>
    );

}

export default Button;
