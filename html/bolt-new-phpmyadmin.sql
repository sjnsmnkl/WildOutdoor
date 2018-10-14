
CREATE DATABASE IF NOT EXISTS `bolt` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `bolt`;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `product_code` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_desc` varchar(255) NOT NULL,
  `price` int(10) NOT NULL,
  `units` int(5) NOT NULL,
  `total` int(15) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_code` varchar(60) NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_desc` tinytext NOT NULL,
  `product_img_name` varchar(60) NOT NULL,
  `qty` int(5) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_code` (`product_code`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_code`, `product_name`, `product_desc`, `product_img_name`, `qty`, `price`) VALUES 
(1, 'TRIP1', '3 Days Train Trip', 'Leave the city centre behind and glide through gentle prairie fields, rugged lake country and picturesque towns to the snowy peaks of the majestic Rockies.', 'train.jpg', 26, '2700.00'),
(2, 'TRIP2', 'Gaint Waterfall', 'Get an up-close look at one of the world most breath-taking natural wonders during a day trip to Niagara Falls, with flights and lunch included.', 'waterfall.jpg', 7, '900.00'),
(3, 'TRIP3', 'Montreal','This is an area of Monteregie that roughly 1,600,000 people reside in.Quebec, the provincial capital, is roughly 140 miles northeast of Montreal.', 'montreal.jpg', 34, '1300.00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `pin` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(15) NOT NULL,
  `type` varchar(20) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `address`, `city`, `pin`, `email`, `password`, `type`) VALUES
(1, 'Steve', 'Jobs', 'Infinite Loop', 'California', 95014, 'sjobs@apple.com', 'steve', 'admin'),


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

---------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS travellers (
	id int(11) NOT NULL AUTO_INCREMENT,
	userid int(11) NOT NULL,
    name varchar(100) NOT NULL,
    address varchar(100) NOT NULL,
    city varchar(25) NOT NULL,
    province varchar(20) NOT NULL,
    postalcode varchar(10) NOT NULL,
    phone varchar(15) NOT NULL,
    idType varchar(20) NOT NULL,
    idNumber varchar(20) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (userid) REFERENCES users(id)
);

---------------------------------------------------------------------------------


CREATE TABLE IF NOT EXISTS billing (
	billId int(11) NOT NULL AUTO_INCREMENT,
		userid int(11) NOT NULL,
    billName varchar(100) NOT NULL,
    billAdd varchar(100) NOT NULL,
    billCity varchar(25) NOT NULL,
    billProv varchar(20) NOT NULL,
    billPost varchar(10) NOT NULL,
	PRIMARY KEY (billId),
	FOREIGN KEY (userid) REFERENCES users(id)
);

--------------------------------------------------------------------------------


CREATE TABLE IF NOT EXISTS payment (
	paymentID int(11) NOT NULL AUTO_INCREMENT,
    	userid int(11) NOT NULL,
    cardHolder varchar(100) NOT NULL,
    cardType varchar(100) NOT NULL,
    cardNumber varchar(16) NOT NULL,
    expire varchar(5) NOT NULL,
    PRIMARY KEY (paymentID),
    FOREIGN KEY (userid) REFERENCES users(id)
);


--------------------------------------------------------------------------------