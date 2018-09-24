#!/bin/bash

rm -fr services
rm -f HTML_INCLUDES.html
mkdir services
for SERVICE_FILE in data/*/*/service-2.json; do
	SERVICE_NAME=$(echo $SERVICE_FILE | cut -f2 -d/)
	echo -n "awsim['$SERVICE_NAME'] = " | cat - $SERVICE_FILE > services/$SERVICE_NAME.js
	echo "	<script src=\"services/$SERVICE_NAME.js\"></script>" >> tmp
done

cat tmp | uniq > HTML_INCLUDES.html
rm tmp
