/*
Gives you a positive message each time you open a Github page.
*/

function cheerup() {
	var phrase = [
  "Où est l'éléphant rose ?",
  "Si vous pouvez le rêver, vous pouvez le faire !",
  "J'ai décidé d'être heureux parce que c'est bon pour la santé."
    ];
    var hasard = phrase[Math.round(Math.random()*(phrase.length-1))];
    return hasard;
}

alert(cheerup());