import React from "react";

const ServiceProviderButton = ({ image, providerName, event }) => {
  return (
    <button
      className="bg-white px-6 py-2  text-xs rounded-md text-gray mb-5 flex items-center space-x-4"
      onClick={event}
    >
      <img src={image} alt="google_logo" className="w-4" />
      <span>{providerName}</span>
    </button>
  );
};

export default ServiceProviderButton;
