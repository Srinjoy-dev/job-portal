import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "../ui/toast";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import axios from "axios";

const Navbar = () => {
  const {user} = useSelector(store=>store.auth)//destructuring user from store auth
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async() => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      if(res.data.success) {
        dispatch(setUser(null));//whenever we logout user will be null
        navigate("/");//navigate to home page
        toast.add({
          title: res.data.message,
          type: "success"
        });
      }
    } catch (error) {
      console.log(error);
      toast.add({
         title: error.response?.data?.message || "Something went wrong",
         type: "error",
});
      
    }
  }

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">

        {/* left side things */}
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        {/* right side things */}
        <div className="flex items-center gap-12">

          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>

          {!user ? (
            <div className='flex items-center gap-2'>
              <Link to="/login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Sign Up</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger render={<Avatar className="cursor-pointer" />}>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div>

                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>

                    <div>
                      <h4 className="font-medium">Srinjoy Ghosh</h4>

                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col my-2 text-gray-600">

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={logoutHandler}variant="link">
                        Logout
                      </Button>
                    </div>

                  </div>

                </div>
              </PopoverContent>
            </Popover>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;