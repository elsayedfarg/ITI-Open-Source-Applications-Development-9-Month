CREATE USER 'iti'@'localhost' IDENTIFIED BY 'Iti12345!';
GRANT ALL privileges ON *.* TO 'iti'@'localhost';

FLUSH privileges;

CREATE database Django_Zagazig;

use Django_Zagazig;

show tables;

desc products_product;

select * from products_product