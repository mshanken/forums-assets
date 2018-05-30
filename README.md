# Forums

This repo contains the source code for WS/CA forum site, if you need to make changes or add in the style (header and footer only) for each site theme, use the repo and compile theme sass/less file in order to make any update.

## What to do

For CA (sass) you need to have sass or node-sass installed. Once you are in the 
```
	ca
```
folder just run 
```
	sass --watch --style compressed assets/css/app.scss:css/cao.forum.min.css
```
to get a new css file them just dumped into the S3 bucket (check path to find out where to).

For WS (less) you only need to run 
```
	npm install
```
inside the ws folder. After making any update, just run 
```
	grunt
```
to get a new css file (css/wso.forums.min.css) which will need to be dropped in to the S3 bucket (check path to find out where to).
