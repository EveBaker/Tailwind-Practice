import React from 'react';

const PetCard = ({ pet, onClick }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer" onClick={onClick}>
      <img src={pet.photos[0]} alt={pet.name} className="w-full h-32 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold mb-2">{pet.name}</h3>
      <p><strong>Type:</strong> {pet.type}</p>
      <p><strong>Breed:</strong> {pet.breed}</p>
      <p><strong>Gender:</strong> {pet.sex}</p>
      <p><strong>Location:</strong> {pet.address.city}, {pet.address.country}</p>
      <p><strong>Date Posted:</strong> {new Date(pet.datePost).toLocaleDateString()}</p>
      <p><strong>Distance:</strong> {pet.distance} miles</p>
    </div>
  );
};

export default PetCard;
