import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./pages/registration/registration.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsPageModule),
  },
  {
    path: 'matchs',
    loadChildren: () =>
      import('./pages/matchs/matchs.module').then((m) => m.MatchsPageModule),
  },
  {
    path: 'matchs/:id',
    loadChildren: () =>
      import('./pages/matchs-details/matchs-details.module').then(
        (m) => m.MatchsDetailsPageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'dashboard/messages',
    loadChildren: () =>
      import('./pages/news-list/news-list.module').then(
        (m) => m.NewsListPageModule
      ),
  },
  {
    path: 'dashboard/messages/create',
    loadChildren: () =>
      import('./pages/news-create/news-create.module').then(
        (m) => m.NewsCreatePageModule
      ),
  },
  {
    path: 'dashboard/messages/:id',
    loadChildren: () =>
      import('./pages/news-update/news-update.module').then(
        (m) => m.NewsUpdatePageModule
      ),
  },
  {
    path: 'dashboard/stock',
    loadChildren: () =>
      import('./pages/stock-list/stock-list.module').then(
        (m) => m.StockListPageModule
      ),
  },
  {
    path: 'dashboard/stock/create',
    loadChildren: () =>
      import('./pages/stock-create/stock-create.module').then(
        (m) => m.StockCreatePageModule
      ),
  },
  {
    path: 'dashboard/stock/:id',
    loadChildren: () =>
      import('./pages/stock-update/stock-update.module').then(
        (m) => m.StockUpdatePageModule
      ),
  },
  {
    path: 'dashboard/users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersPageModule),
  },
  {
    path: 'dashboard/users/profile/calendar/:id',
    loadChildren: () =>
      import('./pages/calendar/calendar.module').then(
        (m) => m.CalendarPageModule
      ),
  },
  {
    path: 'dashboard/users/profile/:id',
    loadChildren: () =>
      import('./pages/user-profil/user-profil.module').then(
        (m) => m.UserProfilPageModule
      ),
  },
  {
    path: 'dashboard/users/:id',
    loadChildren: () =>
      import('./pages/user-update/user-update.module').then(
        (m) => m.UserUpdatePageModule
      ),
  },
  {
    path: 'dashboard/calendar',
    loadChildren: () =>
      import('./pages/calendar-list/calendar-list.module').then(
        (m) => m.CalendarListPageModule
      ),
  },
  {
    path: 'dashboard/calendar/create',
    loadChildren: () =>
      import('./pages/calendar-create/calendar-create.module').then(
        (m) => m.CalendarCreatePageModule
      ),
  },
  {
    path: 'dashboard/calendar/:id',
    loadChildren: () =>
      import('./pages/calendar-update/calendar-update.module').then(
        (m) => m.CalendarUpdatePageModule
      ),
  },
  {
    path: 'dashboard/teams',
    loadChildren: () =>
      import('./pages/teams-list/teams-list.module').then(
        (m) => m.TeamsListPageModule
      ),
  },
  {
    path: 'dashboard/teams/create',
    loadChildren: () =>
      import('./pages/teams-create/teams-create.module').then(
        (m) => m.TeamsCreatePageModule
      ),
  },
  {
    path: 'dashboard/teams/:id',
    loadChildren: () =>
      import('./pages/teams-update/teams-update.module').then(
        (m) => m.TeamsUpdatePageModule
      ),
  },
  {
    path: 'user/me',
    loadChildren: () =>
      import('./pages/user-me/user-me.module').then((m) => m.UserMePageModule),
  },
  {
    path: 'user/me/update',
    loadChildren: () =>
      import('./pages/user-me-update/user-me-update.module').then(
        (m) => m.UserMeUpdatePageModule
      ),
  },
  {
    path: 'footer',
    loadChildren: () =>
      import('./pages/footer/footer.module').then((m) => m.FooterPageModule),
  },
  {
    path: 'calendar/me',
    loadChildren: () =>
      import('./pages/calendar-me/calendar-me.module').then(
        (m) => m.CalendarMePageModule
      ),
  },  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
