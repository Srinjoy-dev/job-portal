import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["Html", "css", "Javascript", "Reactjs"];
 const isResume = true;
const Profile = () => {
    const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://imgs.search.brave.com/c7P2qLWR08VIfjSxpLOSNY7MHW0P2yqTgtqv09xGIrU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL2NyZWF0aXZl/LWVsZWdhbnQtYWJz/dHJhY3QtbWluaW1h/bGlzdGljLWxvZ28t/ZGVzaWduLXZlY3Rv/ci1hbnktYnJhbmQt/Y29tcGFueV8xMjUz/MjAyLTEzNzY0NC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA"
                alt="profile"
              />
            </Avatar>
            <div>
              <h4 className="font-medium text-xl">Full Name</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas magni optio illum.
              </p>
            </div>
          </div>
          <Button onClick={()=> setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>abc@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>1111111111</span>
          </div>
        </div>
        <div className="my-5">
          <h4>Skills</h4>
          <div className="flex items-center gap-1">
            {skills.length != 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a target="blank" href="https://youtube.com" className="text-blue-500 w-full hover:underline cursor-pointer">Demo Resume</a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
       <div className="max-w-4xl mx-auto bg-white rounded-2xl">
            <h4 className="font-bold text-lg my-5">Applied Jobs</h4>
            {/* Applied Job Table */}
            <AppliedJobTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;
