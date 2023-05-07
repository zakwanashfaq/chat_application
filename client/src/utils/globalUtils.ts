/**
 * Utility functions that can be used by any components
 */

export function getCookieValue(cookieName: string) {
    const cookies = document.cookie.split('; ');

    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key === cookieName) {
            return value;
        }
    }

    return null;
}