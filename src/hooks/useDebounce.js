let timeoutId
const useDebounce = (cl, wait) => {

    return () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(cl, wait)
    }

}

export default useDebounce