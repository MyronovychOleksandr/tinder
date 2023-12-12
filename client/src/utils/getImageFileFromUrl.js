import axios from "axios";

export const getImageFileFromUrl = async (urls) => {
    try {
        const filePromises = urls.map(async (url) => {
            const response = await axios.get(url, {responseType: 'arraybuffer'});
            const filename = url.substring(url.lastIndexOf('/') + 1);
            return new File([response.data], filename, {type: response.headers['content-type']});
        });

        return await Promise.all(filePromises);
    } catch (error) {
        console.error('Upload File:', error.message);
        throw error;
    }
}