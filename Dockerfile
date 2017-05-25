FROM hub.c.163.com/yddocker/node:6.9.4

RUN npm config set registry http://rnpm.hz.netease.com/
FROM hub.c.163.com/yddocker/node:6.9.4

RUN npm config set registry http://rnpm.hz.netease.com/


RUN mkdir /www

WORKDIR /www

ADD package.json /www/

# RUN npm install --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs

ADD . /www/

CMD ["bin/www-babel.js"]