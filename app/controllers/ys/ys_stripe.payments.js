var Stripe = require('stripe');

module.exports = function(wagner) {
  var stripe = Stripe(process.env.STRIPE_API_KEY);

  wagner.factory('ysStripe', function() {
    return stripe;
  });

  return {
    ysStripe: stripe
  };
};
