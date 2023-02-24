import React, { useEffect, useState } from "react";

import useAxiosWithToken from '../hooks/useAxiosWithToken';

type Props = {
  selectedCountry: string
};

const DEFAULT_IMAGE_URL = 'https://flowbite.com/docs/images/carousel/carousel-1.svg';

const Carousel = ({ selectedCountry }: Props) => {
  const [imgList, setImgList] = useState([]);
  const [countryIdx, setCountryIdx] = useState(-1);
  const [currentImg, setCurrentImg] = useState(DEFAULT_IMAGE_URL);
  const axiosWithToken = useAxiosWithToken();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countryStr = selectedCountry === 'All' ? '' : selectedCountry;
        const res = await axiosWithToken.get(`/countries/${countryStr}`);
        if (res.data && res.data.length > 0) {
          const imgArr: any = [];
          res.data.forEach((country: any) => {
            const { image_url } = country;
            imgArr.push(image_url);
          });
          setImgList(imgArr)
          setCurrentImg(imgArr[0]);
          setCountryIdx(0);
        } else {
          setImgList([]);
          setCurrentImg(DEFAULT_IMAGE_URL);
          setCountryIdx(-1);
        }
      } catch (err) {
        console.error('Get Countries Failed')
        console.error(err)
      }
    }
    fetchCountries();
  }, [selectedCountry]);

  const handleNext = () => {
    if (countryIdx < 0) {
      return;
    }  
    let idx = countryIdx + 1;
    if (idx === imgList.length) {
      idx = 0;
    }
    setCountryIdx(idx);
    setCurrentImg(imgList[idx]);
  }

  const handlePrev = () => {
    if (countryIdx < 0) {
      return;
    }  
    let idx = countryIdx - 1;
    if (idx < 0) {
      idx = imgList.length - 1;
    }
    setCountryIdx(idx);
    setCurrentImg(imgList[idx]);
  }

  return (
    <div className="max-w-2xl relative mx-auto">
      <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <img
          src={currentImg}
          className="w-100"
          alt="..."
        />
      </div>
      <button
        onClick={handlePrev}
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-900/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        onClick={handleNext}
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
