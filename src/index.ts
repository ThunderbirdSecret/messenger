
import Router from "utils/Router";
import AuthController from "services/AuthController";
import Authorization from "pages/authorization/authorization";
import Registration from "pages/registration/registration";
import { ProfilePage } from "pages/settings/settings";
// import Page404 from "pages/page404/page404";
// import Registration from "pages/registration/registration";
// import Settings from "pages/settings/settings";
// import Dialog from "pages/dialog/dialog";

// Object.values(components).forEach((Component: BlockConstructable) => {
//     registerComponent(Component);
// });

enum Routes {
  Authorization = "/",
  Registration = "/signup",
  Settings = "/settings",
  Dialog = "/messenger",
  // ChangeData= = "/changedata",
  // ChangePassword = "/changepassword",
  Page404 = "/404"

}

window.addEventListener("DOMContentLoaded", async () => {
  Router
    .use(Routes.Authorization, Authorization)
    .use(Routes.Registration, Registration)
    .use(Routes.Settings, ProfilePage)
    // .use(Routes.Dialog, Dialog)
    // .use(Routes.ChangeData, ChangeData)
    // .use(Router.ChangePassword, ChangePassword)
    // .use(Routes.Page404, Page404)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Authorization:
    case Routes.Registration:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.getUser()

    Router.start()
    if(!isProtectedRoute){
      Router.go(Routes.Settings)
      // Router.go(Routes.Dialog)

    } 
  } catch(e) {
    Router.start()

    if(isProtectedRoute){
      Router.go(Routes.Authorization)
      }
    }

  })
