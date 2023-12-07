// Nun erstellst du mit der Methode .innerHTML drei <figure> tags für unsere Galerie. Nutze den vorgegebenen HTML-Code.


let gallery = document.getElementById("gallery")

gallery.innerHTML = '<figure><img src="../img/maeva-unsplash.jpg"></figure>' + 'Fig 1.'

gallery.innerHTML += '<figure><img src="../img/maeva-unsplash.jpg"></figure>' + 'Fig 2.'

gallery.innerHTML += '<figure><img src="../img/maeva-unsplash.jpg"></figure>' + 'Fig 3.'