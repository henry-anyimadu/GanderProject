# Gander Technical Challenge
This is a repository to hold the Gander technical challenge.

## Purpose
Just like every luxury business, Part 151 operators build their businesses on the foundation of relationships. Client relationships are extremely important in the luxury avaiation industry. Little things such as cabin tempurature, snacks on board,
or seating arrangements can have a huge impact on a client's experience.

## Function
This s a proof-of-concept web application, showcasing legacy clients, the revenue they've generated for the operator, and their preferences. This app also allows you to send an instant SMS message to your Captain, First Officer, and Flight
attendant. This SMS message would contain customer preferences, allowing a Part 151 operator to ensure that the needs of their clients are taken care of, while reducing the time and mental overhead involved in directing employees to meet these
objectives.

## Considerations
- In order to properly send SMS requests, I would need to sumbit a quota extension with AWS. The time constraint of this challenge prohibits that from happening, but faux AWS info is in the .env file.
- This is a proof-of-concept, and in the real world I would use a PostgreSQL or NoSQL database to store client information. This is easily done, especially with codegen tools.

## Tools Used
- bolt.dev for scaffolding
- Claude 3.7 Extended Reasoning for hammering out my thoughts
- Windsurf IDE because I ran out of the Cursor free trial
- My brain (somewhat)
