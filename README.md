# chip-fivem-banking
A ReactJS bank system built for FiveM, using ESX.

You will be able to deposit, withdraw and transfer. There is also a feat where you can see all you transactions, ever.

# Usage
cd into the web folder and type ``npm install`` in the terminal to install ``node_modules``. You'll need Node.js, which you can download here. https://nodejs.org/en/ . Choose the current version.
Ïf you want to change the resource name, first direct into the ``Nui.js`` file after you install node_modules. 

When you have done all the changes you wanted, do ``npm run build`` in the terminal, again, inside the web folder in the terminal. You may get some warning, but thats fine....unless you fucked up.

Add this query into your database your're using.
```
CREATE TABLE `transactions` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`identifier` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`type` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`amount` INT(11) NULL DEFAULT NULL,
	`date` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=182
;
```
