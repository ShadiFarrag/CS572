import { FarmsMarketModuleModule } from './farms-market-module.module';

describe('FarmsMarketModuleModule', () => {
  let farmsMarketModuleModule: FarmsMarketModuleModule;

  beforeEach(() => {
    farmsMarketModuleModule = new FarmsMarketModuleModule();
  });

  it('should create an instance', () => {
    expect(farmsMarketModuleModule).toBeTruthy();
  });
});
