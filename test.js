import { Selector } from 'testcafe';

fixture `Open Google`
    .page `https://www.google.com`;

test('Open Google Homepage', async t => {
    await t
        .expect(Selector('title').innerText).eql('Google');
});
