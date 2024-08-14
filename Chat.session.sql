CREATE TABLE chats (
    sequence INT AUTO_INCREMENT UNIQUE,
    name VARCHAR(50),
    message VARCHAR(255)
);

-- @block
INSERT INTO chats (name, message) VALUES ('Pia', 'Update');

-- @block
ALTER USER 'Lyle'@'%' IDENTIFIED WITH mysql_native_password BY 'qwerty';

-- @block
TRUNCATE TABLE chats;

-- @block
CREATE TABLE users ( 
    name VARCHAR(50) UNIQUE
);

-- @block
INSERT INTO users (name) VALUES ('Ian');
