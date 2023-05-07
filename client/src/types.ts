/**
 * ALL types for application in one file
 */

export const API_URL: string = 'http://localhost:5000'

export type TMessage = {
    id: string
    author: string
    text: string
    date: string
}

export type TChatWindowProps = {
    roomID: string
}