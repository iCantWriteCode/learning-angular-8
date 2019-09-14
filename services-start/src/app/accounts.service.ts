import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'TestAccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingService: LoggingService) {}

      statusUpdated = new EventEmitter<string>()

      addAccount(name:string, status: string) {
        this.accounts.push({name, status});
        this.loggingService.logStatusChange(status)
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status
        this.loggingService.logStatusChange(status)
      }

}