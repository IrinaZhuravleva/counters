
export const Counter = ({
        count,
        id,
        updateCounter
    }) => {

        const handleClick = (event) =>{
            updateCounter(id, event.target.name);
        }
   
    return (
        <>
            <h1>Counter</h1>
            <button onClick={handleClick} name='increment'>increment</button>
            <span id='counter'>{count}</span>
            <button onClick={handleClick} name='decrement'>decrement</button>
        </>
    )
}

export default Counter;