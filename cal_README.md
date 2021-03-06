# How to Setup Google Calendar Code with Website

## 1. Make a Copy of Google Sheets Template
  
  * Go to [Template](https://docs.google.com/spreadsheets/d/1l9v_8uz3g0w0sg6UHvpayGowa-bboL77DsTF75Me_bk/edit#gid=0) on Artruism account with the Google Calendar. **Make a copy** for your account.

## 2. Get and Copy Calendar ID
  
  * Open Google Calendar, then click the **Settings** icon > **Settings** at the top right. On the Settings page, scroll down to the Calendar you want to export. Select **Integrate calendar** from the left menu. Then, copy the value of the **Calendar ID** displayed in the right pane, as the following screenshot shows.

   ![alt text](https://i.imgur.com/20W0zg9.png)

## 3. Paste into provided Google Sheets. In the **B1 cell**

   ![alt text](https://i.imgur.com/zbaCVUm.png)

## 4. Importing Calendar

  * Click **Import Calendar**, then **Import**. It will ask to verify, please allow. After allowing, click **Import** again.

   ![alt text](https://i.imgur.com/3lH7h2c.png)

## 5. Publish Sheet for Us

  1. Go to **File** > **Share** > **Publish to Web**.![alt text](https://i.imgur.com/yvgc7ci.png)
  2. Copy the EXACT settings shown in the gif below. **Sheet2** > **.csv** > **Publish**. Copy the link for us![alt text](https://i.imgur.com/SYBwZH0.gif)

## 6. Put the link in the calendar file
  1. Locate the file `pages -> calendar.js` and find the line
  `const spreadsheet_url = ""`

  Remove the existing link, then copy and paste your calendar link in between the quotation marks in this line. Save and commit your changes. See how to test your changes in `README.md`.
   
## 7. All Done!
