# collectif-mayonnaise
Collectif à Aurillac



## Faire tourner le site en local

Si on change _config.yml

    bundle install

Pour faire tourner le serveur

    bundle exec jekyll serve


## Version web des pdf

    mv flyer.pdf hd_flyer.pdf; ps2pdf -dPDFSETTINGS=/ebook hd_flyer.pdf flyer.pdf
    mv affiche.pdf hd_affiche.pdf; ps2pdf -dPDFSETTINGS=/ebook hd_affiche.pdf affiche.pdf
    du 