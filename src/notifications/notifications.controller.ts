import { Controller, Get, Patch, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNoftificationDto } from './dto/createNotificationDto';
import { UpdateNotificationDto } from './dto/updateNotificationDto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  @Get()
  findAllNotifications() {
    return this.notificationsService.findAllNotificationsService();
  }

  @Get(':id')
  findNotificationById(id: string) {
    return this.notificationsService.findNotificationByIdService(id);
  }

  @Get(':saleId')
  getNotificationBySaleId(saleId: string) {
    return this.notificationsService.getNotificationBySaleIdService(saleId);
  }

  @Post()
  createNotification(notificationCreateData: CreateNoftificationDto) {
    return this.notificationsService.createNotificationService(
      notificationCreateData,
    );
  }

  @Patch(':id')
  updateNotificationStatus(id: string, dataUpdate: UpdateNotificationDto) {
    return this.notificationsService.updateNotificationStatusService(
      id,
      dataUpdate,
    );
  }
}
