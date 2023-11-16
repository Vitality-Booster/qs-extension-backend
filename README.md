# Quantified Student Web Extension Back-end 
This repository is for a back-end part of the web extension built for the Quantified Student project. This part is mostly responsible for the interaction with the database and properly aggregating the collected data into statistics. 

## How it works
The service has a number of reachable endpoints that can be accessed in order to work with the database or to get a user statistics.

At the moment this service is managing to main entities: Users and Statements. User functionality involves simple login/sing up/logout functionality fo the users of the application. Statements at the same time represent the User's browser history. The service performs the CRUD functionality on the Statements and can also aggregate the User's statements to generate statistics.

## Usage
In order to successfully start using the service follow these steps:
1. Create an `.env` file in the root folder with the following parameters: `PORT`, `DB_CONNECT`, where the "PORT" will determine the port on which the service will launch on your machine and "DB_CONNECT" represents the connection string to the MongoDB.
2. Run `npm install` to install all the required dependencies.
3. Run `npm run dev` to run the service on your machine.
4. Enjoy :)

## What's coming?
The web extension has still a long way to go. Here are some of the features that you can expect coming as soon as possible:

1. **User anonymization**. The data stored in the database will be anonymized, so that the link between a specific user and their browsing data was unidentifiable.
2. **Diverse statistics**. Add more diverse statistics for the users to get even better insights on their day-to-day performance. 
3. **Ecosystem integration**. A possibility for the extension to integrate into the school ecosystem (e.g., Outlook, Canvas, Teams, etc.).