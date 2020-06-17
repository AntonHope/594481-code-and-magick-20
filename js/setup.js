'use strict';
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function  createWizards(quantity) {
  var arrWizards = [];

  for (var i = 0; i < quantity; i++) {
    var wizard =
    {
      name: NAMES[getRandomIndex(NAMES)] + ' ' + SURNAMES[getRandomIndex(SURNAMES)],
      coatColor: COAT_COLORS[getRandomIndex(COAT_COLORS)],
      eyesColor: EYES_COLORS[getRandomIndex(EYES_COLORS)]
    };

    arrWizards.push(wizard);
  }

  return arrWizards;
}

function createWizardsElement(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var similarWizards = createWizards(4);

function renderSimilarWizards(arr) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arr.length; i++) {
    fragment.append(createWizardsElement(arr[i]));
  }

  similarListElement.append(fragment);
}

renderSimilarWizards(similarWizards);


