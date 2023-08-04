### **1. Task:** [GraphiQL](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md)
### **2. Screenshot:** ![image](https://github.com/anast-ananko/graphiql-app/assets/80781353/41d7b4c2-e20f-4ca4-9aa4-8dc8b31a4a7e)
### **3. Deploy:** [Deploy](https://rsschool-graphiql.netlify.app/) 
### **4. Video:** [Youtube](https://www.youtube.com/watch?v=DMVelvvaQA8)
__________________

### Implemented features:

#### Common
- RDW up to 320px.
- Localization (3 languages).
- Sticky header with animation.

#### Welcome route
- The welcome page in dynamic interactive components contains general information about the developers, project, and course.
- In the upper right corner there are 2 buttons: Sign In and Sign Up.
- If login token is valid and unexpired, change the Sign In and Sign Up buttons to the "Go to Main Page" button.
- When the token expires - the user should be redirected to the "Welcome page" automatically.
- Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form.

#### Sign In / Sign Up
- Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be.
- Implemented client-side validation.
- Upon successful login, the user should be redirected to the Main page.
- If the user is already logged in and tries to reach these routes, they should be redirected to the Main page.

#### GraphiQL route
- Working editor allowing to edit the query.
- Working documentation explorer visible only when sdl request will succeed.
- Variables section could be closed/opened.
- Headers section could be closed/opened
- Response section.

