import jwt from "jsonwebtoken";

const isAuthenticated = async(req,res,next) => { //next sends to next route when everything is  checked
    try {
        const token = req.cookies.token;//get the cookie which is getting from token
        if(!token) {
            return res.status(401).json({
                message:"USer is not authenticated",
                success:false
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);//verify and decode if token exists
        if(!decode) {
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        //if decode is successful we get some info(in this case we'll get user id coz we generated token with that)
        req.id = decode.userId;//store the userid which we are getting after decoding
        next();//if all goes well move to next route
    } catch (error) {
        console.log(error);
        
    }
}
export default isAuthenticated;