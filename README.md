# Dashboard Assessment

## Instructions

1.  Clone the repository:

    ```bash
    git clone https://github.com/hitarthdesai/finance-dashboard.git
    cd finance-dashboard
    ```
2.  Install the dependencies:

    ```bash
    npm install
    ```


3.  Get an Alpha Vantage API key:

    *   Sign up for a free API key at [Alpha Vantage](https://www.alphavantage.co/support/#api-key).
    *   Set your API key as a variable inside `getTickerData.ts`:

        ```bash
        export ALPHA_VANTAGE_API_KEY="YOUR_API_KEY"
        ```

4.  `npm run dev` inside the shell

## Features finished

- [x] Handle loading and error states

        ⚠️ Not quite, used server fetch for loading the data but can be moved to the client side with `react-query`
- [x] Dashboard Layout
- [x] Minimum four different ways to visualize data
- [x] Data Table: Tabular view of the API data beneath the charts, with sortable columns.
- [x] A way to add more/new plots

        ⚠️ This is untested since I was unable to secure another API key - I think alphavantage tracks duplicate key usage through IP addresses 🤔
- [x] Layout adapts gracefully from mobile (≤ 480px) to desktop (≥ 1024px).
- [x] Code Quality & Documentation
- [x] Project structured into reusable components/modules.
- [x] README with setup instructions and any assumptions.

## Features outstanding

- [ ] Export as CSV
- [ ] Unit Tests