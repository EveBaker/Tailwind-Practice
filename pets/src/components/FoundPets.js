import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PetCard from './PetCard';
import PetModal from './PetModal';

const allFoundPets = [
  {
    id: 1,
    typePost: false,
    userLogin: "placeholder1@gmail.com",
    username: "Cystal",
    avatar: "",
    datePost: "2020-08-07 13:52:58",
    type: "Dog",
    name: "Atlas",
    sex: "male",
    breed: "Border Collie/Blue Heeler mix",
    photos: ["/pets/atlas.png"],
    address: { country: "United States", city: "Clarmore, OK" },
    description: "NA",
    status: "Found",
    size: "Large",
    distance: 10
  },
  {
    id: 2,
    typePost: false,
    userLogin: "placeholder3@gmail.com",
    username: "Crystal",
    avatar: "",
    datePost: "2020-08-07 13:52:58",
    type: "Cat",
    name: "Gray",
    sex: "Male",
    breed: "Domestic long hair",
    photos: ["/pets/Gray.png"],
    address: { country: "United States", city: "Clarmore, OK" },
    description: "",
    status: "Found",
    size: "Medium",
    distance: 20
  },
  {
    id: 3,
    typePost: false,
    userLogin: "placeholder4@gmail.com",
    username: "Jamie",
    avatar: "",
    datePost: "2020-08-07 13:52:58",
    type: "Cat",
    name: "Lucy",
    sex: "Female",
    breed: "Domestic long hair",
    photos: ["/pets/Lucy.png"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "NA",
    status: "Found",
    size: "Medium",
    distance: 15
  },
  {
    id: 4,
    typePost: false,
    userLogin: "placeholder6@gmail.com",
    username: "Jamie",
    avatar: "",
    datePost: "2020-08-07 13:52:58",
    type: "Cat",
    name: "Ukiyo",
    sex: "Female",
    breed: "Siamese",
    photos: ["/pets/Ukiyo.png"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "Na",
    status: "Found",
    size: "Medium",
    distance: 25
  },
  {
    id: 5,
    typePost: false,
    userLogin: "Evebaker0162@gmail.com",
    username: "Eve",
    avatar: "",
    datePost: "2024-07-26 16:45:34",
    type: "Cat",
    name: "Bobby",
    sex: "Male",
    breed: "Tabby",
    photos: ["https://drive.google.com/open?id=1gPItvU6cmQ59J_Tr3iUwbntWUa7klPMV"],
    address: { country: "United States", city: "Mannford, OK" },
    description: "Bobby is a large tabby cat",
    status: "Found",
    size: "Large",
    distance: 30
  },
  {
    id: 6,
    typePost: false,
    userLogin: "Evebaker0162@gmail.com",
    username: "Eve",
    avatar: "",
    datePost: "2024-07-26 17:25:38",
    type: "Cat",
    name: "Josie",
    sex: "Female",
    breed: "tuxedo cat, domestic longhair",
    photos: ["https://drive.google.com/open?id=1kkl27zvDpMhSauqBx9tF9GgWyKITmp8J"],
    address: { country: "United States", city: "Mannford, OK" },
    description: "Josie is a long-haired tuxedo cat",
    status: "Found",
    size: "Small",
    distance: 12
  },
  {
    id: 7,
    typePost: false,
    userLogin: "Mariahseggebruch@gmail.com",
    username: "Mariah Seggebruch",
    avatar: "",
    datePost: "2024-07-27 12:18:42",
    type: "Dog",
    name: "Ohren",
    sex: "Male",
    breed: "Chiweenie",
    photos: ["https://drive.google.com/open?id=1MmE47C3NnE4PYMOV6pjii_Ig0YqTSo3B"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "12 year old dachshund/chihuahua mix with the greatest ears of all time.",
    status: "Found",
    size: "Small",
    distance: 18
  },
  {
    id: 8,
    typePost: false,
    userLogin: "kierstie.mcalister@atlasschool.com",
    username: "Kier McAlister",
    avatar: "",
    datePost: "2024-07-27 12:35:56",
    type: "Dog",
    name: "Sloane",
    sex: "Female",
    breed: "Lab mix?",
    photos: ["https://drive.google.com/open?id=1oLVasS2VF8QBvnorRMWIMuYuOdW6jHEB"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "Medium size dog, predominantly white with one black ear and several black spots.",
    status: "Found",
    size: "Medium",
    distance: 5
  },
  {
    id: 9,
    typePost: false,
    userLogin: "allison.binger@atlasschool.com",
    username: "Allison Binger",
    avatar: "",
    datePost: "2024-07-27 12:47:18",
    type: "Dog",
    name: "Gouda",
    sex: "Male",
    breed: "Pembroke Welsh Corgi",
    photos: ["https://drive.google.com/open?id=1Iae6LZdbQB3f7YrYh5jwI_LuSRsQzeo_"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "Gouda the Corgi, Mayor of Cheeseville. Won the Election in a landslide. Pembroke Welsh Corgi, 1 Year old, loves blueberries and green yogurt as snacks. Barks at the wind. Loves to steal socks. Great at catch but doesn’t like to give you the toy back. Has excited-tinkles sometimes but he’s sorry. Loves to be in his backpack and see people. Will lick your face off if given the opportunity.",
    status: "Found",
    size: "Small",
    distance: 22
  }
];

const FoundPets = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [filters, setFilters] = useState({
    idOrName: '',
    status: 'found',
    type: '',
    gender: '',
    location: '',
    distance: 25,
    sort: 'datePost',
  });

  const handleCardClick = (pet) => {
    setSelectedPet(pet);
  };

  const closeModal = () => {
    setSelectedPet(null);
  };

  const applyFilters = (pets) => {
    return pets.filter(pet => {
      return (
        (filters.idOrName === '' || (pet.id && pet.id.toString() === filters.idOrName) || (pet.name && pet.name.toLowerCase().includes(filters.idOrName.toLowerCase()))) &&
        (filters.status === '' || (pet.status && pet.status.toLowerCase() === filters.status.toLowerCase())) &&
        (filters.type === '' || (pet.type && pet.type.toLowerCase() === filters.type.toLowerCase())) &&
        (filters.gender === '' || (pet.sex && pet.sex.toLowerCase() === filters.gender.toLowerCase())) &&
        (filters.location === '' || (pet.address && pet.address.city && pet.address.city.toLowerCase().includes(filters.location.toLowerCase()))) &&
        (pet.distance <= filters.distance)
      );
    }).sort((a, b) => {
      if (filters.sort === 'datePost') {
        return new Date(b.datePost) - new Date(a.datePost);
      } else if (filters.sort === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  };

  const filteredPets = applyFilters(allFoundPets);

  return (
    <section className="bg-white py-16">
      <div className="flex">
        <div className="w-1/4 p-4 bg-gray-200">
          <Sidebar filters={filters} setFilters={setFilters} />
        </div>
        <div className="w-3/4 p-4">
          <div className="grid grid-cols-3 gap-4">
            {filteredPets.map(pet => (
              <PetCard key={pet.id} pet={pet} onClick={() => handleCardClick(pet)} />
            ))}
          </div>
        </div>
      </div>
      {selectedPet && <PetModal pet={selectedPet} onClose={closeModal} />}
    </section>
  );
};

export default FoundPets;
