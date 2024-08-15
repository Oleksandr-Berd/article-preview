export interface IPost {
    id?: number,
    author: string,
    date:string,
    imgAuthor: string,
    imgPost: string,
    title: string,
    text: string,

}

export interface IButton {
    openShare: ()=>void,
    closeShare: ()=>void,
    toggleShare:()=> void,

}