import devfinitions from './devfinitions.json';

test('devfinitions.json is well formated', () => {
  devfinitions.forEach((item, _) => {
    expect(item).toHaveProperty('name');
    expect(item).toHaveProperty('definition');
    expect(item).toHaveProperty('link');
  });
});
