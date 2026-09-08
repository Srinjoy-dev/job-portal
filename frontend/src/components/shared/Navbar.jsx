import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
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
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

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

                {/* buttons */}
                <div className="flex flex-col items-start text-gray-600">
                  <Button variant="link">View Profile</Button>
                  <Button variant="link">Log Out</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

      </div>
    </div>
  );
};

export default Navbar;