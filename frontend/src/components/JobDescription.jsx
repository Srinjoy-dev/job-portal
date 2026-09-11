import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div className="max-w-7xl my-10">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-xl">Frontend Devoloper</h4>

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
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg ${isApplied ? "bg-gray-600 cursor-not-allowed" : "bg-[#7209b7] hover:bg-[#5f32ad]"}`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h4 className="border-b-2 border-b-gray-300 font-medium py-4">Job Description</h4>
      <div className="my-4">
        <h4 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Frontend Devoloper</span></h4>
        <h4 className="font-bold my-1">Loation: <span className="pl-4 font-normal text-gray-800">Kolkata</span></h4>
        <h4 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></h4>
        <h4 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">2 yrs</span></h4>
        <h4 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">12LPA</span></h4>
        <h4 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">4</span></h4>
        <h4 className="font-bold my-1">Posted On: <span className="pl-4 font-normal text-gray-800">12-09-2026</span></h4>

      </div>
    </div>
  );
};

export default JobDescription;
