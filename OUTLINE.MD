# Techs used :

- `React.js`
- `Express.js`
- `NodeMailer`

## colors :

--color-primary : #0c1c22;
--color-backround: #f6e9d1;
--color-accent: #ba3236;

https://huemint.com/website-1/#palette=f6e9d1-0c1c22-ba3236

# Tasks :

## Design the application:

- Determine the user flow and overall functionality of the application. `DONE`
  https://www.figma.com/file/fHXU2vXw2V5BCOntyucS3B/Email-Sender?node-id=0%3A1&t=IzDhI0fYW7w4WXmi-0

- Create wireframes or mockups of the application to visualize the layout and user interface. `DONE`

- Design the look and feel of the application, including colors, fonts, and other visual elements. `DONE`

## Set up the development environment:

- Create a new React.js project using Vite `DONE`

- Install any additional dependencies or libraries that you will need, such as a third-party email service or Nodemailer, scss, axios `DONE`

## Implement the email sending feature:

- Test the email sending feature to make sure it is working as expected. `DONE`
  testing with CURL

```bash
curl -X POST -H "Content-Type: application/json" -d '{"to":"0xtz.52@gmail.com", "subject":"test", "text":":fire: working"}' http://localhost:3131/send
```

## Build the rest of the application:

- create the base of the app `DONE`
- create the form `DONE`
- create routes `DONE`
- Home Page, sections `DONE`
- send-mail Page `DONE`
- Create the Form `DONE`
- create the email sending feature `DONE`
- test the email sending feature `DONE`
- Remove the unesesary code `DONE`
- clean the Scss `DONE`
- create the footer

## Deploy the application:

- Choose a hosting provider for your application, such as Vercel, AWS, or GitHub Pages.
- Follow the appropriate steps to deploy the application to the hosting provider.
- Test the deployed application to make sure it is working as expected.
- Push the code to a GitHub repository:

---

```bash
echo "# Email-Sender-React.js-Express.js" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:0xtz/Email-Sender-React.js-Express.js.git
git push -u origin main
```
