import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Devoloper",
  "Backend Devoloper",
  "Data Analyst",
  "Graphic Designer",
  "Fullstack Devoloper",
];

const CategoryCarousel = () => {
  return( <div>
    <Carousel className="w-full max-w-xl mx-auto my-20">
      <CarouselContent>
          {
            //.map() passes each array item into the cat parameter
            category.map((cat,index)=>( //md- medium device, lg- large device
              <CarouselItem className="md:basis-1/2 lg-basis-1/3"> 
                <Button variant="outline" className="rounded-full">{cat}</Button>
             </CarouselItem>
            ))
          }
      </CarouselContent>
      <CarouselPrevious/> {/* Clicking it moves the carousel backward. left arrow button, same with next*/}
      <CarouselNext/>
    </Carousel>
  </div>
  )
};

export default CategoryCarousel;
