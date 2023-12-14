-- Création de la table "promo"
CREATE TABLE "promo" (
    -- liste des colonnes
        -- INT j'indique le type données attendu
        -- NOT NULL j'indique que la colonne ne peut pas avoir une valeur nulle
        -- PRIMARY KEY j'indique que la colonne est la clef primaire de la table
    id INT NOT NULL PRIMARY KEY, 
    name TEXT NOT NULL,
    github_organization TEXT
);