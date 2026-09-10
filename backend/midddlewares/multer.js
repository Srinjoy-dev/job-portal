import multer from "multer";
const storage = multer.memoryStorage();//means the uploaded file is temporarily kept in memory rather than immediately saved to a folder on your computer.
//"Expect one uploaded file, and it's going to be called file.
export const singleUpload = multer({storage}).single("file");//this "file" name should be same as the name
//in frontend -> Signup.jsx -> input image type="file"