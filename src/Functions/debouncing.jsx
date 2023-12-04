export function debounce(func,delay){
    let timeoutid;
    return function(...args){
        clearTimeout(timeoutid);
        timeoutid = setTimeout(()=>{
            func(...args)
        },delay)
    }
}