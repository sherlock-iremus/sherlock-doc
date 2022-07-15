cd ../sherlock-sparql-queries
pwd
git add --all
git commit -m "<0001f995>"
git push origin main
cd ../sherlock-doc
pwd
yarn up sherlock-sparql-queries@https://github.com/sherlock-iremus/sherlock-sparql-queries#main
yarn
yarn start
