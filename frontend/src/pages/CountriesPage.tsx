import React, { useState } from "react";
import Carousel from "../components/Carousel";
import SelectableButton from '../components/SelectableButton';

const countries = {
  all: 'All',
  canada: 'Canada',
  france: 'France',
  spain: 'Spain',
  usa: 'USA',
}

export default function Countries(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState(countries.all);

  return (
    <section className="pt-32 pb-40 bg-orange-100 min-h-screen">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h4 className="font-heading text-2xl sm:text-2xl lg:text-2xl mb-7">
            Choose A Country
          </h4>
          <div className="inline-flex p-2 items-center border border-gray-400 rounded-full">
            <SelectableButton
              isSelected={selectedCountry === countries.all}
              text={countries.all}
              handleClick={() => setSelectedCountry(countries.all)}
            />
            <SelectableButton
              isSelected={selectedCountry === countries.canada}
              text={countries.canada}
              handleClick={() => setSelectedCountry(countries.canada)}
            />
            <SelectableButton
              isSelected={selectedCountry === countries.france}
              text={countries.france}
              handleClick={() => setSelectedCountry(countries.france)}
            />
            <SelectableButton
              isSelected={selectedCountry === countries.spain}
              text={countries.spain}
              handleClick={() => setSelectedCountry(countries.spain)}
            />
            <SelectableButton
              isSelected={selectedCountry === countries.usa}
              text={countries.usa}
              handleClick={() => setSelectedCountry(countries.usa)}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <Carousel selectedCountry={selectedCountry}/>
        </div>
      </div>
    </section>
  );
}
