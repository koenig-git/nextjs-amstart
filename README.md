# nextjs-amstart


- make sure to adapt the react-notion-x css to not use any padding or max-width. 


# deploy to ams-dev
npm run export
cd ../ams-dev
rm -r ./* 
cp ../out/* .
git add . && git commit -m "build" && git push origin
