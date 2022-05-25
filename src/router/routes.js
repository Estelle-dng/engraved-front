
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/',
      component: () => import('src/pages/PageHome.vue'),
      name: 'Welcome',
      meta:{
        title: "Welcome"
      }
      },

      { path: '/home',
      component: () => import('src/pages/PageHome.vue'),
      name: 'Home',
      meta:{
        title: "Home"
      }
      },

      { path: '/search',
      component: () => import('src/pages/PageSearch.vue'),
      name: 'Search',
      meta:{
        title: "Search"
      }},

      { path: '/notifications',
      component: () => import('src/pages/PageNotifications.vue'),
      name: 'Notifications',
      meta:{
        title: "Notifications"
      }},

      { path: '/camera',
      component: () => import('src/pages/PageCamera.vue'),
      name: 'Camera',
      meta:{
        title: "Camera"
      }},

      { path: '/profile',
      component: () => import('src/pages/PageProfile.vue'),
      name: 'Profile',
      meta:{
        title: "Profile"
      }},

      { path: '/tattoist',
      component: () => import('src/pages/PageTattoist.vue'),
      name: 'Tattoist',
      meta:{
        title: "Tattoist"
      }},

      { path: '/settings',
      component: () => import('src/pages/PageSettings.vue'),
      name: 'Settings',
      meta:{
        title: "Settings"
      }},

      { path: '/users',
      component: () => import('src/pages/PageUsers.vue'),
      name: 'Users',
      meta:{
        title: "Users"
      }},

      { path: '/auth',
      component: () => import('src/pages/PageAuth.vue'),
      name: 'Auth',
      meta:{
        title: "Auth"
      }}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
