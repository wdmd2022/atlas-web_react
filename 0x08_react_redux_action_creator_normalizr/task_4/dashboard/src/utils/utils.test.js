import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear gives the correct year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear().toString());
});

test('getFooterCopy for true returns correct string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy for false returns correct string', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification tells us what we want to hear', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
