DEPLOY_ENV=$1
DEPLOY_DIR=$2
DEPLOY_ACCOUNT=$3

if [ ! $DEPLOY_ENV ]; then
  DEPLOY_ENV=dev
fi
if [ ! $DEPLOY_DIR ]; then
  DEPLOY_DIR=web
fi
if [ ! $DEPLOY_ACCOUNT ]; then
  DEPLOY_ACCOUNT=`whoami`
fi
echo $DEPLOY_ENV;
echo $DEPLOY_DIR;
echo $DEPLOY_ACCOUNT;
export PATH=/home/$DEPLOY_ACCOUNT/node-v5.0.0-linux-x64/bin:$PATH
WORK_DIR=/home/$DEPLOY_ACCOUNT/$DEPLOY_DIR
WEB_DIR=$WORK_DIR/src/webapp/
echo $WORK_DIR
echo $WEB_DIR

rm -rf $WEB_DIR/webroot/
mkdir $WEB_DIR/webroot
cp -rf $WEB_DIR/index $WEB_DIR/webroot/
cp -rf $WEB_DIR/pub $WEB_DIR/webroot/index/
cp -rf $WEB_DIR/res $WEB_DIR/webroot/index/
cp $WEB_DIR/favicon.ico $WEB_DIR/webroot/
cd $WORK_DIR
pm2 start $WORK_DIR/src/server/app.js --name "website-$DEPLOY_ENV"  -e $WORK_DIR/logs/err.log -o $WORK_DIR/logs/out.log -- env=$DEPLOY_ENV
