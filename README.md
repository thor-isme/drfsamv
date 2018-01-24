# Project Title

It's Django+Vue+MongoDB template ready to download and with minimal configuration - ready to use.
For further information, please check out article here:
https://medium.com/p/c5c907dd7b69

## Getting Started

For first time, just download template and put in your project folder. The template already contains splitted up frontend and backend folders.

### Prerequisites

Python 3.5
Django 1.11.7
Installed npm


### Installing

For backend setup use
``` 
pip install django==1.11.7 djangorestframework markdown django-filter django-cors-headers django-rest-framework-mongoengine rest-social-auth psycopg2 django-rest-framework-social-oauth2
```

and then:
```
pip install -U mongoengine
```

for go inside the frontend folder and run the command:

```
npm install
```

Create Django project with command:
```
$ django-admin startproject mysite
```

and in the settings.py file find SECRET_KEY parameter. Copy the value for further configuration.

### Configuration

To setup the template for further usage, it's needed to configure two files.
1. **settings.py** which is stored in the backend/_main folder and find:

put here your **copied** SECRET_KEY

```
SECRET_KEY = 'YOUR APP SECRET KEY'
```

and setup database connections:
```
DATABASES = {
   'default': {
      'ENGINE': 'django.db.backends.postgresql_psycopg2',
      'NAME': 'databasename',
      'USER': 'databaseuser',
      'PASSWORD': 'yourpassword',
      'HOST': 'localhost',
      'PORT': 22222,
   }
}

connect(
   db='databasename',
   username='username',
   password='passowrd',
   host='address to database like mongodb:// and ip here',
   port=27017,
   alias="mongo"
)
```

and also for Google authentication:
```
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '[your google auth key]'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = '[your google auth secret key]'
```

2. In main.js, stored in frontend/src folder find:

```
Vue.use(VueAuthenticate, {
  providers: {
    google: {
      clientId: 'yourgooglecliendID',
      redirectUri: 'http://localhost:8080/',
      url: 'http://localhost:8000/api/login/social/token_user/google/',
    }
  }
});
```

and replace yourgooglecliendID with the same ID you're giving to the settings.py in SOCIAL_AUTH_GOOGLE_OAUTH2_KEY part. Both of them should have to be the same.
After all you can copy both of folders to your project folder and enjoying next development step.

## Running template

To run the project after installation, open two consoles and in the first one, go to the backend folder and run:

```
python manage.py runserver
```

and then in the second console - go to the frontend folder and run:

```
npm run dev
```

## Next step
In the future I'm going to prepare script to automate process above for less hassle.
If something is not clear, please visit the article https://medium.com/p/c5c907dd7b69 where I'm explaining step by step how to build this template from scratch.