let offlineGains = 0;

document.addEventListener('goalLoad', function(obj) {
  let title = obj.detail.title;
  let currentGains = obj.detail.amount.current + offlineGains;
  let currentGoal = obj.detail.amount.target;
  let percentageAchieved = (currentGains / currentGoal) * 100;

  //$('.goal-cont__title').html(title);
  //$('.goal-cont__current').text("$" + currentGains);
  //$('.goal-cont__total').text("$" + currentGoal);
  $('.goal-bar-progress').css({width: (percentageAchieved > 100) ? 100  + "%" : percentageAchieved + "%"});
});

document.addEventListener('goalEvent', function(obj) {
  let currentGains = obj.detail.amount.current + offlineGains;
  let currentGoal = obj.detail.amount.target;
  let percentageAchieved = (currentGains / currentGoal) * 100;

  $('.goal-bar-progress').css({width: (percentageAchieved > 100) ? 100  + "%" : percentageAchieved + "%"});
  $('.goal-cont__current').text(currentGains);
});