#!/bin/sh

for d in amplify/backend/function/* ; do
  npm --prefix "${d}/src" ci;    
done

