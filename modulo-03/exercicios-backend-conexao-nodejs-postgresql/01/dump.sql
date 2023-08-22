CREATE TABLE authors (
	id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age SMALLINT
);

CREATE TABLE books (
	id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  gender TEXT,
  publishing_company TEXT,
  published_at DATE,
  author_id INT REFERENCES authors(id)
);


