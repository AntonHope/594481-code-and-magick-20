'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var INDENT = 30;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = -150;
var BAR_INDENT = 50;

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function renderText(ctx, text, x, y) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText(text, x, y);
}

function getMaxElement(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = Math.round(arr[i]);
    }
  }
  return maxElement;
}

window.renderStatistics = function (ctx, players, time) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx, 'Ура, вы победили!', CLOUD_X + INDENT, CLOUD_Y + INDENT);
  renderText(ctx, 'Список результатов:', CLOUD_X + INDENT, CLOUD_Y + INDENT * 2);

  var maxTime = getMaxElement(time);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.random() * 100;
      ctx.fillStyle = 'hsla(240, ' + saturation + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + 40 + (BAR_INDENT + BAR_WIDTH) * i, CLOUD_Y + 240, BAR_WIDTH, (MAX_BAR_HEIGHT * time[i]) / maxTime);
    renderText(ctx, players[i], CLOUD_X + 40 + (BAR_INDENT + BAR_WIDTH) * i, CLOUD_Y + 260);
    renderText(ctx, Math.round(time[i]), CLOUD_X + 40 + (BAR_INDENT + BAR_WIDTH) * i, CLOUD_Y + 80 - MAX_BAR_HEIGHT + (MAX_BAR_HEIGHT * time[i]) / maxTime);
  }
};

