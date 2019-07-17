# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.productname, c.categoryname from products as p join categories as c on p.categoryid = c.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT 
	o.orderid,
	s.shippername
from orders as o join shippers as s on o.shipperid = s.shipperid 
where o.orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
--Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT 
	p.productname,
	o.orderid
from products as p join orderdetails as o  
on o.productid = p.productid
where o.orderid = 10251 

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
select
	* 
from orders as o 
join customers as c on o.customerid = c.customerid
join employees as e on o.employeeid = e.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT 
c.categoryname, count(c.categoryname) as Count
FROM Categories as c left join products as p on c.categoryid = p.categoryid
group by c.categoryname

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
 select orderid, sum(Quantity) as itemCount from orderdetails as od join products as p on p.productid = od.productid 
 group by orderid

### Gabes extra challenges
###Find the number of shipments by each shipper
SELECT shippername, count(orderid) from shippers as s
join orders as o on o.shipperid = s.shipperid
group by shippername; Find the category that brings in the most revenue

###Find the top 5 best performing employees measured in number of orders
select firstname, count(orderid) as Count from employees as e left join orders as o on o.employeeid = e.employeeid
group by firstname order by Count desc limit  5

### Find the category that brings in the most revenue
 SELECT categoryname , price , sum(quantity) * price as revenue FROM
products as p join orderdetails as od on od.productid = p.productid
join categories as c on c.categoryid = p.categoryid
group by categoryname order by revenue desc limit 1


### Find the customer country with the most orders
SELECT country,
 count(quantity) as orderTotal
FROM orders as o join orderdetails as od on od.orderid = o.orderid
join customers as c on c.customerid = o.customerid 
group by country
order by orderTotal desc
limit 1

###Find the shipper that moves the most cheese measured in total units
select shippername,
categoryname,
sum(unit) as sumOfAllCheese
from orders as o join shippers as s on s.shipperid = o.shipperid
join orderdetails as od on o.orderid = od.orderid
join products as p on p.productid = od.productid
join categories as c on c.categoryid = p.categoryid
where categoryname = 'Dairy Products'
group by shippername
order by sumOfAllCheese
desc limit 1