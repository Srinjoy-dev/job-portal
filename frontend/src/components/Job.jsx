import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "hjggvjhvkyug";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/c7P2qLWR08VIfjSxpLOSNY7MHW0P2yqTgtqv09xGIrU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL2NyZWF0aXZl/LWVsZWdhbnQtYWJz/dHJhY3QtbWluaW1h/bGlzdGljLWxvZ28t/ZGVzaWduLXZlY3Rv/ci1hbnktYnJhbmQt/Y29tcGFueV8xMjUz/MjAyLTEzNzY0NC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA" />
          </Avatar>
        </Button>
        <div>
          <h4 className="font-medium text-lg">Company Name</h4>
          <p className="font-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg my-2">Title</h4>
        <p className="text-sm text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut id
          blanditiis nemo nulla sequi sint minima similique velit aperiam quos!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 Position
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="outline">
          Part Time
        </Badge>
        <Badge className="text-[#7209B7] font-bold" variant="outline">
          24LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=> navigate(`/description/${jobId}`)} variant="outline" className="cursor-pointer">Details</Button>
        <Button className="bg-[#7209B7] hover:bg-[#5b30a6]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
