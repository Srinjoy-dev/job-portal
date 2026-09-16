import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "./ui/toast";
import axios from "axios";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    fullName: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map((skill) => skill) || [],
    file: user?.profile?.resume || "",
  });

  //need this update new userdata in redux
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files ?.[0]; //only need 0th index value
    setInput({...input, file})//only change the file
  }

  const submitHandler = async (e) => {
    e.preventDefault();//stops the forms default behaviour like refreshing the page
    const formData = new FormData();//packages normal form values and files together so they can be sent to the backend.
    formData.append("fullname", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if(input.file) {
        formData.append("file", input.file)//append only if file is properly uploaded
    }
    try {
      //add a loading block while the data updates
      setLoading(true);

        const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {//this req updates the user profile
            headers:{
                'Content-Type':'multipart/form-data'//a way to send data to the backend when the request contains both normal fields and files.
            },
            withCredentials:true
        });
        if(res.data.success) { //checks whether the backend says the update was successful.
            dispatch(setUser(res.data.user));//updates the redux data
            toast.add({
  title: res.data.message,
  type: "success",
});
        }
    }  
     catch (error) {
  console.log("ERROR:", error);
  console.log("RESPONSE:", error.response);
  console.log("DATA:", error.response?.data);
}    finally {
          setLoading(false);
        }
    setOpen(false);
    console.log(input);//prints the current form data
  };
  

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="sm:max-w-106.25"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                {/*htmlFor="name" → tells the label which input it belongs to.id="name" → identifies that input.*/}
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={input.fullName}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input
                  id="number"
                  name="number"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {
                // rendering conditionally
                loading ? (
                  <Button className="w-full my-4">
                    {" "}
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please Wait
                  </Button>
                ) : (
                  <Button type="submit" className="w-full my-4">
                    Update
                  </Button>
                )
              }
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
