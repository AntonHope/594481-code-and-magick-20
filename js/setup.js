'use strict';
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomIndex(arrName) {
  return Math.floor(Math.random() * arrName.length);
}

var wizards = [
  {
    name: NAMES[getRandomIndex(NAMES)] + ' ' + SURNAMES[getRandomIndex(SURNAMES)],
    coatColor: COAT_COLORS[getRandomIndex(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomIndex(EYES_COLORS)]
  },
  {
    name: NAMES[getRandomIndex(NAMES)] + ' ' + SURNAMES[getRandomIndex(SURNAMES)],
    coatColor: COAT_COLORS[getRandomIndex(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomIndex(EYES_COLORS)]
  },
  {
    name: NAMES[getRandomIndex(NAMES)] + ' ' + SURNAMES[getRandomIndex(SURNAMES)],
    coatColor: COAT_COLORS[getRandomIndex(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomIndex(EYES_COLORS)]
  },
  {
    name: NAMES[getRandomIndex(NAMES)] + ' ' + SURNAMES[getRandomIndex(SURNAMES)],
    coatColor: COAT_COLORS[getRandomIndex(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomIndex(EYES_COLORS)]
  }
];

function renderWizards(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function renderSimilarWizards() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.append(renderWizards(wizards[i]));
  }
  return similarListElement.append(fragment);
}

renderSimilarWizards();


