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
