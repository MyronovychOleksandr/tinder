import instance from "./httpsServer";

 export const deleteImage = (fileName) => {
    return instance.delete(`/images/delete-image/${fileName}`);
}