CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "person_id" INT REFERENCES "person"
);

INSERT INTO "item" ("description", "image_url", "person_id") 
VALUES ('Hello!', 'http://www.hello.com/img_/hellowithwaves.png', 1);

INSERT INTO "item" ("description", "image_url", "person_id") 
VALUES ('World!', 'https://pbs.twimg.com/profile_images/587949417577066499/3uCD4xxY_400x400.jpg', 1);

INSERT INTO "item" ("description", "image_url", "person_id") 
VALUES ('Money', 'https://www.merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/meme-boy-gets-paid-4140-c9dfc888677499743410feaf017cfa46@1x.jpg', 2);

INSERT INTO "item" ("description", "image_url", "person_id") 
VALUES ('Tears', 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5NS84NjIvb3JpZ2luYWwvbWFuLWNyeWluZy10ZWFycy5qcGc=', 3);