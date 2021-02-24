
export const CLIENT_ID = 'catalog';
export const CLIENT_SECRET = 'catalog123';

type LoginRepsonse={
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
    userFirstName: string,
    userId: number
}

export const saveSessionData = (loginResponse: LoginRepsonse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
} 

export const getSessionData = () =>{
    const sessionData = localStorage.getItem('authData') ?? '{}';
    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData as LoginRepsonse;
}