import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { PortfolioTitelComponent } from './portfolio-titel.component';

describe('PortfolioTitelComponent', () => {
  const createHost = createHostFactory(PortfolioTitelComponent);
  let spectator: SpectatorHost<PortfolioTitelComponent>;

  let component: PortfolioTitelComponent;

  beforeEach(() => {
    spectator = createHost('<app-portfolio-titel [sektion]="sektion" />', {
      hostProps: {
        sektion: { titel: 'Test-Titelkomponente', sektionsart: 'titel' },
      },
    });

    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
