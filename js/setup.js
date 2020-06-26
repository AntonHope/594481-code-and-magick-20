'use strict';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function createWizards(quantity) {
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

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
}

var onPopupEnterPress = function(evt) {
  if(evt.key === 'Enter') {
    evt.preventDefault();
    if (setup.classList.contains('hidden')) {
      openPopup();
    } else {
      closePopup();
    }
  }
}
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var setupPlayer = document.querySelector('.setup-player');

var hiddenInputFireballColor = wizardFireball.querySelector('input[name="fireball-color"]');
var hiddenInputCoatColor = setupPlayer.querySelector('input[name="coat-color"]');
var hiddenInputEyesColor = setupPlayer.querySelector('input[name="eyes-color"]');

var changeCoatColor = function () {
  var currentCoatColor = COAT_COLORS[getRandomIndex(COAT_COLORS)];
  wizardCoat.style.fill = currentCoatColor;
  hiddenInputCoatColor.value = currentCoatColor;
}

var changeEyesColor = function () {
  var currentEyesColor = EYES_COLORS[getRandomIndex(EYES_COLORS)];
  wizardEyes.style.fill = currentEyesColor;
  hiddenInputEyesColor.value = currentEyesColor;
}

var changeFireballColor = function () {
  var currentFireballColor = FIREBALL_COLORS[getRandomIndex(FIREBALL_COLORS)];
  wizardFireball.style.backgroundColor = currentFireballColor;
  hiddenInputFireballColor.value = currentFireballColor;
}

var openPopup = function() {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  setupClose.addEventListener('keydown', onPopupEnterPress);
  setupClose.addEventListener('click', closePopup);

  wizardCoat.addEventListener('click', changeCoatColor);
  wizardEyes.addEventListener('click', changeEyesColor);
  wizardFireball.addEventListener('click', changeFireballColor);
}

var  closePopup = function() {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
  setupClose.removeEventListener('keydown', onPopupEnterPress)
  setupClose.removeEventListener('click', closePopup);

  wizardCoat.removeEventListener('click', changeCoatColor);
  wizardEyes.removeEventListener('click', changeEyesColor);
  wizardFireball.removeEventListener('click', changeFireballColor);
}

setupOpen.addEventListener('click', openPopup);

setupOpen.addEventListener('keydown', onPopupEnterPress);










