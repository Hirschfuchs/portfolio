import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { KeyValuePairComponent } from './key-value-pair.component';

describe('KeyValuePairComponent', () => {
  const createHost = createHostFactory(KeyValuePairComponent);
  let spectator: SpectatorHost<KeyValuePairComponent>;

  beforeEach(() => {
    spectator = createHost(
      `<app-key-value-pair key="Mein Key" textValue="Mein Value" />`,
    );
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should show the key', () => {
    expect('div').toHaveText('Mein Key');
  });

  it('should create', () => {
    expect('div').toHaveText('Mein Value');
  });
});
