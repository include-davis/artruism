This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Making changes to your website
## How to make changes:
### Where to find pages
You can find entire pages in the `pages` folder, with file names `[Page_Name].js`.
Individual components like the nav bar and footer can be found in the `components` folder.

### How to create new page/component:
Go to `pages` folder and create a document titled `[New_Page_Name].js`, replacing "[New_Page_Name]" with whatever the page will be called. Create a page called `[New_Stylesheet].css` file in the folder `styles`, replacing "[New_Stylesheet]" with the same name as your page.

In your `.js` file, use the following template to create your page:
```
import Head from 'next/head'
import styles from '../styles/[New_Stylesheet].css'


function FunctionName() {
    return(
        <div className={styles.home_container}>
            #header
            <Head>
                <title>Artruism</title> 
            </Head>
            
            #content creation
            <div className={styles.[className]}></div>

            
        </div>
    )

}

export default FunctionName
```

`[New_Stylesheet]` in the import statement needs to have the same name as your `.css` file. Make sure `FunctionName` is always capital, and that the FunctionName in the function and the export statement at the end match. 

Once you create a new page, add a link to it in `pages -> index.js`.

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
