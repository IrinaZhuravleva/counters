
export const Counter = ({
        count,
        id,
        updateCounter,
        deleteCounter
    }) => {

        const handleDeleteClick = () =>{
            deleteCounter(id);
        }

        const handleClick = (event) =>{
            updateCounter(id, event.target.name);
        }
   
    return (
        <>
            <div>
                <h1>Counter</h1>
                <button onClick={handleDeleteClick}>delete</button>
            </div>
            
            <button onClick={handleClick} name='decrement'>+</button>
            <span id='counter'>{count}</span>
            <button onClick={handleClick} name='increment'>-</button>
        </>
    )
}

export default Counter;