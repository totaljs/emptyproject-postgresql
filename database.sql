-- ==============================
-- TABLES
-- ==============================

CREATE TABLE "public"."cl_config" (
	"id" varchar(30) NOT NULL,
	"type" varchar(10),
	"value" text,
	"name" varchar(50),
	"dtcreated" timestamp DEFAULT now(),
	"dtupdated" timestamp,
	PRIMARY KEY ("id")
);

CREATE TABLE "public"."tbl_product" (
	"id" varchar(25) NOT NULL,
	"name" varchar(50),
	"price" float4 DEFAULT 0,
	"dtcreated" timestamp DEFAULT now(),
	"dtupdated" timestamp,
	PRIMARY KEY ("id")
);

CREATE TABLE "public"."tbl_log" (
	"id" serial,
	"userid" varchar(25),
	"user" varchar(50),
	"schema" varchar(50),
	"code" varchar(10),
	"ip" cidr,
	"ua" varchar(50),
	"data" text,
	"dtcreated" timestamp DEFAULT now(),
	PRIMARY KEY ("id")
);

-- ==============================
-- DATA
-- ==============================

-- INSERT DEFAULT CONFIGURATION
INSERT INTO "public"."cl_config" ("id", "type", "value", "name", "dtcreated") VALUES
('author', 'string', 'Peter Sirka', 'Author', NOW()),
('email', 'string', 'info@totaljs.com', 'Email', NOW()),
('name', 'string', 'Your app name', 'Name', NOW()),
('totalapi', 'string', '', 'Total.js API services token', NOW()),
('mail_smtp', 'string', 'localhost', 'SMTP host', NOW()),
('mail_smtp_options', 'json', '{"user":"","password":"","timeout":2000}', 'SMTP options', NOW()),
('url', 'string', 'https://YOURDOMAIN.com', 'URL address', NOW());

-- INSERT PRODUCTS
INSERT INTO "public"."tbl_product" ("id", "name", "price") VALUES
('9h2w001bd41d', 'iPhone', 699),
('9h2w002bd40d', 'iMac', 1699),
('9h2w003bd41d', 'iPad', 999),
('9h2w004bd40d', 'AriPods', 199);