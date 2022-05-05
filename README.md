This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Making changes to your website
## How to make changes:
### Where to find pages
You can find entire pages in the `pages` folder, with file names `[Page_Name].js`.
Individual components like the nav bar and footer can be found in the `components` folder.

### How to create new page/component:
Go to `pages` folder and create a document titled `[New_Page_Name].js`, replacing "[New_Page_Name]" with whatever the page will be called. Create a `.css` file in the folder `styles`.

In your `.js` file, use the following template to create your page:
```
    import Head from 'next/head'
import styles from '../styles/homepage.module.css'


function Homepage() {
    return(
        <div className={styles.home_container}>
            <Head>
                <title>Artruism</title>
            </Head>
            
            <div className={styles.home_headerContainer}>    
                <h1 className={styles.home_header}>DRAWING FOR A DIFFERENCE</h1>
            </div>

            <div className={styles.home_mainContent} >
                <img className={styles.home_logo} src="../public/artruism_logo.png"></img>
                <div className={styles.home_copytext}>
                    <h2>Artruism @ UC Davis</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class={styles.home_button_container}>
                        <button>
                            <p>Join Our Team!</p>
                        </button>
                        <button>
                            <p>Upcoming Events</p>
                        </button>   
                    </div>    
                </div>
            </div>
            <div className={styles.downArrow}>
                <p>Learn More
                    <br/>
                    <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.68701 1L13.687 13L25.687 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </p>
            </div>
        </div>
    )

}

export default Homepage
```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
