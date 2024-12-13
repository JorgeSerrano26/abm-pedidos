CREATE TABLE addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL,
    address VARCHAR(100) NOT NULL,
    number VARCHAR(10) NOT NULL,
    type VARCHAR(10) NOT NULL CHECK(type IN ('departamento', 'casa')),
    floor INTEGER,
    door INTEGER,
    created_at TIMESTAMP DEFAULT NOW(),

    CONSTRAINT fk_user FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE
);