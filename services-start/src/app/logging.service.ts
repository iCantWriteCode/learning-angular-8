export class LoggingService {
    logStatusChange(status:string) {
        console.warn('A server status changed, new status: ' + status);
    }
}