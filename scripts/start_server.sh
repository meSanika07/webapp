#!/bin/bash
cd /home/ec2-user/node-app

# Stop previous app (if running)
pkill node

# Start the app in the background
nohup node app.js > app.log 2>&1 &
