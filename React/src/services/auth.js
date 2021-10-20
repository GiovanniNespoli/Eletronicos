export const verficado = () => localStorage.getItem('user-logado') !== null

export const parseJWT = () => 
{
    let base64 = localStorage.getItem('user-logado').split[1]

    return JSON.parse(window.atob(base64))
}