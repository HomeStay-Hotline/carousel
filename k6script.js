import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '2m', target: 150 },
    { duration: '5m', target: 300 },
    { duration: '1m', target: 150 },
    { duration: '30s', target: 100 },
  ],
};

// eslint-disable-next-line func-names
export default function () {
  const id = Math.floor(Math.random() * 10000000) + 1;
  const res = http.get(`http://localhost:3000/api/homes/${id}/images/places`);
  check(res, {
    'is status 200': (r) => r.status === 200,
    'transaction time < 200ms': (r) => r.timings.duration < 200,
    'transaction time < 500ms': (r) => r.timings.duration < 500,
    'no errors': (r) => !r.error,
  });
  // sleep(0.05);
}
