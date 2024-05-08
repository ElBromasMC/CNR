# CNR

## frontend .env example
```shell
VITE_BACKEND_URL=http://localhost:8080
PUBLIC_URL=/menu
```

## webserver .env example
```shell
DB_HOST=localhost
DB_PORT=3306
DB_NAME=cnre
DB_USER=user
DB_PASSWORD=password

ENABLE_SMTP=FALSE
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
MAIL_TO=

PORT=8080
JWT_SECRET=random_string
ADMIN_EMAIL=hello@example.com
ADMIN_PASSWORD=password
```

## Docker .env file example
```shell
DB_NAME=cnre
DB_USER=user
DB_PASSWORD=password

ENABLE_SMTP=TRUE
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
MAIL_TO=

JWT_SECRET=random_string
ADMIN_EMAIL=hello@example.com
ADMIN_PASSWORD=password
```

## Docker build
```shell
$ docker build -t <username>/<name> --build-arg VITE_BACKEND_URL=$VITE_BACKEND_URL .
$ docker push <username>/<name>
```
