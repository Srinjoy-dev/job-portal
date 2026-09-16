import DataUriParser from "datauri/parser.js";

import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

export default getDataUri;
//Data URI converts the uploaded file into a format that can be sent to Cloudinary.