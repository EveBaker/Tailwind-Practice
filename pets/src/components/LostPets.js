import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PetCard from './PetCard';
import PetModal from './PetModal';

const allLostPets = [
  {
    id: 1,
    typePost: false,
    userLogin: "placeholder2@gmail.com",
    username: "Cystal",
    avatar: "",
    datePost: "2020-08-07 13:52:58",
    type: "Dog",
    name: "Lulu",
    sex: "Female",
    breed: "Maltese mix",
    photos: ["/pets/Lulu.png"],
    address: { country: "United States", city: "Clarmore, OK" },
    description: "NA",
    status: "Lost",
    size: "small",
    distance: 10
  },
  {
    id: 2,
    typePost: false,
    userLogin: "placeholder5@gmail.com",
    username: "Jamie",
    avatar: "",
    datePost: "2020-08-07 13:52:58",
    type: "Cat",
    name: "Timmy",
    sex: "Male",
    breed: "Domestic short hair",
    photos: ["/pets/Timmy.png"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "NA",
    status: "Lost",
    size: "Medium",
    distance: 20
  },
  {
    id: 3,
    typePost: false,
    userLogin: "placeholder8@gmail.com",
    username: "Eve Baker",
    avatar: "",
    datePost: "2020-08-07 13:52:58",
    name: "Gracie",
    type: "Cat",
    sex: "Female",
    breed: "Tabby/Domestic short hair",
    photos: ["/pets/Gracie.png"],
    address: { country: "United States", city: "Mannford, OK" },
    description: "Small Gray Female Tabby cat",
    status: "Lost",
    size: "Small",
    distance: 30
  },
  {
    id: 4,
    typePost: true,
    userLogin: "Mariahseggebruch@gmail.com",
    username: "Mariah Seggebruch",
    avatar: "",
    datePost: "2024-07-26 17:24:43",
    type: "Dog",
    name: "Arthur",
    sex: "Male",
    breed: "Corgi",
    photos: ["https://drive.google.com/open?id=1-vMMcGLSgmCmGs9ZiUo8FSMCH6thyEys"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "This bread loaf is 7 inches in height, 28 pounds (solid), loves long walks or chasing a ball in the backyard. Fixed, but still eager. Plays well with other dogs, very interested in cats but finds that they don’t enjoy his presence as much as he does theirs. Will beg for your food and talk back.",
    status: "Lost",
    size: "Medium",
    distance: 15
  },
  {
    id: 5,
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
    status: "Lost",
    size: "Small",
    distance: 25
  },
  {
    id: 6,
    typePost: true,
    userLogin: "john.doe@gmail.com",
    username: "John Doe",
    avatar: "",
    datePost: "2023-06-14 12:35:45",
    type: "Dog",
    name: "Buddy",
    sex: "Male",
    breed: "Golden Retriever",
    photos: ["/pets/Buddy.png"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "Friendly and energetic golden retriever. Loves to play fetch and enjoys long walks in the park.",
    status: "Lost",
    size: "Large",
    distance: 12
  },
  {
    id: 7,
    typePost: true,
    userLogin: "jane.smith@gmail.com",
    username: "Jane Smith",
    avatar: "",
    datePost: "2023-05-20 09:17:33",
    type: "Cat",
    name: "Whiskers",
    sex: "Female",
    breed: "Siamese",
    photos: ["/pets/Whiskers.png"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "Whiskers is a curious Siamese cat with striking blue eyes. She loves to explore and is very affectionate.",
    status: "Lost",
    size: "Medium",
    distance: 18
  },
  {
    id: 8,
    typePost: true,
    userLogin: "amy.smith@gmail.com",
    username: "Amy Smith",
    avatar: "",
    datePost: "2023-06-10 10:20:30",
    type: "Dog",
    name: "Max",
    sex: "Male",
    breed: "Beagle",
    photos: ["/pets/Max.png"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "Max is a friendly Beagle who loves to play and is very social.",
    status: "Lost",
    size: "Medium",
    distance: 5
  },
  {
    id: 9,
    typePost: true,
    userLogin: "steve.wilson@gmail.com",
    username: "Steve Wilson",
    avatar: "",
    datePost: "2023-07-15 15:50:20",
    type: "Cat",
    name: "Shadow",
    sex: "Male",
    breed: "Persian",
    photos: ["/pets/Shadow.png"],
    address: { country: "United States", city: "Tulsa, OK" },
    description: "Shadow is a quiet Persian cat who loves to nap and cuddle.",
    status: "Lost",
    size: "Large",
    distance: 22
  }
];

const LostPets = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [filters, setFilters] = useState({
    idOrName: '',
    status: 'lost',
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

  const filteredPets = applyFilters(allLostPets);

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

export default LostPets;
