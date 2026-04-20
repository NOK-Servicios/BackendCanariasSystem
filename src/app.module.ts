import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { StaffModule } from './staff/staff.module';
import { ProductsModule } from './products/products.module';
import { CashboxModule } from './cashbox/cashbox.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { SalesModule } from './sales/sales.module';
import { PayentsModule } from './payents/payents.module';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsService } from './payments/payments.service';
import { ReceptsModule } from './receipts/receipts.module';
import { StockmovementsModule } from './stockmovements/stockmovements.module';
import { StockService } from './movements/stock/stock.service';
import { StockalertsModule } from './stockalerts/stockalerts.module';
import { SalesproductsModule } from './salesproducts/salesproducts.module';
import { ClosuresModule } from './closures/closures.module';
import { SetlementsModule } from './setlements/setlements.module';
import { PaymentsupplierisModule } from './paymentsupplieris/paymentsupplieris.module';
import { NotificationsModule } from './notifications/notifications.module';
import { SettingsModule } from './settings/settings.module';
import { CashboxmovementsModule } from './cashboxmovements/cashboxmovements.module';
import { InstallmentsModule } from './installments/installments.module';

@Module({
  imports: [
    ClientsModule,
    StaffModule,
    ProductsModule,
    CashboxModule,
    SuppliersModule,
    SalesModule,
    PayentsModule,
    ReceptsModule,
    StockmovementsModule,
    StockalertsModule,
    SalesproductsModule,
    ClosuresModule,
    SetlementsModule,
    PaymentsupplierisModule,
    NotificationsModule,
    SettingsModule,
    CashboxmovementsModule,
    InstallmentsModule,
  ],
  controllers: [AppController, PaymentsController],
  providers: [AppService, PaymentsService, StockService],
})
export class AppModule {}
