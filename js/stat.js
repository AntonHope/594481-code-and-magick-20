'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var START_X_GAP = 40;
var START_BAR_Y_GAP = 240;
var START_TEXT_Y_GAP = 260;
var START_TIME_Y_GAP = 80;
var INDENT = 30;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var BAR_INDENT = 50;
var FONT = '16px PT Mono';
var TEXT_COLOR = '#000';

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function renderText(ctx, text, x, y) {
  ctx.font = FONT;
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(text, x, y);
}

function getMaxElement(arr) {
  var maxElement = 0;
  arr.reduce(function (a, b) {
    maxElement = Math.max(a, b);
    return maxElement;
  });
  return maxElement;
}

function getRandomColor() {
  var saturation = Math.random() * 100;
  return 'hsla(240, ' + saturation + '%, 50%)';
}

window.renderStatistics = function (ctx, players, time) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx, 'Ура, вы победили!', CLOUD_X + INDENT, CLOUD_Y + INDENT);
  renderText(ctx, 'Список результатов:', CLOUD_X + INDENT, CLOUD_Y + INDENT * 2);

  var maxTime = getMaxElement(time);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(CLOUD_X + START_X_GAP + (BAR_INDENT + BAR_WIDTH) * i, CLOUD_Y + START_BAR_Y_GAP, BAR_WIDTH, (-MAX_BAR_HEIGHT * time[i]) / maxTime);
    renderText(ctx, players[i], CLOUD_X + START_X_GAP + (BAR_INDENT + BAR_WIDTH) * i, CLOUD_Y + START_TEXT_Y_GAP);
    renderText(ctx, Math.round(time[i]), CLOUD_X + START_X_GAP + (BAR_INDENT + BAR_WIDTH) * i, CLOUD_Y + START_TIME_Y_GAP - (-MAX_BAR_HEIGHT) + (-MAX_BAR_HEIGHT * time[i]) / maxTime);
  }
};

