CREATE TABLE chats (
    sequence INT AUTO_INCREMENT UNIQUE,
    name VARCHAR(50),
    message VARCHAR(255)
);

-- @block
INSERT INTO chats (name, message) VALUES ('Brian', 'Doing fine!');
