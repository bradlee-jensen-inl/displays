CREATE DATABASE hpcdatawarehouse;

CREATE TABLE cluster (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    server text,
    accepted_on DATE,
    commissioned_on DATE,
    decommissioned_on DATE,
    scheduler TEXT,
    made_public_on DATE
);

CREATE TABLE datacenter_hardware_chassis (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    display_name TEXT,
    cluster_id INTEGER REFERENCES "cluster",
    dcim_row INTEGER,
    dcim_rack INTEGER,
    dcim_unit_start_location INTEGER,
    chassis_height INTEGER,
    information TEXT,
    front_image_path TEXT,
    back_image_path TEXT,
    last_updated DATE DEFAULT now(),
    hardware_type TEXT,
    service_tag TEXT,
    inl_asset_tag TEXT
);

CREATE TABLE datacenter_hardware (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    display_name TEXT,
    datacenter_hardware_chassis_id INTEGER REFERENCES "datacenter_hardware_chassis",
    information TEXT,
    dcim_left_start INTEGER,
    dcim_top_start INTEGER,
    front_image_path TEXT,
    back_image_path TEXT,
    last_updated DATE DEFAULT now(),
    service_tag TEXT,
    inl_asset_tag TEXT,
    hardware_type TEXT,
    owner TEXT
);