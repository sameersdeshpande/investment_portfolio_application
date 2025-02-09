# Investment Portfolio Application

A web application that helps users manage their investment portfolios, track the performance of their investments, and analyze their financial data. This app allows users to add, update, and track their investment assets, and visualize their portfolio performance over time.
![Investment Portfolio Dashboard](/Users/sameersdeshpande/Downloads/investment-portfolio/Screenshot 2025-02-08 at 9.18.54 PM.png)
## Features

- **User Authentication**: Sign up, login, and manage user sessions securely.
- **Investment Tracking**: Add and track investments in stocks, bonds, and other assets.
- **Portfolio Overview**: Get a summary of your portfolio’s total value, asset allocation, and performance.
- **Investment Analysis**: Analyze your portfolio’s historical performance and compare it with market benchmarks.
- **Secure Data Storage**: Store user data securely in a database (powered by Supabase).
- **Interactive UI**: Use a responsive, user-friendly interface to manage your portfolio.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS, and other modern JavaScript tools.
- **Backend**: Supabase (for user authentication and data storage).
- **Authentication**: JWT (JSON Web Tokens) for secure login and session management.
- **Data Visualization**: (Optional) You can integrate charting libraries like `Chart.js` or `D3.js` for displaying portfolio performance over time.

## Setup

### Prerequisites

- Node.js (version >= 14)
- Yarn or NPM for package management
- A Supabase account for database storage

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/investment_portfolio_application.git
   cd investment_portfolio_application
     ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:
 
    ```bash
        npm run dev
    ```

4. **Environment Variables**:
    ```bash
        NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
        NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
        SUPABASE_KEY=your-supabase-service-role-key
        SESSION_SECRET=your-session-secret  
    ```

# Usage

- **Sign up**: Create an account to start managing your portfolio.
- **Login**: Use your credentials to log into the application and view your portfolio.
- **Add Investments**: Add investments by selecting asset types and entering relevant information like the amount, price, and purchase date.
- **Track Portfolio**: View your portfolio’s performance, asset allocation, and overall value.
- **Logout**: Securely log out from your account.

# Contributing

If you'd like to contribute to the development of this project, feel free to fork the repository, create a new branch, and submit a pull request. Contributions are welcome!


