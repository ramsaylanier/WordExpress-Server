# WordExpress-Server
>A GraphQL server that connects to a WordPress database

WordExpress-Server is an GraphQL server that uses [WordExpressSchema](https://github.com/ramsaylanier/WordExpressSchema) to provide you with a GraphQL endpoint that your client application can use to query a WordPress database. All you need to do is provide connection details to your WordPress database (see below). Refer to the [WordExpress documentation](http://wordexpress.io/documentation#introduction) for more information.

## Setup

```
$ npm install
$ npm run start
```

Using the `/config/sample-config.json` as a template, create a `development.json` and `production.json` config file. These files will contain the connection details to your development and production WordPress databases, respectively.

## Extending the Schema
This repo currently has a few examples of how you can extend the WordExpressSchema to provide custom queries and resolvers. These examples are in the `/extensions` directory.
