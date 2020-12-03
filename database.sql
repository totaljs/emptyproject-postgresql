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

-- ==============================
-- DATA
-- ==============================

-- INSERT DEFAULT CONFIGURATION
INSERT INTO "public"."cl_config" ("id", "type", "value", "name", "dtcreated") VALUES
('author', 'string', 'Peter Sirka', 'author', NOW()),
('email', 'string', 'info@totaljs.com', 'email', NOW()),
('name', 'string', 'Your app name', 'name', NOW()),
('smtp', 'string', 'localhost', 'smtp', NOW()),
('smtpsettings', 'json', '{"user":"","password":"","timeout":2000}', 'smtpsettings', NOW()),
('url', 'string', 'https://YOURDOMAIN.com', 'url', NOW()));

-- INSERT PRODUCTS
INSERT INTO "public"."tbl_product" ("id", "name", "price") VALUES
('9h2w001bd41d', 'iPhone', 699),
('9h2w002bd40d', 'iMac', 1699),
('9h2w003bd41d', 'iPad', 999),
('9h2w004bd40d', 'AriPods', 199);