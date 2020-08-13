import mixpanel from 'mixpanel-browser';

console.log('Initializing mixpanel');
mixpanel.init('ff1a110c4217ff6b263a025dac8e2a46');

const testing = false;

function track(event, payload, cb) {
  console.log(`Tracking '${event}' event`);
  if (!testing) {
    mixpanel.track(
      event,
      payload || {},
      {
        send_immediately: true,
      },
      cb || null
    );
  } else {
    console.log('Event not sent [testing mode]');
    cb && cb();
  }
}

export { track };
