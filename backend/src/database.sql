CREATE DATABASE dental;

CREATE TABLE bookings (
	user_id serial PRIMARY KEY,
	patient_name VARCHAR ( 50 ) NOT NULL,
	contact NUMERIC ( 20 ) NOT NULL,
	gender CHAR (1) NOT NULL,
	time INTEGER NOT NULL,
	date date NOT NULL,
	email text NOT NULL
);

CREATE TABLE payments (
	payment_id serial PRIMARY KEY,
	user_id INTEGER UNIQUE NOT NULL,
	/*patient_name VARCHAR ( 50 ) NOT NULL,*/
	pay_gen_id VARCHAR NOT NULL,
	order_id VARCHAR NOT NULL,
	amount NUMERIC ( 10 ) NOT NULL,
	transaction_time TIMESTAMP NOT NULL,
	FOREIGN KEY (user_id) REFERENCES bookings(user_id)
);
