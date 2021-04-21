FROM mysql
COPY *.sql /docker-entrypoint-initdb.d
COPY custom_mysql.cnf /etc/mysql/conf.d
EXPOSE 3306
