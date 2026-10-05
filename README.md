# CraveIQ

CraveIQ is a front-end food discovery and meal-planning prototype built with plain HTML, CSS, and JavaScript. It presents sample restaurant and menu data, lets visitors browse and filter restaurants, and recommends a meal using a budget, food preference, and a simple nutrition lookup.

> **Project status:** This is a client-side demonstration, not a production food-ordering service. It has no server, database, real authentication, payment processing, live delivery tracking, or external AI service.

## Features

- **Restaurant discovery:** The home page displays 20 sample restaurant entries with cuisine, category, dietary label, rating, delivery estimate, price, image, and menu data.
- **Search and filters:** Search restaurant names and cuisines; filter the list by the available mood and category buttons.
- **Restaurant details:** Select a restaurant to view its details and menu. The selected restaurant ID is passed between pages using browser `localStorage`.
- **Budget meal planner:** Choose a budget, a protein-focused or budget-friendly goal, and an all/vegetarian/non-vegetarian preference. The planner filters the sample menus and selects the highest-protein or lowest-priced matching item, depending on the selected goal.
- **Cart prototype:** Cart-related JavaScript supports saving cart data in `localStorage` and displaying quantities and totals. The cart experience is not fully connected across the current pages; see [Known limitations](#known-limitations).
- **Additional screens:** Static login, signup, restaurant submission, and investor-relations pages are included as interface examples.
- **Responsive styling:** The meal planner styles include smaller-screen layout rules.

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Home page, restaurant discovery, search, mood/category filters, and cart display area |
| `restaurant.html` | Restaurant details and menu for the selected restaurant |
| `mealplanner.html` | Budget and nutrition-goal meal planner |
| `mealplanner2.html` | Alternate presentation of the meal planner using the same recommendation script |
| `add.html` | Restaurant submission form mockup |
| `login.html` | Login form mockup |
| `signup.html` | Signup form mockup |
| `investor.html` | Investor-relations information mockup |

## Technology

- HTML5
- CSS3
- Vanilla JavaScript (no framework or build step)
- Browser `localStorage` for selected restaurant/cart-related state
- Remote food images from Unsplash and Pexels
- Google Fonts and Font Awesome on the original meal planner page

The remote images, fonts, and icons require an internet connection. No package manager or API keys are required to view the project.

## Run locally

### Option 1: VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Open `index.html` and choose **Open with Live Server**.

### Option 2: Python's local web server

From the project folder—the directory containing `index.html`—run:

```sh
python -m http.server 8000
```

On Windows, if `python` is not recognized, try:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Stop the server with `Ctrl+C` in the terminal.

There is no install or build command. Opening pages through a local server is recommended for consistent browser behavior, including `localStorage`.

## How to try it

1. Start at `index.html`.
2. Search by restaurant name or cuisine, or use the mood/category buttons to filter the sample list.
3. Select a restaurant card to open its menu.
4. Open a meal planner, enter a positive budget, select a goal and food preference, and generate a recommendation.
5. Refresh or revisit pages to observe browser-stored state where the current scripts use `localStorage`.

## Meal recommendation logic

Recommendations are calculated entirely in `js/mealplanner.js` from the hard-coded restaurant/menu data in `js/data.js`:

1. Exclude items above the entered budget.
2. Apply the vegetarian/non-vegetarian preference when selected.
3. Use a small hard-coded nutrition table; items not in that table receive estimated fallback values in the script.
4. Sort by protein for the protein goal, or by price for the budget-friendly goal, and display the first match.

This is deterministic filtering and sorting—not machine learning or a call to an AI model. Nutrition values and fallback estimates are illustrative and should not be used as dietary guidance.

## Project structure

```text
CraveIQ/
├── index.html
├── restaurant.html
├── mealplanner.html
├── mealplanner2.html
├── add.html
├── login.html
├── signup.html
├── investor.html
├── css/
│   ├── style.css
│   ├── mealplanner.css
│   └── mealplanner2.css
├── js/
│   ├── data.js
│   ├── home.js
│   ├── restaurant.js
│   ├── cart.js
│   ├── mealplanner.js
│   └── script.js
└── img/
    ├── logo.png
    ├── 2logo.png
    └── background.png
```

- `js/data.js` contains the sample restaurant and menu objects used by the discovery, restaurant, and planner pages.
- `js/home.js` renders the home-page restaurant cards and handles search, mood/category filtering, and restaurant selection.
- `js/restaurant.js` reads the selected restaurant ID and renders its details/menu.
- `js/cart.js` contains cart rendering, quantity, and total helpers used by the home page.
- `js/mealplanner.js` contains the local recommendation logic and nutrition lookup.
- `js/script.js` is currently legacy/commented-out code and is not loaded by the HTML pages.

## Known limitations

- Login and signup forms are visual forms only; they do not create accounts, authenticate users, or validate credentials beyond browser-required fields.
- The restaurant submission form does not save or submit restaurant data.
- Restaurant/menu data and meal-planner nutrition values are hard-coded sample data. Some values use estimates.
- The meal planner does not use an AI model, backend, or live restaurant/menu service.
- Cart functionality is not integrated consistently: the home-page restaurant-card button has no cart handler, and the restaurant-page add action stores a different data shape from `js/cart.js`. Do not rely on it as a complete ordering cart.
- No checkout, payment, order submission, or real delivery tracking is implemented.
- Investor figures and contact copy are static, unverified demonstration content; they should not be treated as real company information.
- Some filter choices may have no matching sample restaurants because the available filters and sample data do not cover every option consistently.
- No automated test suite is included.

## Possible next steps

- Connect the forms, restaurant data, and cart to a backend or a documented mock API.
- Make cart actions consistent between the home page and restaurant page, then add checkout only if a payment flow is implemented securely.
- Replace illustrative nutrition values with verified data and add appropriate dietary disclaimers.
- Align mood/category filter options with the available sample data.
- Add automated tests and screenshots of the pages.

## Contributing

For a proposed change, open an issue describing the bug or improvement, then submit a pull request with a clear summary and any relevant screenshots. Keep sample data and documentation clearly identified as demonstration content.

## License

No license file is included at this time. Unless a license is added, the repository should not be assumed to grant permission to reuse or redistribute the code. Add a license that matches your intentions before inviting reuse.
