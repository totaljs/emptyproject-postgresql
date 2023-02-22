-- ==============================
-- TABLES
-- ==============================

CREATE TABLE "public"."cl_config" (
	"id" text NOT NULL,
	"type" text,
	"value" text,
	"name" text,
	"dtcreated" timestamp DEFAULT now(),
	"dtupdated" timestamp,
	PRIMARY KEY ("id")
);

CREATE TABLE "public"."tbl_product" (
	"id" text NOT NULL,
	"name" vtext,
	"price" numeric DEFAULT 0,
	"dtcreated" timestamp DEFAULT now(),
	"dtupdated" timestamp,
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