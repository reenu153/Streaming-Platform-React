### Instructions to run the app:

Run the following line to install dependencies
`npm install`

In the project directory, you can run:
`npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Run the following command to run tests
`npm test`


### Architectural Decisions:

**Framework Choice: React**
The application has pure client side use case so no SSR required.
React was chosen over Vue due to its larger ecosystem, better tooling 
support (React Router, Testing Library), and my own personal familiarity, which allows for faster development and easier maintenance.

**Tailwindcss** was chosen over plain css or scss due to speed, lack of naming overhead and better code readability.

The UI and layout was heavily **inspired** by UI of **Netflix and Amazon Prime**.

**No global state management**: Decided against using any management libraries like Redux because the scope is relatively small and data is mostly local to pages and components

**Data fetching and caching** : Response of list of shows in home page is cached after first fetch to avoid repeated API calls and imprve performance
The other apis for getting show details adn episode details are fetched on demand since lesser probability of frequent access to same show.

**Native fetch** was used over axios because of lack of requirement of complex request config in this use case 

**Genre based organization**: Due to unavailability of api for fetching shows based on genres, the total list of shows are grouped and sorted based on genre on the client side

**Pagination was avoided** in the carousel since 250 shows are loaded on initial render — navigating that volume in a horizontal carousel is impractical UX-wise. 
**Global search** covers discovery for any show not immediately visible.

**No lazy loading and skeleton loader** in carousels because 250 shows loaded upfront on initial render and cached and image size is negligable in this scenario.




