This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Calendar page
Please refer to the file `cal_README.md` for instructions on linking your calendar to the one displayed on this website.

# Making changes to your website
## How to make changes:
### Edit directly from the browser
Simply change the current link (https://github.com/include-davis/artruism) to https://github.dev/include-davis/artruism. This should open up this repository in an online editor where you can follow the proceeding steps to make changes.
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

To do this, first navigate to `pages -> index.js` and add the following line at the top of the page:

`import FunctionName from '.\[New_Page_Name]'`

Make sure `[New_Page_Name]` is the same name as the `.js` file and `FunctionName` is the same as the one from your export statement in that file.

Then, in you will see a section that looks like the following: 

```
<div className={styles.container}>
    <Nav />
    <div id='home'><Homepage /></div>
    <div id="about"><About /></div>
    <div id="gallery"><Gallery /></div>
    <div id="calendar"><Calendar /></div>
    <div id="join"><Join /></div>
    <div id='contact'><Contact /></div>
    <Footer />       
</div>
```
This is the list of pages, in the order they appear on the website. In order to add your page, add the line 

`<div id="[page_name]">FunctionName</div>`

to wherever in the order of pages you wish for your page to appear. Make sure your `[page_name]`
in the id is unique and not the same as any other id in the page. Also make sure that `[page_name]` is surrounded by quotation marks. Ensure that `FunctionName` is the same as the one in the export statement in you `.js` file.

### Creating a new component
To create a new component, create a `.js` file in the `components` folder and a corresponding `.css` file in the `styles folder` and follow the same steps as above.

### How to change text
Locate the page where the text you are looking to change is located. Navigate to this page at `pages -> [PageName].js`. Locate where the text you are looking for is location. Most often, it will show up in one of these tags:

Headings:
`<h1> Heading Text </h1>`
`<h2> Heading Text </h2>`
`<h3> Heading Text </h3>`

Paragraphs:
`<p> Paragraph Text </p>`

Replace the placeholder "Heading Text" or "Paragraph Text" or other filler text with whatever content you have. Make sure your text goes between the tags.

### How to change images

Upload the image you want into the folder `public`. Navigate to the page you want to change in the `pages` folder and find the image you wish you change. It will look something like this:

`<img src="public/OldImageName.png"/>`

Update the `src` in that line of code to be

`<img src="public/[NewImageName].png"/>`

### How to update your roster
First, upload a picture of the new member to the folder `public`. Make sure this image is square; otherwise, it may look stretched on the website.

Navigate to the file `pages -> about.js`. Here, you will see a code block that looks like this:
```
<div className="col-sm-3 col-sm-2">
    <div className="card border-dark transform-on-hover">
        <a className="lightbox" href="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" target="_blank"><img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" className="card-img-top" /></a>
        <div className="card-body">
            <h3>Name 4</h3>
            <p className="text-muted card-text">Designer Name</p>{/* Facebook */}
            <FaFacebook/>
        {/* Instagram */}
        <FaInstagram/>
        {/* Linkedin */}
        <FaLinkedin/>
        </div>
    </div><br />
</div>
```

Create a new `div` that looks exactly like this example, and locate the `img` tag that looks like this: `<img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" className="card-img-top" />` 

Change the `src` of to the new image you uploaded with the method mentioned above, under the header "How to change images"

Locate the header for the name that looks like this: `<h3>Name 4</h3>` and replace "Name 4" with the name of the member you are adding to the roster.

# Testing your changes
The folllowing assumes you have Next.js installed on your computer. 
If you are using a computer running Windows, please use Git Bash to run the commands. If you are on MacOS or Linux, you do not need to use this.

## Testing the frontend (email will not work)
Open up a terminal window and run the following commands:
`cd [path_to_directory]`
`npm install`
`npm run dev`
website will open up at `http://localhost:3000`

When done testing:
Go back to your terminal and CTRL + C to end the process

## Testing frontend and backend together

# Getting Started

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
