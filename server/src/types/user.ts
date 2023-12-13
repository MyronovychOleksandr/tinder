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
    location:{
        type: string
        coordinates: number[]
    }
    likedUsers?: string[]
    images: string[]
}

export interface IGetUsersParams {
    gender?: string,
    minAge?: number,
    maxAge?: number,
    tags?: string[],
    search?: string,
    page?: number,
    pageSize?: number,
    coordinates?: number[],
    maxDistance?: number,
    currentUserId?: string
}

