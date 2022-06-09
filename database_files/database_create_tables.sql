-- CREATE CUSTOMER/CONTRACT-RELATED TABLES
CREATE TABLE contact(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(255),
    office_number VARCHAR(255),
    office_number_ext VARCHAR(255),
    linkedin_url VARCHAR(255)
);

CREATE TABLE customer(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    alias VARCHAR(255),
    address VARCHAR(255) NOT NULL,
    suite VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    state_or_province VARCHAR(255) NOT NULL,
    zip VARCHAR(255) NOT NULL,
    primary_phone VARCHAR(255) NOT NULL,
    primary_phone_ext VARCHAR(255),
    secondary_phone VARCHAR(255),
    secondary_phone_ext VARCHAR(255),
    site_link VARCHAR(255),
    industry VARCHAR(255) NOT NULL,
    db_num VARCHAR(255) NOT NULL,
    invoice_email VARCHAR(255) NOT NULL,
    main_contact INT REFERENCES contact(id)
);

CREATE TABLE customer_contacts(
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customer(id),
    contact_id INT REFERENCES contact(id)
);

-- CREATE CONTRACT-RELATED TABLES
CREATE TABLE contract(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    start_date VARCHAR(255) NOT NULL,
    estimated_end_date VARCHAR(255) NOT NULL,
    actual_end_date VARCHAR(255),
    status VARCHAR(255),
    customer INT REFERENCES customer(id) NOT NULL,
    sap_account_exec INT REFERENCES contact(id),
    sales_contact INT REFERENCES contact(id),
    project_manager INT REFERENCES contact(id),
    original_amount INT,
    amount_billed INT
);

CREATE TABLE billing_schedule(
    id SERIAL PRIMARY KEY,
    contract_type VARCHAR(255) REFERENCES contract(type) NOT NULL,
    description VARCHAR(255) NOT NULL,
    consulting_role VARCHAR(255),
    hourly_rate FLOAT,
    estimated_hours INT
);

CREATE TABLE milestone(
    id SERIAL PRIMARY KEY,
    phase INT,
    expected_billing_date DATE,
    amount FLOAT,
    status VARCHAR(255)
);

CREATE TABLE billing_milestones(
    id SERIAL PRIMARY KEY,
    billing_schedule_id INT REFERENCES billing_schedule(id),
    milestone_id INT REFERENCES milestone(id)
);