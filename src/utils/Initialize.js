export function Initialize() {
    const url = window.location.pathname
    if(url === '/') return window.history.replaceState({}, "/", "/login")
}
