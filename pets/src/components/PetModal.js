import React from 'react';

const PetModal = ({ pet, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-2xl">
        <button className="text-red-500 float-right" onClick={onClose}>Close</button>
        <h2 className="text-2xl font-bold mb-4">{pet.name}</h2>
        <img src={pet.photos[0]} alt={pet.name} className="w-full h-64 object-cover rounded-md mb-4" />
        <p><strong>Type:</strong> {pet.type}</p>
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Gender:</strong> {pet.sex}</p>
        <p><strong>Location:</strong> {pet.address.city}, {pet.address.country}</p>
        <p><strong>Date Posted:</strong> {new Date(pet.datePost).toLocaleDateString()}</p>
        <p><strong>Distance:</strong> {pet.distance} miles</p>
        <p><strong>Description:</strong> {pet.description}</p>
      </div>
    </div>
  );
};

export default PetModal;
