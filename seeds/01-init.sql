-- Create the Countries table
CREATE TABLE Countries (
  id SERIAL PRIMARY KEY,  
  country_name TEXT NOT NULL,
  city TEXT NOT NULL,
  image_url TEXT NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create the Users table
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    modified_at TIMESTAMP NOT NULL DEFAULT NOW(),
    verified BOOLEAN NOT NULL DEFAULT FALSE
);

-- Insert Users records
INSERT INTO Users (first_name, last_name, email, password, created_at, modified_at, verified)
VALUES 
    ('Alice', 'Smith', 'alice@example.com', 'password1', NOW(), NOW(), TRUE),
    ('Bob', 'Johnson', 'bob@example.com', 'password2', NOW(), NOW(), FALSE),
    ('Charlie', 'Brown', 'charlie@example.com', 'password3', NOW(), NOW(), TRUE),
    ('David', 'Davis', 'david@example.com', 'password4', NOW(), NOW(), FALSE),
    ('Eve', 'Johnson', 'eve@example.com', 'password5', NOW(), NOW(), TRUE);


-- Insert Countries records
INSERT INTO Countries (country_name, city, image_url, featured)
VALUES
  ('France', 'Paris', 'https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg', TRUE),
  ('France', 'Lyon', 'https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg', FALSE),
  ('France', 'Nice', 'https://cdn.pixabay.com/photo/2016/11/23/13/46/paris-1852928_1280.jpg', FALSE),
  ('Spain', 'Madrid', 'https://cdn.pixabay.com/photo/2016/03/27/19/47/water-1283963_1280.jpg', FALSE),
  ('Spain', 'Barcelona', 'https://cdn.pixabay.com/photo/2023/01/08/16/30/castle-7705682_1280.jpg', TRUE),
  ('Spain', 'Seville', 'https://cdn.pixabay.com/photo/2023/01/14/10/18/buildings-7717853_1280.jpg', FALSE);
  ('Canada', 'Toronto', 'https://cdn.pixabay.com/photo/2022/04/18/02/24/architecture-7139263_1280.jpg', TRUE),
  ('Canada', 'Vancouver', 'https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_1280.jpg', FALSE),
  ('Canada', 'Montreal', 'https://cdn.pixabay.com/photo/2016/11/30/15/00/lighthouse-1872998_1280.jpg', FALSE),
  ('USA', 'New York City', 'https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_1280.jpg', FALSE),
  ('USA', 'Los Angeles', 'https://cdn.pixabay.com/photo/2013/06/12/21/48/beach-139004_1280.jpg', TRUE),
  ('USA', 'Chicago', 'https://cdn.pixabay.com/photo/2017/08/31/05/36/buildings-2699520_1280.jpg', FALSE),
