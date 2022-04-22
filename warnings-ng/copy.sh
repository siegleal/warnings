#!/bin/bash
ng build
echo "Copying..."
cp dist/warnings-ng/*.js ../
cp dist/warnings-ng/*.html ../
cp dist/warnings-ng/*.css ../
cp dist/warnings-ng/*.map ../
echo "Done"