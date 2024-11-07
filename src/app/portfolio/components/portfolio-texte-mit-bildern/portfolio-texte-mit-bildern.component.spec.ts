import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { PortfolioTexteMitBildernComponent } from './portfolio-texte-mit-bildern.component';

describe('PortfolioTexteMitBildernComponent', () => {
  const createHost = createHostFactory(PortfolioTexteMitBildernComponent);
  let spectator: SpectatorHost<PortfolioTexteMitBildernComponent>;

  let component: PortfolioTexteMitBildernComponent;

  beforeEach(() => {
    spectator = createHost(
      '<app-portfolio-texte-mit-bildern [sektion]="sektion" />',
      {
        hostProps: {
          sektion: {
            sektionsart: 'texte-mit-bildern',
            textBilderKombinationen: [],
          },
        },
      },
    );

    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
