-- Insert Addresses
INSERT INTO Addresses (country, city) VALUES
('United States', 'Clarmore, OK'),
('United States', 'Tulsa, OK'),
('Undited States', 'Mannford, OK');

-- Insert Users
INSERT INTO Users (username, email) VALUES
('Cystal', 'placeholder1@gmail.com'),
('Cystal', 'placeholder2@gmail.com'),
('Crystal', 'placeholder3@gmail.com'),
('Jamie', 'placeholder4@gmail.com'),
('Jamie', 'placeholder5@gmail.com'),
('Jamie', 'placeholder6@gmail.com'),
('Jamie', 'placeholder7@gmail.com'),
('Eve Baker', 'placeholder8@gmail.com'),
('Eve', 'Evebaker0162@gmail.com'),
('Mariah Seggebruch', 'Mariahseggebruch@gmail.com'),
('Sloane Markland', 'NA'),
('Kier McAlister', 'kierstie.mcalister@atlasschool.com'),
('Allison Binger', 'allison.binger@atlasschool.com');

-- Insert Animals
INSERT INTO Animals (id, typePost, userLogin, username, avatar, datePost, type, name, sex, breed, address_id, description, status, size) VALUES
('5f2d5cba0c742d5151901db1', false, 'placeholder1@gmail.com', 'Cystal', 'NA', '2020-08-07 13:52:58', 'Dog', 'Atlas', 'male', 'Border Collie/Blue Heeler mix', 1, 'NA', 'Found', 'Large'),
('5f2d5cba0c742d5151901db2', false, 'placeholder2@gmail.com', 'Cystal', 'NA', '2020-08-07 13:52:58', 'Dog', 'Lulu', 'female', 'Maltese mix', 1, 'NA', 'Lost', 'small'),
('5f2d5cba0c742d5151901db3', false, 'placeholder3@gmail.com', 'Crystal', 'NA', '2020-08-07 13:52:58', 'Cat', 'Gray', 'male', 'Domestic long hair', 1, '', 'Found', 'Medium'),
('5f2d5cba0c742d5151901db4', false, 'placeholder4@gmail.com', 'Jamie', 'NA', '2020-08-07 13:52:58', 'Cat', 'Lucy', 'female', 'Domestic long hair', 2, 'NA', 'Found', 'Medium'),
('5f2d5cba0c742d5151901db5', false, 'placeholder5@gmail.com', 'Jamie', 'NA', '2020-08-07 13:52:58', 'Cat', 'Timmy', 'male', 'Domestic short hair,', 2, 'NA', 'Lost', 'Medium'),
('5f2d5cba0c742d5151901db6', false, 'placeholder6@gmail.com', 'Jamie', 'NA', '2020-08-07 13:52:58', 'Cat', 'Ukiyo', 'female', 'Siamese,', 2, 'Na', 'Found', 'Medium'),
('5f2d5cba0c742d5151901db7', false, 'placeholder7@gmail.com', 'Jamie', 'NA', '2020-08-07 13:52:58', 'Cat', 'Milo', 'male', 'Siamese,', 2, '', 'Found', 'Medium'),
('5f2d5cba0c742d5151901db8', false, 'placeholder8@gmail.com', 'Eve Baker', 'NA', '2020-08-07 13:52:58', 'cat', 'Gracie', 'female', 'Tabby/Domestic short hair', 3, 'Small Gray Female Tabby cat', 'Lost', 'Small'),
('5f2d5cba0c742d5151901dba', false, 'Evebaker0162@gmail.com', 'Eve', 'NA', '2024-07-26 16:45:34', 'Cat', 'Bobby', 'male', 'Tabby', 3, 'Bobby is a large tabby cat', 'Found', 'Large'),
('5f2d5cba0c742d5151901dbb', false, 'Evebaker0162@gmail.com', 'Eve', 'NA', '2024-07-26 17:25:38', 'Cat', 'Josie', 'female', 'tuxedo cat, domestic longhair', 3, 'Josie is a long-haired tuxedo cat', 'Found', 'Small'),
('5f2d5cba0c742d5151901dbc', true, 'Mariahseggebruch@gmail.com', 'Mariah Seggebruch', 'NA', '2024-07-26 17:24:43', 'Dog', 'Arthur', 'male', 'Corgi', 2, 'This bread loaf is 7 inches in height, 28 pounds (solid), loves long walks or chasing a ball in the backyard. Fixed, but still eager. Plays well with other dogs, very interested in cats but finds that they don’t enjoy his presence as much as he does theirs. Will beg for your food and talk back.', 'Lost', 'Medium'),
('5f2d5cba0c742d5151901dbd', false, '', 'Sloane Markland', 'NA', '2024-07-27 12:18:42', 'Dog', 'Ohren', 'male', 'Chiweenie', 2, '12 year old dachshund/chihuahua mix with the greatest ears of all time.', 'Found', 'Small'),
('5f2d5cba0c742d5151901dbe', false, 'kierstie.mcalister@atlasschool.com', 'Kier McAlister', 'NA', '2024-07-27 12:35:56', 'Dog', 'Sloane', 'female', 'Lab mix?', 2, 'Medium size dog, predominantly white with one black ear and several black spots.', 'Found', 'Medium'),
('5f2d5cba0c742d5151901dbf', false, 'allison.binger@atlasschool.com', 'Allison Binger', 'NA', '2024-07-27 12:47:18', 'Dog', 'Gouda', 'male', 'Pembroke Welsh Corgi', 2, 'Gouda the Corgi, Mayor of Cheeseville. Won the Election in a landslide. Pembroke Welsh Corgi, 1 Year old, loves blueberries and green yogurt as snacks. Barks at the wind. Loves to steal socks. Great at catch but doesn’t like to give you the toy back. Has excited-tinkles sometimes but he’s sorry. Loves to be in his backpack and see people. Will lick your face off if given the opportunity.', 'Found', 'Small');

-- Insert PetFlyers (photos)
INSERT INTO PetFlyers (pet_id, photo_url) VALUES
('5f2d5cba0c742d5151901db1', '/pets/atlas.png'),
('5f2d5cba0c742d5151901db2', '/pets/Lulu.png'),
('5f2d5cba0c742d5151901db3', '/pets/Gray.png'),
('5f2d5cba0c742d5151901db4', '/pets/Lucy.png'),
('5f2d5cba0c742d5151901db5', '/pets/Timmy.png'),
('5f2d5cba0c742d5151901db6', '/pets/Ukiyo.png'),
('5f2d5cba0c742d5151901db7', '/pets/Milo.png'),
('5f2d5cba0c742d5151901db8', '/pets/Gracie.png'),
('5f2d5cba0c742d5151901dba', 'https://drive.google.com/open?id=1gPItvU6cmQ59J_Tr3iUwbntWUa7klPMV'),
('5f2d5cba0c742d5151901dbb', 'https://drive.google.com/open?id=1kkl27zvDpMhSauqBx9tF9GgWyKITmp8J'),
('5f2d5cba0c742d5151901dbc', 'https://drive.google.com/open?id=1-vMMcGLSgmCmGs9ZiUo8FSMCH6thyEys'),
('5f2d5cba0c742d5151901dbd', 'https://drive.google.com/open?id=1MmE47C3NnE4PYMOV6pjii_Ig0YqTSo3B'),
('5f2d5cba0c742d5151901dbe', 'https://drive.google.com/open?id=1oLVasS2VF8QBvnorRMWIMuYuOdW6jHEB'),
('5f2d5cba0c742d5151901dbf', 'https://drive.google.com/open?id=1Iae6LZdbQB3f7YrYh5jwI_LuSRsQzeo_');
