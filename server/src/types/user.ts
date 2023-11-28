export interface IUser  {
    firstName: string
    lastName: string
    tags?: string[]
    age: number
    email: string
    password: string
    gender: string
    id?: string;
    isAgeModified?: boolean
    likedUsers?: string[]
}