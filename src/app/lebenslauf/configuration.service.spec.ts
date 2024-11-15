import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    service = new ConfigurationService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Primärfarbe', () => {
    it('should set the initial primary color', () => {
      expect(service.getPrimaryColor()).toEqual('#E839F2');
    });

    it('should set a new primary color', () => {
      const testColor = '#FF0045';
      service.setPrimaryColor(testColor);
      expect(service.getPrimaryColor()).toEqual(testColor);
    });
  });
});
