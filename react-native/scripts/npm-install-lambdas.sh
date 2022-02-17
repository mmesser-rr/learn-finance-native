#!/bin/sh

rootDir=$(pwd)
for d in amplify/backend/function/* ; do
  echo Start Testing Function $d
  echo =================================================================
  echo ...Change directory
  cd $rootDir/$d
  echo $(pwd)
  echo ...Instal packages
  npm ci;    
  echo ...Run tests
  npm run test
  echo =================================================================
done
cd $rootDir

